import { MainLayout } from "@/components/layouts/main-layout";
import { ProductCard } from "@/components/shop/product-card";
import { Button } from "@/components/ui/button";
import { TextArabic } from "@/components/ui/text-arabic";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BrandPage() {
  const { brandId } = useParams<{ brandId: string }>();
  const [brand, setBrand] = useState(
    brands.find((brand) => brand.id === brandId)
  );
  const [brandProducts, setBrandProducts] = useState(
    products.filter((product) => product.brandId === brandId)
  );

  useEffect(() => {
    setBrand(brands.find((brand) => brand.id === brandId));
    setBrandProducts(products.filter((product) => product.brandId === brandId));
  }, [brandId]);

  if (!brand) {
    return (
      <MainLayout>
        <div className="container flex flex-col items-center justify-center px-4 py-16">
          <TextArabic variant="h2" className="mb-6">البراند غير موجود</TextArabic>
          <Button asChild>
            <Link to="/">
              <TextArabic>العودة إلى الرئيسية</TextArabic>
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-10">
        <div className="mb-10 grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="overflow-hidden rounded-lg">
            <img
              src={brand.image || "/assets/placeholder-image.svg"}
              alt={brand.name}
              className="aspect-video h-full w-full object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center">
            <TextArabic variant="h1" className="mb-4">{brand.name}</TextArabic>
            <TextArabic className="mb-6">{brand.description}</TextArabic>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-[#D4B78F] hover:bg-[#C6A77E] text-white"
              >
                <Link to={brand.instagramLink} target="_blank">
                  <Instagram className="mr-2 h-4 w-4" />
                  <TextArabic>متابعة على إنستجرام</TextArabic>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <TextArabic variant="h2" className="mb-6">منتجات {brand.name}</TextArabic>

        {brandProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {brandProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <TextArabic>لا توجد منتجات متاحة حالياً</TextArabic>
          </div>
        )}
      </div>
    </MainLayout>
  );
}