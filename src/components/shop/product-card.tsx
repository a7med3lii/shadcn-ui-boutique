import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TextArabic } from "@/components/ui/text-arabic";
import { Product } from "@/types";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border border-[#D4B78F]/30 bg-white">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={product.images[0] || "/assets/placeholder-image.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-all hover:scale-105"
          width={300}
          height={300}
        />
      </div>
      <CardContent className="p-4">
        <TextArabic variant="h4" className="mb-2">{product.name}</TextArabic>
        <TextArabic className="text-[#D4B78F] font-bold">{product.price} ر.س</TextArabic>
        <div className="mt-2 flex flex-wrap gap-1">
          {product.colors.slice(0, 3).map((color, index) => (
            <div
              key={index}
              className="h-3 w-3 rounded-full border border-gray-200"
              title={color}
            />
          ))}
          {product.colors.length > 3 && (
            <div className="flex h-3 w-3 items-center justify-center text-xs">+{product.colors.length - 3}</div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-[#D4B78F] hover:bg-[#C6A77E] text-white">
          <Link to={`/product/${product.id}`}>
            <Eye className="mr-2 h-4 w-4" />
            <TextArabic>عرض المنتج</TextArabic>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}