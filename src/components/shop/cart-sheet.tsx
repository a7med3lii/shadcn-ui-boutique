import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { TextArabic } from "@/components/ui/text-arabic";
import { useCart } from "@/hooks/use-cart";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader className="border-b border-[#D4B78F]/20 pb-4">
          <SheetTitle dir="rtl">
            <TextArabic variant="h3">سلة التسوق</TextArabic>
          </SheetTitle>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center">
            <TextArabic className="mb-4 text-center">سلة التسوق فارغة</TextArabic>
            <Button
              onClick={() => onOpenChange(false)}
              className="bg-[#D4B78F] hover:bg-[#C6A77E] text-white"
            >
              <TextArabic>متابعة التسوق</TextArabic>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto py-6">
              <ul className="grid gap-6">
                {items.map((item, index) => (
                  <li key={index} className="flex gap-4 border-b border-[#D4B78F]/20 pb-4">
                    <div className="h-16 w-16 overflow-hidden rounded-md">
                      <img
                        src={item.product.images[0] || "/assets/placeholder-image.svg"}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <TextArabic variant="h5">{item.product.name}</TextArabic>
                      <TextArabic className="text-sm">
                        اللون: {item.selectedColor} | المقاس: {item.selectedSize}
                      </TextArabic>
                      <TextArabic className="font-bold">
                        {item.product.price} ر.س
                      </TextArabic>
                      <div className="mt-2 flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() =>
                            updateQuantity(index, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <MinusIcon className="h-3 w-3" />
                          <span className="sr-only">تقليل الكمية</span>
                        </Button>
                        <TextArabic className="w-4 text-center">{item.quantity}</TextArabic>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() =>
                            updateQuantity(index, item.quantity + 1)
                          }
                        >
                          <PlusIcon className="h-3 w-3" />
                          <span className="sr-only">زيادة الكمية</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="ml-auto h-6 w-6 text-red-500"
                          onClick={() => removeItem(index)}
                        >
                          <Trash2 className="h-3 w-3" />
                          <span className="sr-only">حذف المنتج</span>
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-[#D4B78F]/20 pt-4">
              <div className="flex items-center justify-between pb-4">
                <TextArabic className="font-bold">المجموع</TextArabic>
                <TextArabic className="font-bold">{totalPrice} ر.س</TextArabic>
              </div>
              <SheetFooter className="flex-col sm:flex-col">
                <Button asChild className="w-full bg-[#D4B78F] hover:bg-[#C6A77E] text-white">
                  <Link to="/checkout" onClick={() => onOpenChange(false)}>
                    <TextArabic>إتمام الطلب</TextArabic>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="mt-2 w-full"
                  onClick={clearCart}
                >
                  <TextArabic>إفراغ السلة</TextArabic>
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}