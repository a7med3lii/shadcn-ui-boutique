// src/store/cartStore.ts
import { create } from 'zustand';
import { CartItem, Product } from "@/types"; // بنستورد الـ types من ملفك الخاص

interface CartState {
  items: CartItem[];
  addItem: (product: Product, selectedSize: string, selectedColor: string, quantity?: number) => void;
  removeItem: (productId: string, selectedSize: string, selectedColor: string) => void;
  updateQuantity: (productId: string, selectedSize: string, selectedColor: string, newQuantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (product, selectedSize, selectedColor, quantity = 1) => set((state) => {
    const existingItemIndex = state.items.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex].quantity += quantity;
      return { items: updatedItems };
    } else {
      return { items: [...state.items, { product, selectedSize, selectedColor, quantity }] };
    }
  }),

  removeItem: (productId, selectedSize, selectedColor) => set((state) => ({
    items: state.items.filter(
      (item) =>
        !(item.product.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
    ),
  })),

  updateQuantity: (productId, selectedSize, selectedColor, newQuantity) => set((state) => {
    if (newQuantity < 1) {
      return {
        items: state.items.filter(
          (item) =>
            !(item.product.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
        ),
      };
    }
    return {
      items: state.items.map((item) =>
        item.product.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor
          ? { ...item, quantity: newQuantity }
          : item
      ),
    };
  }),

  clearCart: () => set({ items: [] }),

  getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),

  getTotalPrice: () => get().items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  ),
}));

// جزء الحفظ التلقائي في localStorage:
const savedCart = localStorage.getItem('dream-cart-zustand');
if (savedCart) {
  try {
    useCartStore.setState({ items: JSON.parse(savedCart) });
  } catch (error) {
    console.error("Failed to parse saved cart from localStorage", error);
  }
}

useCartStore.subscribe((state) => {
  localStorage.setItem('dream-cart-zustand', JSON.stringify(state.items));
});