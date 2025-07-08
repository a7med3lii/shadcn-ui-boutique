import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// أضف السطر ده لاستيراد الـ CartProvider:
import { CartProvider } from './hooks/use-cart'; 

createRoot(document.getElementById('root')!).render(
  // أضف الـ CartProvider حوالين الـ App component:
  <CartProvider>
    <App />
  </CartProvider>
);