import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TextArabic } from "@/components/ui/text-arabic";
import { formatDate } from "@/lib/utils";
import { Order } from "@/types";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function TrackOrderPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialTrackingNumber = searchParams.get("tracking") || "";
  
  const [trackingNumber, setTrackingNumber] = useState(initialTrackingNumber);
  const [searchedTrackingNumber, setSearchedTrackingNumber] = useState(initialTrackingNumber);
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (searchedTrackingNumber) {
      const orders = JSON.parse(localStorage.getItem('dream-orders') || '[]');
      const foundOrder = orders.find((o: Order) => o.trackingNumber === searchedTrackingNumber);
      setOrder(foundOrder || null);
    } else {
      setOrder(null);
    }
  }, [searchedTrackingNumber]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchedTrackingNumber(trackingNumber);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-10">
        <div className="mx-auto max-w-2xl">
          <TextArabic variant="h1" className="mb-6 text-center">تتبع الطلب</TextArabic>
          
          <Card className="mb-8">
            <CardHeader>
              <TextArabic>أدخل رقم تتبع الشحنة</TextArabic>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="أدخل رقم التتبع هنا"
                  className="flex-1"
                  dir="rtl"
                />
                <Button
                  type="submit"
                  className="bg-[#D4B78F] hover:bg-[#C6A77E] text-white"
                  disabled={!trackingNumber}
                >
                  <TextArabic>تتبع</TextArabic>
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {searchedTrackingNumber && !order && (
            <div className="text-center">
              <TextArabic>لم يتم العثور على أي طلبات بهذا الرقم</TextArabic>
            </div>
          )}
          
          {order && (
            <Card>
              <CardHeader>
                <TextArabic variant="h3">معلومات الشحنة</TextArabic>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div>
                    <TextArabic className="text-sm text-gray-500">رقم التتبع</TextArabic>
                    <TextArabic className="font-medium">{order.trackingNumber}</TextArabic>
                  </div>
                  <div>
                    <TextArabic className="text-sm text-gray-500">تاريخ الطلب</TextArabic>
                    <TextArabic className="font-medium">{formatDate(new Date(order.createdAt))}</TextArabic>
                  </div>
                  <div>
                    <TextArabic className="text-sm text-gray-500">اسم العميل</TextArabic>
                    <TextArabic className="font-medium">{order.customerName}</TextArabic>
                  </div>
                  <div>
                    <TextArabic className="text-sm text-gray-500">حالة الطلب</TextArabic>
                    <TextArabic className="font-medium">قيد المعالجة</TextArabic>
                  </div>
                </div>

                <div>
                  <TextArabic className="mb-4 font-medium">مسار الشحنة</TextArabic>
                  <div className="space-y-6">
                    <div className="relative flex gap-4">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4B78F] text-white">
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
                          className="h-3 w-3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <TextArabic className="font-medium">تم استلام الطلب</TextArabic>
                        <TextArabic className="text-sm text-gray-500">
                          {formatDate(new Date(order.createdAt))}
                        </TextArabic>
                      </div>
                    </div>
                    <div className="relative flex gap-4">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
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
                          className="h-3 w-3"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <TextArabic className="font-medium">الطلب قيد المعالجة</TextArabic>
                        <TextArabic className="text-sm text-gray-500">قيد الإعداد</TextArabic>
                      </div>
                    </div>
                    <div className="relative flex gap-4">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
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
                          className="h-3 w-3"
                        >
                          <path d="m12 14 4-4" />
                          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                        </svg>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <TextArabic className="font-medium">جاري الشحن</TextArabic>
                        <TextArabic className="text-sm text-gray-500">قيد الإرسال</TextArabic>
                      </div>
                    </div>
                    <div className="relative flex gap-4">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
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
                          className="h-3 w-3"
                        >
                          <path d="M20 7h-9" />
                          <path d="M14 17H5" />
                          <circle cx="17" cy="17" r="3" />
                          <circle cx="7" cy="7" r="3" />
                        </svg>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <TextArabic className="font-medium">تم التوصيل</TextArabic>
                        <TextArabic className="text-sm text-gray-500">لم يتم التسليم بعد</TextArabic>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#D4B78F]/20 pt-6">
                  <TextArabic className="mb-2">التوصيل المتوقع</TextArabic>
                  <TextArabic className="font-bold">
                    خلال {order.estimatedDelivery.minDays} - {order.estimatedDelivery.maxDays} أيام
                  </TextArabic>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  );
}