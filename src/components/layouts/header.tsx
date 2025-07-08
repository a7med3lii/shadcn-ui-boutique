import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TextArabic } from "@/components/ui/text-arabic";
import { brands } from "@/data/brands";
import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartSheet } from "../shop/cart-sheet";

// **تأكد أن هذا هو الـ import الصحيح:**
import { useCartStore } from "@/store/cartStore";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  // **استخدم getTotalItems من useCartStore:**
  const totalCartItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="fixed top-0 z-40 w-full border-b border-b-[#D4B78F]/20 bg-[#F8F3E9] shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Link
                  to="/"
                  className="flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  <TextArabic variant="h3">Dream</TextArabic>
                </Link>
                <div className="grid gap-3">
                  <Link to="/" className="flex items-center py-2">
                    <TextArabic>الرئيسية</TextArabic>
                  </Link>
                  <TextArabic className="font-bold">البراندات</TextArabic>
                  {brands.map((brand) => (
                    <Link
                      key={brand.id}
                      to={`/brand/${brand.id}`}
                      className="flex items-center py-2 pr-3"
                    >
                      <TextArabic>{brand.name}</TextArabic>
                    </Link>
                  ))}
                  <Link to="/about" className="flex items-center py-2">
                    <TextArabic>عنّا</TextArabic>
                  </Link>
                  <Link to="/services" className="flex items-center py-2">
                    <TextArabic>خدماتنا</TextArabic>
                  </Link>
                  <Link to="/track-order" className="flex items-center py-2">
                    <TextArabic>تتبع الطلب</TextArabic>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <TextArabic variant="h3" className="text-[#D4B78F]">Dream</TextArabic>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium">
            <TextArabic>الرئيسية</TextArabic>
          </Link>
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brand/${brand.id}`}
              className="text-sm font-medium"
            >
              <TextArabic>{brand.name}</TextArabic>
            </Link>
          ))}
          <Link to="/about" className="text-sm font-medium">
            <TextArabic>عنّا</TextArabic>
          </Link>
          <Link to="/services" className="text-sm font-medium">
            <TextArabic>خدماتنا</TextArabic>
          </Link>
          <Link to="/track-order" className="text-sm font-medium">
            <TextArabic>تتبع الطلب</TextArabic>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCartOpen(true)}
            className="relative"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">سلة التسوق</span>
            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {totalCartItems}
              </span>
            )}
          </Button>
          <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />

          <Link to="/admin">
            <Button variant="outline" className="hidden md:flex">
              <TextArabic>لوحة الإدارة</TextArabic>{" "}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
