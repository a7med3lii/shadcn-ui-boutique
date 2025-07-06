import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { TextArabic } from "@/components/ui/text-arabic";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="container flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="mb-2 text-9xl font-bold text-[#D4B78F]">404</h1>
        <TextArabic variant="h1" className="mb-6">الصفحة غير موجودة</TextArabic>
        <TextArabic className="mb-8 max-w-md">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
        </TextArabic>
        <Button asChild className="bg-[#D4B78F] hover:bg-[#C6A77E] text-white">
          <Link to="/">
            <TextArabic>العودة إلى الرئيسية</TextArabic>
          </Link>
        </Button>
      </div>
    </MainLayout>
  );
}