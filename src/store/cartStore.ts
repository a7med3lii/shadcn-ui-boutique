// src/store/cartStore.ts
import { create } from 'zustand';

interface CartItem {
  id: string; // أو number، حسب الـ ID بتاع منتجاتك
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  getTotalItems: () => number; // أضف السطر ده
  // ممكن نضيف هنا دوال تانية زي removeItem, updateQuantity
}

export const useCartStore = create<CartState>((set, get) => ({ // عدل السطر ده: أضف "get" هنا
  items: [], // السلة في البداية بتكون فاضية

  addItem: (item) => set((state) => {
    const existingItem = state.items.find((i) => i.id === item.id);

    if (existingItem) {
      return {
        items: state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    } else {
      return {
        items: [...state.items, { ...item, quantity: 1 }],
      };
    }
  }),

  // أضف الدالة دي هنا
  getTotalItems: () => {
    // بتحسب مجموع الكميات لكل المنتجات في السلة
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));