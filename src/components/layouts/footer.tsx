import { Button } from "@/components/ui/button";
import { TextArabic } from "@/components/ui/text-arabic";
import { brands } from "@/data/brands";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-[#D4B78F]/20 bg-[#F8F3E9]">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <TextArabic variant="h4" className="text-[#D4B78F]">Dream</TextArabic>
            <TextArabic>بوتيك راقٍ متخصص في عرض وتصنيف منتجات أفخم براندات الملابس الحريمي</TextArabic>
          </div>
          <div>
            <TextArabic variant="h5" className="mb-4">روابط سريعة</TextArabic>
            <ul className="grid gap-2">
              <li>
                <Link to="/">
                  <TextArabic>الرئيسية</TextArabic>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <TextArabic>عنّا</TextArabic>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <TextArabic>خدماتنا</TextArabic>
                </Link>
              </li>
              <li>
                <Link to="/track-order">
                  <TextArabic>تتبع الطلب</TextArabic>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <TextArabic variant="h5" className="mb-4">البراندات</TextArabic>
            <ul className="grid gap-2">
              {brands.map((brand) => (
                <li key={brand.id}>
                  <Link to={`/brand/${brand.id}`}>
                    <TextArabic>{brand.name}</TextArabic>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <TextArabic variant="h5" className="mb-4">تواصل معنا</TextArabic>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {brands.map((brand) => (
                  <Link key={brand.id} to={brand.instagramLink} target="_blank">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">إنستجرام {brand.name}</span>
                    </Button>
                  </Link>
                ))}
              </div>
              <TextArabic>هاتف: 0123456789</TextArabic>
              <TextArabic>البريد الإلكتروني: info@dream-boutique.com</TextArabic>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#D4B78F]/20 pt-6 text-center">
          <TextArabic className="text-sm">© جميع الحقوق محفوظة لبوتيك Dream {new Date().getFullYear()}</TextArabic>
        </div>
      </div>
    </footer>
  );
}