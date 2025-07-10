import { BrandCard } from "@/components/shop/brand-card";
import { Button } from "@/components/ui/button";
import { TextArabic } from "@/components/ui/text-arabic";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";
import { MainLayout } from "@/components/layouts/main-layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const featuredProducts = products.slice(0, 4);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#F8F3E9] to-[#F0E6D2] py-16 md:py-24 overflow-hidden">
        {/* اللوجو كخلفية شفافة ومكانه هيكون في منتصف السكشن ده */}
        <div className="absolute inset-0 flex items-center justify-center -z-0">
          <img
            src="/assets/placeholder-image.webp"
            alt="Dream Dress Logo"
            className="h-[70vh] w-auto object-contain opacity-20"
          />
        </div>

        {/* ده الـ Container اللي فيه الكلام والأزرار، وهيكون فوق اللوجو */}
        <div className="container px-4 md:px-6 relative z-10 text-center md:text-center flex flex-col items-center justify-center">
          {/* هنا الكلام اللي المستخدم يقدر يكتبه ويغيره باستمرار */}
          <TextArabic variant="h1" className="mb-6 text-[#D4B78F]"> {/* عدلت هنا: شلت bg-clip-text text-transparent وحطيت لون ثابت */}
            بوتيك Dream
          </TextArabic>
          <TextArabic className="mb-8 text-lg text-gray-700 max-w-2xl">
            بوتيك راقٍ متخصص في عرض وتصنيف منتجات أفخم براندات الملابس الحريمي بتصميم أنيق وعصري.
            <br />
            <span className="font-bold text-[#D4B78F] text-2xl md:text-3xl">خصم 50% على كل الفساتين الجديدة بمناسبة الافتتاح الكبير!</span>
            <br />
            <span className="text-base text-gray-600">زورونا في فرعنا الجديد واستمتعوا بأحدث صيحات الموضة.</span>
          </TextArabic>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild className="bg-[#D4B78F] hover:bg-[#C6A77E] text-white">
              <Link to="/brands">
                <TextArabic>تسوق الآن</TextArabic>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">
                <TextArabic>تعرف علينا</TextArabic>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <TextArabic variant="h2" className="mb-6 md:mb-0">براندات مميزة</TextArabic>
            <Button asChild variant="ghost" className="gap-1">
              <Link to="/brands">
                <TextArabic>عرض الكل</TextArabic>
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-[#F8F3E9]/50 py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <TextArabic variant="h2" className="mb-6 md:mb-0">منتجات مميزة</TextArabic>
            <Button asChild variant="ghost" className="gap-1">
              <Link to="/products">
                <TextArabic>عرض الكل</TextArabic>
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section> {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <TextArabic variant="h2" className="mb-10 text-center">خدماتنا المميزة</TextArabic>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-[#F0E6D2] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#D4B78F]"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <TextArabic variant="h4" className="mb-2">منتجات حصرية</TextArabic>
              <TextArabic>
                نقدم لكِ تشكيلة متنوعة من المنتجات الحصرية من أفخم البراندات العالمية
              </TextArabic>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-[#F0E6D2] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#D4B78F]"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <TextArabic variant="h4" className="mb-2">توصيل سريع</TextArabic>
              <TextArabic>
                نوفر لكِ خدمة توصيل سريعة مع إمكانية تتبع الطلب لحين وصوله إليكِ
              </TextArabic>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-[#F0E6D2] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#D4B78F]"
                >
                  <path d="M6 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M6 13.5V8" />
                  <path d="M6 2v1.5" />
                  <path d="M18 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M18 13.5V8" />
                  <path d="M18 2v1.5" />
                  <path d="M2 6h20" />
                  <path d="M2 16h20" />
                </svg>
              </div>
              <TextArabic variant="h4" className="mb-2">دعم فني</TextArabic>
              <TextArabic>
                فريق دعم فني متكامل لمساعدتكِ والإجابة على جميع استفساراتكِ
              </TextArabic>
            </div>
          </div>
        </div>
      </section> {/* Call to Action */}
      <section className="bg-[#D4B78F] py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <TextArabic variant="h2" className="mb-4 text-white">انضمي إلى عائلتنا</TextArabic>
            <TextArabic className="mb-6 max-w-2xl text-white/90">
              احصلي على آخر الأخبار والعروض الحصرية من بوتيك Dream مباشرةً إلى بريدك الإلكتروني
            </TextArabic>
            <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <Button className="w-full bg-white text-[#D4B78F] hover:bg-white/90">
                <TextArabic>اشتركي الآن</TextArabic>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
