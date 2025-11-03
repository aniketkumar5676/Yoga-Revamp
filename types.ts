export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  benefits: string[];
  schedule?: { day: string; time: string; level: string }[];
  pricingPlans: {
    plan: string;
    price: string;
    features: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  experienceYears: number;
  bio: string;
  image: string;
  socialLinks: {
    [key: string]: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

// FIX: Add missing Product and CartItem type definitions.
export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  category: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}