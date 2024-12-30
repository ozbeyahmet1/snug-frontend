import axios from 'axios';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe instance
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

/**
 * Handles incoming POST requests for Stripe webhook events.
 *
 * @param {NextRequest} req - The incoming request object from Next.js.
 * @returns {Promise<NextResponse>} - A JSON response indicating the success or failure of the webhook handling.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  const signature = req.headers.get('stripe-signature') || '';
  let event: Stripe.Event;

  try {
    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET || '');
  } catch (error: unknown) {
    console.error('Error verifying webhook signature:', error);
    const errorMessage = (error as Error).message;
    return NextResponse.json({ error: `Webhook Error: ${errorMessage}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Extract order details from the session
    const userId = session.metadata?.user_id; // Example: Replace with actual metadata from session
    const totalAmount = (session.amount_total ?? 0) / 100; // Convert cents to currency units

    try {
      // Retrieve line items to extract product metadata
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
        expand: ['data.price.product'],
      });

      const productIds = lineItems.data.map((item) => {
        const product = item.price?.product as Stripe.Product;
        return product.metadata?.product_id; // Retrieve product metadata
      });

      // Send order details to the backend
      try {
        const response = await axios.post(`${process.env.BACKEND_URL}/orders`, {
          userId,
          totalAmount,
          productIds,
        });

        if (response.status === 200) {
          console.log('Order created successfully:', response.data);
        } else {
          console.error('Failed to create order:', response.data);
        }
      } catch (error) {
        console.error('Error creating order:', error);
      }
    } catch (error) {
      console.error('Error processing checkout session:', error);
    }
  }

  return NextResponse.json({ received: true });
}
