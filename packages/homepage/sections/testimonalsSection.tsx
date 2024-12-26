import { JSX } from 'react';

/**
 * Represents a single customer testimonial.
 *
 * @param props - The properties for the TestimonialCard component.
 * @param props.message - The testimonial message from the customer.
 * @param props.author - The name of the customer providing the testimonial.
 * @returns {JSX.Element} The rendered TestimonialCard component.
 */
function TestimonialCard({ message, author }: { message: string; author: string }): JSX.Element {
  return (
    <div className="flex-1 lg:px-6 rounded-md max-lg:mb-4">
      <p>{message}</p>
      <p className="font-bold mt-2 lg:mt-4">— {author}</p>
    </div>
  );
}

/**
 * TestimonialsSection component - Displays a section showcasing customer reviews.
 * Adapted for a pillow website to highlight user experiences.
 *
 * @returns {JSX.Element} The rendered TestimonialsSection component.
 */
export default function TestimonialsSection(): JSX.Element {
  const testimonials = [
    {
      message:
        '"These pillows have transformed my sleep! The softness and support are unmatched. I wake up feeling refreshed every single day."',
      author: 'Sarah M.',
    },
    {
      message: '"I never knew how much a good pillow could change my life until I tried these. Comfort redefined!"',
      author: 'James L.',
    },
    {
      message: '"Not just a pillow, but an experience! Amazing quality and exceptional customer service."',
      author: 'Emma R.',
    },
  ];

  return (
    <section className="bg-[#111111] w-full text-white py-20">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row lg:items-start lg:space-x-12">
        {/* Section Title */}
        <h3 className="text-3xl font-bold flex-1 mb-8 lg:mb-0">What our happy customers are saying</h3>

        {/* Testimonial Cards */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} message={testimonial.message} author={testimonial.author} />
        ))}
      </div>
    </section>
  );
}
