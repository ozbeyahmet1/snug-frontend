import { JSX } from 'react';

/**
 * Represents a single customer testimonial.
 *
 * @param props - The properties for the TestimonialCard component.
 * @param props.message - The testimonial message from the customer.
 * @param props.author - The name of the customer providing the testimonial.
 * @returns {JSX.Element} The rendered TestimonialCard component.
 */

export interface Testimonial {
  message: string;
  author: string;
}

function TestimonialCard({ message, author }: Testimonial): JSX.Element {
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
export interface TestimonalsSectionProps {
  header: string;
  testimonials: Array<Testimonial>;
}
export default function TestimonialsSection({ testimonials, header }: TestimonalsSectionProps): JSX.Element {
  return (
    <section className="bg-smoke w-full text-white py-20">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row lg:items-start lg:space-x-12">
        {/* Section Title */}
        <h3 className="text-3xl font-bold flex-1 mb-8 lg:mb-0">{header}</h3>

        {/* Testimonial Cards */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} message={testimonial.message} author={testimonial.author} />
        ))}
      </div>
    </section>
  );
}
