import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextArabic } from "@/components/ui/text-arabic";
import { useCart } from "@/hooks/use-cart";
import { generateRandomString } from "@/lib/utils";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) return;

    // Generate random tracking number
    const trackingNumber = generateRandomString(8).toUpperCase();
    
    // Generate random delivery time (between 1-6 days)
    const minDays = 1;
    const maxDays = 6;

    // Create order object (in real app, this would be sent to backend)
    const order = {
      id: generateRandomString(16),
      items,
      totalPrice,
      customerName: formData.name,
      customerPhone: formData.phone,
      customerAddress: formData.address,
      status: 'pending',
      trackingNumber,
      estimatedDelivery: {
        minDays,
        maxDays,
      },
      createdAt: new Date().toISOString(),
    };
    
    // Store order in localStorage
    const orders = JSON.parse(localStorage.getItem('dream-orders') || '[]');
    orders.push(order);
    localStorage.setItem('dream-orders', JSON.stringify(orders));
    
    // Clear cart
    clearCart();
    
    // Navigate to success page
    navigate(`/order-success/${order.id}`);
  };

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="container flex flex-col items-center justify-center px-4 py-16">
          <TextArabic variant="h2" className="mb-6">سلة التسوق فارغة</TextArabic>
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
        <TextArabic variant="h1" className="mb-10">إتمام الطلب</TextArabic>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <TextArabic>بيانات التوصيل</TextArabic>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">
                      <TextArabic>الاسم بالكامل</TextArabic>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      dir="rtl"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">
                      <TextArabic>رقم الهاتف</TextArabic>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      dir="rtl"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">
                      <TextArabic>العنوان التفصيلي</TextArabic>
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      dir="rtl"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-[#D4B78F] hover:bg-[#C6A77E] text-white"
                    disabled={!formData.name || !formData.phone || !formData.address}
                  >
                    <TextArabic>تأكيد الطلب</TextArabic>
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  <TextArabic>ملخص الطلب</TextArabic>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {items.map((item, index) => (
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
                <div className="mt-6 space-y-4 border-t border-[#D4B78F]/20 pt-4">
                  <div className="flex justify-between">
                    <TextArabic>المجموع</TextArabic>
                    <TextArabic>{totalPrice} ر.س</TextArabic>
                  </div>
                  <div className="flex justify-between">
                    <TextArabic>الشحن</TextArabic>
                    <TextArabic>مجاناً</TextArabic>
                  </div>
                  <div className="flex justify-between font-bold">
                    <TextArabic>الإجمالي</TextArabic>
                    <TextArabic>{totalPrice} ر.س</TextArabic>
                  </div>
                  <TextArabic className="text-sm text-gray-500">
                    وقت التوصيل المتوقع: 1-6 أيام
                  </TextArabic>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}