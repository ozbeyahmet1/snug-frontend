import { JSX } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

/**
 * Renders a list of links in the footer.
 *
 * @param props - The props for the FooterLinks component.
 * @param props.title - The title of the link section.
 * @param props.links - An array of links to display.
 * @returns {JSX.Element} The rendered FooterLinks component.
 */
function FooterLinks({ title, links }: { title: string; links: string[] }): JSX.Element {
  return (
    <div className="flex-1">
      <h3 className="font-bold mb-5">{title}</h3>
      <ul className="flex flex-col space-y-2">
        {links.map((link, index) => (
          <li key={index} className="hover:underline cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Renders the newsletter subscription form.
 *
 * @returns {JSX.Element} The rendered Newsletter component.
 */
function Newsletter(): JSX.Element {
  return (
    <div className="flex-[2] w-full">
      <h1 className="text-3xl">Sign up for our emails</h1>
      <div className="flex items-center space-x-4 mt-3">
        <input type="radio" id="radio" className="w-5 h-5 bg-white border-solid border-black border" />
        <p className="text-sm">Yes, send me updates on everything new at Snug.</p>
      </div>
      <div className="flex items-center cursor-pointer mt-4">
        <input
          type="text"
          className="h-12 w-full border-black border placeholder:p-2 bg-beige"
          placeholder="Email address"
        />
        <button
          type="button"
          className="h-12 w-12 bg-smoke flex items-center justify-center hover:bg-gray-700 transition-colors">
          <IoIosArrowRoundForward color="white" size={28} />
        </button>
      </div>
      <p className="text-xs mt-3">
        By clicking submit, you agree to our Privacy Policy and Terms. We’ll send you updates on all things Away. Need
        to take off? Unsubscribe anytime.
      </p>
    </div>
  );
}

/**
 * Footer component - Displays site-wide footer with multiple sections.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
export default function Footer(): JSX.Element {
  const sections = [
    {
      title: 'SHOP',
      links: ['Shop All', 'Best Sellers', 'Gift Cards', 'Accessories', 'Back in stock', 'Shop all'],
    },
    {
      title: 'ABOUT',
      links: ['Our stores', 'Refer a friend', 'Careers', 'Blog', 'Press', 'Shop all'],
    },
    {
      title: 'HELP',
      links: ['Order Tracking', 'Make an exchange', 'Make a return', 'Contact us'],
    },
    {
      title: 'FAQS',
      links: ['All FAQs', 'Warranty & repairs'],
    },
  ];

  return (
    <footer className="bg-beige w-full py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {sections.map((section, index) => (
          <FooterLinks key={index} title={section.title} links={section.links} />
        ))}
        <Newsletter />
      </div>
    </footer>
  );
}
