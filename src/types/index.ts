export interface Brand {
  id: string;
  name: string;
  description: string;
  instagramLink: string;
  image: string;
}

export interface Product {
  id: string;
  brandId: string;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: string[];
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalPrice: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  trackingNumber: string;
  estimatedDelivery: {
    minDays: number;
    maxDays: number;
  };
  createdAt: string;
}

export interface AdminOrder {
  id: string;
  customerName: string;
  totalPrice: number;
  status: string;
  date: string;
}