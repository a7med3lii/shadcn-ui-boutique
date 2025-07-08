// src/components/shop/brand-card.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TextArabic } from "@/components/ui/text-arabic";
import { Brand, Product } from "@/types"; // مهم: تأكد أن Brand و Product مستوردين من ملف الـ types بتاعك
import { Instagram, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import { useCartStore } from "@/store/cartStore";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  const addItemToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    // هنا بنبني Product object من بيانات الـ Brand
    // لازم كل الخصائص اللي في Product interface تكون موجودة
    const productToAdd: Product = {
      id: brand.id + "_product", // تغيير: عشان نفرق بين ID البراند و ID المنتج لو البراند نفسها مش منتج
      brandId: brand.id, // ID البراند (لو الـ Product interface فيه brandId)
      name: brand.name + " (منتج افتراضي)", // اسم المنتج (ممكن يكون اسم البراند + "منتج افتراضي")
      description: brand.description || "وصف افتراضي لهذا المنتج من " + brand.name,
      price: 150, // سعر افتراضي ثابت (لأن Brand interface بتاعك معندوش خاصية price)
      sizes: ["M"], // مقاس افتراضي (لو عايز تخليه فارغ أو تجيبه من مكان تاني)
      colors: ["Black"], // لون افتراضي (لو عايز تخليه فارغ أو تجيبه من مكان تاني)
      images: [brand.image], // صورة المنتج (هنا بنحول الـ string إلى array of strings)
      stock: 100, // مخزون افتراضي
    };

    // نختار المقاس واللون اللي هنضيفهم للسلة (ممكن يكونوا أول عنصر في arrays المقاسات والألوان)
    const selectedSize = productToAdd.sizes && productToAdd.sizes.length > 0 ? productToAdd.sizes[0] : "One Size";
    const selectedColor = productToAdd.colors && productToAdd.colors.length > 0 ? productToAdd.colors[0] : "Default Color";

    addItemToCart(productToAdd, selectedSize, selectedColor, 1); // إضافة المنتج للسلة بكمية 1
    console.log(`تم إضافة المنتج من الماركة: ${brand.name} إلى السلة فعلياً.`);
  };

  return (
    <Card className="overflow-hidden border border-[#D4B78F]/30 bg-white">
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