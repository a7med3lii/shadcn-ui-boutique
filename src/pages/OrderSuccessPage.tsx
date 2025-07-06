import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TextArabic } from "@/components/ui/text-arabic";
import { formatDate } from "@/lib/utils";
import { Order, CartItem } from "@/types";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function OrderSuccessPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  
  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('dream-orders') || '[]');
    const foundOrder = orders.find((o: Order) => o.id === orderId);
    if (foundOrder) {
      setOrder(foundOrder);
    }
  }, [orderId]);

  if (!order) {
    return (
      <MainLayout>
        <div className="container flex flex-col items-center justify-center px-4 py-16">
          <TextArabic variant="h2" className="mb-6">لم يتم العثور على الطلب</TextArabic>
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
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-100 p-4 text-green-500">
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
                  className="h-8 w-8"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </div>
            <TextArabic variant="h1" className="mb-2">شكراً لك!</TextArabic>
            <TextArabic>تم استلام طلبك بنجاح</TextArabic>
          </div>

          <Card>
            <CardHeader>
              <TextArabic variant="h3">تفاصيل الطلب</TextArabic>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div>
                  <TextArabic className="text-sm text-gray-500">رقم الطلب</TextArabic>
                  <TextArabic className="font-medium">#{orderId.slice(0, 8)}</TextArabic>
                </div>
                <div>
                  <TextArabic className="text-sm text-gray-500">التاريخ</TextArabic>
                  <TextArabic className="font-medium">{formatDate(new Date(order.createdAt))}</TextArabic>
                </div>
                <div>
                  <TextArabic className="text-sm text-gray-500">الإجمالي</TextArabic>
                  <TextArabic className="font-medium">{order.totalPrice} ر.س</TextArabic>
                </div>
                <div>
                  <TextArabic className="text-sm text-gray-500">حالة الطلب</TextArabic>
                  <TextArabic className="font-medium">قيد المعالجة</TextArabic>
                </div>
              </div>

              <div>
                <TextArabic className="mb-2 font-medium">تتبع الشحنة</TextArabic>
                <div className="rounded-lg bg-gray-50 p-4">
                  <TextArabic className="mb-1 text-sm text-gray-500">رقم التتبع</TextArabic>
                  <TextArabic className="mb-2 font-mono font-bold">{order.trackingNumber}</TextArabic>
                  <TextArabic className="mb-4 text-sm">
                    سيتم توصيل طلبك خلال {order.estimatedDelivery.minDays} - {order.estimatedDelivery.maxDays} أيام
                  </TextArabic>
                  <Button asChild className="w-full bg-[#D4B78F] hover:bg-[#C6A77E] text-white">
                    <Link to={`/track-order?tracking=${order.trackingNumber}`}>
                      <TextArabic>متابعة الطلب</TextArabic>
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="border-t border-[#D4B78F]/20 pt-6">
                <TextArabic variant="h4" className="mb-4">المنتجات</TextArabic>
                <div className="grid gap-4">
                  {order.items.map((item: CartItem, index: number) => (
                    <div key={index} className="flex gap-4">
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
                        <TextArabic>{item.product.name}</TextArabic>
                        <TextArabic className="text-sm text-gray-500">
                          {item.selectedColor} | {item.selectedSize} | {item.quantity} قطعة
                        </TextArabic>
                        <TextArabic className="font-bold">
                          {item.product.price * item.quantity} ر.س
                        </TextArabic>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center border-t border-[#D4B78F]/20 pt-6">
                <Button asChild>
                  <Link to="/">
                    <TextArabic>العودة إلى الرئيسية</TextArabic>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}