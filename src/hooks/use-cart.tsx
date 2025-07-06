import { CartItem, Product } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: string, color: string, quantity: number) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
  updateQuantity: (index: number, quantity: number) => void;
  totalPrice: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("dream-cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse saved cart", error);
      }
    }
  }, []);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("dream-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, size: string, color: string, quantity: number) => {
    // Check if the item already exists with the same product, size and color
    const existingItemIndex = items.findIndex(
      (item) => 
        item.product.id === product.id && 
        item.selectedSize === size && 
        item.selectedColor === color
    );
    
    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += quantity;
      setItems(updatedItems);
    } else {
      // Add new item
      setItems([...items, { product, selectedSize: size, selectedColor: color, quantity }]);
    }
  };

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const clearCart = () => {
    setItems([]);
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity < 1) return;
    
    const newItems = [...items];
    newItems[index].quantity = quantity;
    setItems(newItems);
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        updateQuantity,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}