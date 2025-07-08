// src/components/shop/brand-card.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TextArabic } from "@/components/ui/text-arabic";
import { Brand } from "@/types";
import { Instagram, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
// import { useState } from "react"; // احذف السطر ده لأننا هنستخدم الـ Global State

import { useCartStore } from "@/store/cartStore"; // أضف السطر ده عشان نجيب الـ Store بتاع السلة

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  // احذف السطر ده: const [cartItems, setCartItems] = useState([]);
  const addItem = useCartStore((state) => state.addItem); // أضف السطر ده عشان نجيب دالة إضافة المنتج للسلة

  const handleAddToCart = () => {
    // عدل الكود ده جوه الدالة:
    // بنضيف الماركة كمنتج للسلة
    addItem({
      id: brand.id, // لازم يكون فيه id فريد لكل منتج
      name: brand.name,
      price: 0, // لو الماركات ملهاش سعر، ممكن نحط 0 أو نحط سعر افتراضي لو ليها سعر في بيانات الـ Brand
      image: brand.image,
      quantity: 1, // الكمية الأولية لما نضيفه لأول مرة
    });
    console.log(`تم إضافة الماركة: ${brand.name} إلى السلة فعلياً.`);
  };

  return (
    <Card className="overflow-hidden border border-[#D4B78F]/30 bg-white">
      {/* هذا هو الجزء الخاص بالصورة (اللوجو) */}
      <img
        src={brand.image || "/assets/placeholder-image.svg"}
        alt={brand.name}
        className="w-full h-58 object-cover"
        width={300}
        height={200}
      />
      <CardContent className="p-4">
        <TextArabic variant="h3" className="mb-2">{brand.name}</TextArabic>
        <TextArabic>{brand.description}</TextArabic>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button asChild className="bg-[#D4B78F] hover:bg-[#C6A77E] text-white">
          <Link to={`/brand/${brand.id}`}>
            <TextArabic>عرض المنتجات</TextArabic>
          </Link>
        </Button>

        <Button onClick={handleAddToCart} size="icon" className="bg-[#5B5B5B] hover:bg-[#4A4A4A] text-white">
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">أضف إلى السلة</span>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link to={brand.instagramLink} target="_blank">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">إنستجرام</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}