import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TextArabic } from "@/components/ui/text-arabic";
import { Brand } from "@/types";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Card className="overflow-hidden border border-[#D4B78F]/30 bg-white">
      {/* هذا هو الجزء الخاص بالصورة (اللوجو) */}
      <img
        src={brand.image || "/assets/placeholder-image.svg"} // يستخدم مسار الصورة من بيانات الـ brand
        alt={brand.name} // يستخدم اسم الـ brand كنص بديل للصورة
        className="w-full h-58 object-cover" // كلاسات Tailwind: عرض كامل، ارتفاع 32 وحدة، تغطية المربع
        width={300} // خصائص عرض الصورة (يمكن التحكم بها بـ className أيضاً)
        height={200} // خصائص ارتفاع الصورة
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