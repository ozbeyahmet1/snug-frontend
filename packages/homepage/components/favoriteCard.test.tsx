import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { FavoriteCard } from './favoriteCard';

// Mock the Next.js Image component
jest.mock('next/image', () => (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />);

describe('FavoriteCard Component', () => {
  const props = {
    bgOpacity: 'bg-opacity-50',
    id: 8,
    title: 'Nomadic Sunset',
    price: 85,
    image: 'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735439825/rugs/rug2_q6bgvw.png',
    description:
      'Nomadic Sunset Pillow offers a vibrant blend of colors inspired by traditional tribal designs, bringing warmth and authenticity to your living space.',
    materials: 'Handwoven wool and organic cotton blend, dyed with natural plant-based colors.',
    warrantyAndReturnPolicy: '2-year warranty with hassle-free 45-day return policy.',
    href: 'nomadic-sunset',
    reviews: [
      {
        id: 15,
        rating: '5.00',
        review: 'The craftsmanship is exceptional, and the colors are stunning!',
        reviewer: 'Sophia Martinez',
        summary: 'Beautiful and well-made',
        timestamp: '2023-03-13T00:00:00.000Z',
      },
      {
        id: 16,
        rating: '4.00',
        review: 'Loved the design, but wish it was slightly softer.',
        reviewer: 'James Wilson',
        summary: 'Stylish but a bit firm',
        timestamp: '2023-03-16T00:00:00.000Z',
      },
      {
        id: 28,
        rating: '5.00',
        review: 'This is an amazing product!',
        reviewer: 'John Doe',
        summary: 'Excellent!',
        timestamp: '2024-12-29T23:37:19.685Z',
      },
      {
        id: 30,
        rating: '4.00',
        review: 'This is an amazing product!',
        reviewer: 'John Doe',
        summary: 'Excellent!',
        timestamp: '2024-12-30T00:00:47.066Z',
      },
      {
        id: 31,
        rating: '4.01',
        review: 'This is an amazing product!',
        reviewer: 'John Doe',
        summary: 'Excellent!',
        timestamp: '2024-12-30T00:10:03.708Z',
      },
      {
        id: 34,
        rating: '4.43',
        review: 'Authentic!',
        reviewer: 'Ahmet Oz',
        summary: 'Marvellous',
        timestamp: '2024-12-30T00:22:03.532Z',
      },
    ],
  };

  it('should render the component without crashing', () => {
    render(<FavoriteCard {...props} />);
    const titleElement = screen.getByText(props.title);
    const priceElement = screen.getByText(props.price);

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  it('should display the correct title and price', () => {
    render(<FavoriteCard {...props} />);
    const titleElement = screen.getByText(props.title);
    const priceElement = screen.getByText(props.price);

    expect(titleElement).toHaveTextContent('Test Item');
    expect(priceElement).toHaveTextContent('$100');
  });

  it('should render the image with correct src and alt attributes', () => {
    render(<FavoriteCard {...props} />);
    const imgElement = screen.getByAltText(props.title) as HTMLImageElement;

    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toContain(props.image);
  });

  it('should apply the correct background opacity class', () => {
    const { container } = render(<FavoriteCard {...props} />);
    const bgElement = container.querySelector('.bg-\\[\\#DEDDD4\\]');

    expect(bgElement).toHaveClass(`bg-opacity-${props.bgOpacity}`);
  });
});
