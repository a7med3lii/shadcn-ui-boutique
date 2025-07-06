import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { TextArabic } from "@/components/ui/text-arabic";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((product) => product.id === productId);
  const brand = product ? brands.find((brand) => brand.id === product.brandId) : null;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  const { addItem } = useCart();

  if (!product || !brand) {
    return (
      <MainLayout>
        <div className="container flex flex-col items-center justify-center px-4 py-16">
          <TextArabic variant="h2" className="mb-6">المنتج غير موجود</TextArabic>
          <Button asChild>
            <Link to="/">
              <TextArabic>العودة إلى الرئيسية</TextArabic>
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) return;
    
    addItem(product, selectedSize, selectedColor, quantity);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-10">
        <div className="mb-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-white">
              <img
                src={product.images[selectedImage] || "/assets/placeholder-image.svg"}
                alt={product.name}
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative h-16 w-16 overflow-hidden rounded-md border ${
                    selectedImage === index
                      ? "border-[#D4B78F]"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image || "/assets/placeholder-image.svg"}
                    alt={`${product.name} - ${index + 1}`}
                    className="h-full w-full object-cover"
                    width={64}
                    height={64}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <Link to={`/brand/${brand.id}`} className="mb-2 text-sm text-gray-500">
              <TextArabic>{brand.name}</TextArabic>
            </Link>
            <TextArabic variant="h1" className="mb-4">{product.name}</TextArabic>
            <TextArabic variant="h3" className="mb-4 text-[#D4B78F]">
              {product.price} ر.س
            </TextArabic>
            <TextArabic className="mb-6">{product.description}</TextArabic>
            
            <div className="mb-4">
              <TextArabic className="mb-2 font-bold">الألوان</TextArabic>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-3 py-1 border rounded-full ${
                      selectedColor === color
                        ? "border-[#D4B78F] bg-[#D4B78F]/10"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <TextArabic>{color}</TextArabic>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <TextArabic className="mb-2 font-bold">المقاسات</TextArabic>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-10 flex items-center justify-center border rounded ${
                      selectedSize === size
                        ? "border-[#D4B78F] bg-[#D4B78F]/10"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <TextArabic>{size}</TextArabic>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <TextArabic className="mb-2 font-bold">الكمية</TextArabic>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <span className="sr-only">تقليل الكمية</span>
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
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </Button>
                <TextArabic>{quantity}</TextArabic>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                  disabled={quantity >= product.stock}
                >
                  <span className="sr-only">زيادة الكمية</span>
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
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </Button>
              </div>
              <TextArabic className="mt-2 text-sm text-gray-500">
                متوفر في المخزون: {product.stock} قطعة
              </TextArabic>
            </div>
            
            <Button
              onClick={handleAddToCart}
              disabled={!selectedColor || !selectedSize}
              className="w-full bg-[#D4B78F] hover:bg-[#C6A77E] text-white"
            >
              <TextArabic>إضافة إلى السلة</TextArabic>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}