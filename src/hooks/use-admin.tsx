import { Product } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

interface Order {
  id: string;
  customerName: string;
  totalPrice: number;
  status: string;
  date: string;
}

interface AdminContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  orders: Order[];
  updateOrderStatus: (id: string, status: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  
  // Load admin data from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem("dream-admin-products");
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (error) {
        console.error("Failed to parse saved products", error);
      }
    }
    
    const savedOrders = localStorage.getItem("dream-admin-orders");
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders));
      } catch (error) {
        console.error("Failed to parse saved orders", error);
      }
    }
  }, []);
  
  // Save admin data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("dream-admin-products", JSON.stringify(products));
  }, [products]);
  
  useEffect(() => {
    localStorage.setItem("dream-admin-orders", JSON.stringify(orders));
  }, [orders]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateOrderStatus = (id: string, status: string) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  return (
    <AdminContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        orders,
        updateOrderStatus,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}