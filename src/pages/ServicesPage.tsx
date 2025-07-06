import { MainLayout } from "@/components/layouts/main-layout";
import { TextArabic } from "@/components/ui/text-arabic";

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="container px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <TextArabic variant="h1" className="mb-8 text-center">خدماتنا</TextArabic>
          
          <div className="mb-16 overflow-hidden rounded-xl">
            <img
              src="/assets/placeholder-image.svg"
              alt="Dream Boutique Services"
              className="h-auto w-full object-cover"
              width={800}
              height={400}
            />
          </div>
          
          <div className="mb-16">
            <TextArabic variant="h3" className="mb-6 text-center">نقدم لكِ خدمات متكاملة لتجربة تسوق مميزة</TextArabic>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-start rounded-lg border border-[#D4B78F]/30 bg-white p-6">
                <div className="mb-4 rounded-full bg-[#F0E6D2] p-3">
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
                    className="h-6 w-6 text-[#D4B78F]"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </div>
                <TextArabic variant="h4" className="mb-2">تسوق مريح</TextArabic>
                <TextArabic>
                  توفير تجربة تسوق سلسة وسهلة عبر الإنترنت أو في معارضنا، مع مجموعة واسعة من المنتجات المصنفة بشكل جيد.
                </TextArabic>
              </div>
              
              <div className="flex flex-col items-start rounded-lg border border-[#D4B78F]/30 bg-white p-6">
                <div className="mb-4 rounded-full bg-[#F0E6D2] p-3">
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
                    className="h-6 w-6 text-[#D4B78F]"
                  >
                    <path d="m7.5 4.27 9 5.15" />
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 12v10" />
                  </svg>
                </div>
                <TextArabic variant="h4" className="mb-2">شحن سريع</TextArabic>
                <TextArabic>
                  توفير خدمة شحن سريعة وموثوقة مع إمكانية تتبع الطلب في أي وقت، وتوصيل خلال فترة تتراوح بين 24 ساعة إلى 6 أيام.
                </TextArabic>
              </div>
              
              <div className="flex flex-col items-start rounded-lg border border-[#D4B78F]/30 bg-white p-6">
                <div className="mb-4 rounded-full bg-[#F0E6D2] p-3">
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
                    className="h-6 w-6 text-[#D4B78F]"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <TextArabic variant="h4" className="mb-2">خدمة العملاء</TextArabic>
                <TextArabic>
                  فريق مخصص لخدمة العملاء متاح للرد على استفساراتكم وتقديم المساعدة على مدار الساعة، لضمان تجربة تسوق مثالية.
                </TextArabic>
              </div>
              
              <div className="flex flex-col items-start rounded-lg border border-[#D4B78F]/30 bg-white p-6">
                <div className="mb-4 rounded-full bg-[#F0E6D2] p-3">
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
                    className="h-6 w-6 text-[#D4B78F]"
                  >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <TextArabic variant="h4" className="mb-2">تغليف هدايا</TextArabic>
                <TextArabic>
                  خدمة تغليف هدايا أنيقة ومميزة، تضيف لمسة خاصة لطلباتكم وهداياكم، مع إمكانية إضافة بطاقة تهنئة شخصية.
                </TextArabic>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <TextArabic variant="h2" className="mb-8 text-center">فيديو توضيحي</TextArabic>
            <div className="aspect-video overflow-hidden rounded-xl bg-black">
              <div className="flex h-full items-center justify-center">
                <TextArabic className="text-white">فيديو توضيحي لخدمات البوتيك</TextArabic>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl bg-[#F0E6D2] p-8 text-center">
            <TextArabic variant="h3" className="mb-4">هل لديكِ أسئلة؟</TextArabic>
            <TextArabic className="mb-6">فريقنا جاهز للإجابة على جميع استفساراتكِ</TextArabic>
            <div className="flex justify-center">
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
                className="mr-2 h-5 w-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <TextArabic className="font-bold">0123456789</TextArabic>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}