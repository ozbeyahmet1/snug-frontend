import type { CartItem } from '@/state/cartState';
import { getSession } from '@auth0/nextjs-auth0';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe instance
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

/**
 * Handles incoming POST requests to create a Stripe Checkout Session.
 *
 * @param {NextRequest} req - The incoming request object from Next.js.
 * @returns {Promise<NextResponse>} - A JSON response containing the Checkout Session URL or an error message.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Parse the request body to extract products
    const { products }: { products: CartItem[] } = (await req.json()) as { products: CartItem[] };

    // Get the session to retrieve the user info
    const session = await getSession(req, new NextResponse());
    if (!session || !session.user) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    const userId = (session.user.sub as string).replace('auth0|', ''); // Auth0 user ID
    // Map products to Stripe line items
    const lineItems = products.map((product) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.product.title,
          images: [product.product.image],
          metadata: {
            product_id: product.product.id as number, // Add product ID to metadata
          },
        },
        unit_amount: product.product.price * 100, // Convert price to cents
      },
      quantity: product.quantity,
    }));

    const cartTotal = lineItems.reduce((sum, item) => sum + item.price_data.unit_amount * item.quantity, 0) / 100;
    // Check if cartTotal exceeds 500
    let discounts: { promotion_code: string }[] = [];
    if (cartTotal > 500) {
      // Create coupon
      const coupon = await stripe.coupons.create({
        percent_off: 10,
        duration: 'once',
      });

      // Create promotion code
      const uniqueCode = `BIGSPENDER10-${Date.now()}`;

      const promotionCode = await stripe.promotionCodes.create({
        coupon: coupon.id,
        code: uniqueCode,
      });

      // Add promotion code to discounts
      discounts = [
        {
          promotion_code: promotionCode.id, // Use the ID of the created promotion code
        },
      ];
    }

    // Create a Stripe Checkout Session
    const sessionStripe = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
      metadata: { user_id: userId },
      discounts,
    });

    return NextResponse.json({ url: sessionStripe.url });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error creating Checkout Session:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
