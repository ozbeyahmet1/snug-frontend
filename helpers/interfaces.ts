interface Product {
  title: string;
  price: number;
  image: string;
  description: string;
  materials: string;
  warrantyAndReturnPolicy: string;
  href: string;
  reviews: Array<Review>;
}

interface Review {
  rating: number;
  review: string;
  reviewer: string;
  summary: string;
  timestamp: string;
}
