import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";

// تأكد إنك مستورد الـ Header والـ Footer من مساراتهم الصحيحة
import { Header } from "@/components/layouts/header"; // مهم جداً: تأكد من المسار الصحيح
import { Footer } from "@/components/layouts/footer"; // مهم جداً: تأكد من المسار الصحيح

export function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* هنا بنحط الـ Header الحقيقي بتاعك */}
      <Header /> {/* ده هيظهر الـ Header بتاعك اللي فيه لوحة الإدارة والسلة */}

      <main className="flex-1">{children}</main>

      {/* زر الواتساب العائم */}
      <a
        href="https://wa.me/962779308837" // تم تعديل الرقم هنا: شلت "00" وحطيت الكود الدولي مباشرة "962"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <MessageCircleMore className="h-8 w-8" />
      </a>

      {/* هنا بنحط الـ Footer الحقيقي بتاعك */}
      <Footer /> {/* ده هيظهر الـ Footer بتاعك */}
    </div>
  );
}