import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { FavoriteCard } from './favoriteCard';

// Mock the Next.js Image component
jest.mock('next/image', () => (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />);

describe('FavoriteCard Component', () => {
  const props = {
    title: 'Test Item',
    price: '$100',
    imageSrc: '/test-image.jpg',
    bgOpacity: 50,
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
    expect(imgElement.src).toContain(props.imageSrc);
  });

  it('should apply the correct background opacity class', () => {
    const { container } = render(<FavoriteCard {...props} />);
    const bgElement = container.querySelector('.bg-\\[\\#DEDDD4\\]');

    expect(bgElement).toHaveClass(`bg-opacity-${props.bgOpacity}`);
  });
});
