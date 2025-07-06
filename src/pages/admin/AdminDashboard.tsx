import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TextArabic } from "@/components/ui/text-arabic";
import { useAdmin } from "@/hooks/use-admin";
import { AdminOrder, Product } from "@/types";
import { ArrowRight, DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const { products, orders } = useAdmin();

  return (
    <div className="flex min-h-screen">
      {/* Admin Sidebar */}
      <div className="fixed inset-y-0 right-0 z-50 w-64 border-l border-[#D4B78F]/20 bg-[#F8F3E9] p-6">
        <div className="flex items-center gap-2">
          <TextArabic variant="h3" className="text-[#D4B78F]">Dream</TextArabic>
          <span className="rounded bg-[#D4B78F] px-2 py-1 text-xs font-semibold text-white">
            ادمن
          </span>
        </div>
        <nav className="mt-10 grid gap-2">
          <Link to="/admin" className="flex items-center rounded-md bg-[#D4B78F]/10 px-3 py-2 text-[#D4B78F]">
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
              className="ml-2 h-4 w-4"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            <TextArabic>لوحة التحكم</TextArabic>
          </Link>
          <Link to="/admin/products" className="flex items-center rounded-md px-3 py-2 hover:bg-[#D4B78F]/10">
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
              className="ml-2 h-4 w-4"
            >
              <path d="m7.5 4.27 9 5.15" />
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 12v10" />
            </svg>
            <TextArabic>المنتجات</TextArabic>
          </Link>
          <Link to="/admin/orders" className="flex items-center rounded-md px-3 py-2 hover:bg-[#D4B78F]/10">
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
              className="ml-2 h-4 w-4"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
            <TextArabic>الطلبات</TextArabic>
          </Link>
          <Link to="/admin/inventory" className="flex items-center rounded-md px-3 py-2 hover:bg-[#D4B78F]/10">
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
              className="ml-2 h-4 w-4"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
            <TextArabic>المخزون</TextArabic>
          </Link>
          <Link to="/admin/accounts" className="flex items-center rounded-md px-3 py-2 hover:bg-[#D4B78F]/10">
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
              className="ml-2 h-4 w-4"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <TextArabic>الحسابات</TextArabic>
          </Link>
          <Link to="/admin/settings" className="flex items-center rounded-md px-3 py-2 hover:bg-[#D4B78F]/10">
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
              className="ml-2 h-4 w-4"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <TextArabic>الإعدادات</TextArabic>
          </Link>
        </nav>
        <div className="mt-auto pt-6">
          <Link to="/" className="flex w-full items-center justify-center rounded-md border border-[#D4B78F] px-3 py-2 text-[#D4B78F]">
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
              className="ml-2 h-4 w-4"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <TextArabic>العودة للموقع</TextArabic>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="mr-64 w-full">
        <div className="container p-6">
          <TextArabic variant="h2" className="mb-8">لوحة التحكم</TextArabic>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <CardDescription>
                    <TextArabic>المنتجات</TextArabic>
                  </CardDescription>
                  <CardTitle className="text-3xl">{products.length}</CardTitle>
                </div>
                <div className="rounded-full bg-blue-100 p-3 text-blue-500">
                  <Package className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <CardDescription>
                    <TextArabic>الطلبات</TextArabic>
                  </CardDescription>
                  <CardTitle className="text-3xl">{orders.length}</CardTitle>
                </div>
                <div className="rounded-full bg-green-100 p-3 text-green-500">
                  <ShoppingCart className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <CardDescription>
                    <TextArabic>العملاء</TextArabic>
                  </CardDescription>
                  <CardTitle className="text-3xl">10</CardTitle>
                </div>
                <div className="rounded-full bg-purple-100 p-3 text-purple-500">
                  <Users className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <CardDescription>
                    <TextArabic>الإيرادات</TextArabic>
                  </CardDescription>
                  <CardTitle className="text-3xl">12,750 ر.س</CardTitle>
                </div>
                <div className="rounded-full bg-yellow-100 p-3 text-yellow-500">
                  <DollarSign className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Orders */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                <TextArabic>أحدث الطلبات</TextArabic>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {orders.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="border-b">
                        <th className="text-right">
                          <TextArabic className="font-medium">رقم الطلب</TextArabic>
                        </th>
                        <th className="text-right">
                          <TextArabic className="font-medium">العميل</TextArabic>
                        </th>
                        <th className="text-right">
                          <TextArabic className="font-medium">التاريخ</TextArabic>
                        </th>
                        <th className="text-right">
                          <TextArabic className="font-medium">المبلغ</TextArabic>
                        </th>
                        <th className="text-right">
                          <TextArabic className="font-medium">الحالة</TextArabic>
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.slice(0, 5).map((order: AdminOrder) => (
                        <tr key={order.id} className="border-b">
                          <td className="py-3">
                            <TextArabic>#{order.id.slice(0, 8)}</TextArabic>
                          </td>
                          <td>
                            <TextArabic>{order.customerName}</TextArabic>
                          </td>
                          <td>
                            <TextArabic>{order.date}</TextArabic>
                          </td>
                          <td>
                            <TextArabic>{order.totalPrice} ر.س</TextArabic>
                          </td>
                          <td>
                            <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                              <TextArabic>{order.status}</TextArabic>
                            </span>
                          </td>
                          <td className="text-left">
                            <Button asChild variant="ghost" size="sm">
                              <Link to={`/admin/orders/${order.id}`}>
                                <TextArabic>عرض</TextArabic>
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center">
                  <TextArabic>لا توجد طلبات</TextArabic>
                </div>
              )}
              
              <div className="mt-4 flex justify-end">
                <Link to="/admin/orders" className="flex items-center text-sm text-[#D4B78F]">
                  <TextArabic>عرض جميع الطلبات</TextArabic>
                  <ArrowRight className="mr-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Low Stock Alert */}
          <Card>
            <CardHeader>
              <CardTitle>
                <TextArabic>تنبيهات المخزون</TextArabic>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right">
                        <TextArabic className="font-medium">المنتج</TextArabic>
                      </th>
                      <th className="text-right">
                        <TextArabic className="font-medium">البراند</TextArabic>
                      </th>
                      <th className="text-right">
                        <TextArabic className="font-medium">المخزون</TextArabic>
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.filter((p) => p.stock < 10).map((product: Product) => (
                      <tr key={product.id} className="border-b">
                        <td className="py-3">
                          <div className="flex items-center">
                            <img
                              src={product.images[0] || "/assets/placeholder-image.svg"}
                              alt={product.name}
                              className="ml-2 h-10 w-10 rounded-md object-cover"
                              width={40}
                              height={40}
                            />
                            <TextArabic>{product.name}</TextArabic>
                          </div>
                        </td>
                        <td>
                          <TextArabic>
                            {product.brandId.charAt(0).toUpperCase() + product.brandId.slice(1)}
                          </TextArabic>
                        </td>
                        <td>
                          <span className={`rounded px-2 py-1 text-xs font-medium ${
                            product.stock < 5 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            <TextArabic>{product.stock} قطعة</TextArabic>
                          </span>
                        </td>
                        <td className="text-left">
                          <Button asChild variant="ghost" size="sm">
                            <Link to={`/admin/products/${product.id}`}>
                              <TextArabic>تحديث المخزون</TextArabic>
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {products.filter((p) => p.stock < 10).length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-4 text-center">
                          <TextArabic>لا توجد تنبيهات للمخزون</TextArabic>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}