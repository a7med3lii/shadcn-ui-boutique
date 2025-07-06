import { MainLayout } from "@/components/layouts/main-layout";
import { TextArabic } from "@/components/ui/text-arabic";

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="container px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <TextArabic variant="h1" className="mb-8 text-center">عنّا</TextArabic>
          
          <div className="mb-10 overflow-hidden rounded-xl">
            <img
              src="/assets/placeholder-image.svg"
              alt="Dream Boutique"
              className="h-auto w-full object-cover"
              width={800}
              height={400}
            />
          </div>
          
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <TextArabic variant="h3" className="mb-4">قصتنا</TextArabic>
              <TextArabic className="mb-6">
                تأسس بوتيك Dream في عام 2023 بهدف توفير تجربة تسوق فاخرة للسيدات الباحثات عن التميز والأناقة. نحن نفخر بتقديم أفضل المنتجات من براندات عالمية مختارة بعناية فائقة، لتناسب الذوق الرفيع والمتطلبات العصرية للمرأة العربية.
              </TextArabic>
              <TextArabic>
                نحرص في Dream على أن نكون أكثر من مجرد متجر، بل وجهة للإلهام وتعزيز الثقة بالنفس من خلال الأزياء الأنيقة والفاخرة. نؤمن بأن كل امرأة تستحق أن تشعر بالتميز والفرادة من خلال ما ترتديه.
              </TextArabic>
            </div>
            <div>
              <TextArabic variant="h3" className="mb-4">رؤيتنا</TextArabic>
              <TextArabic className="mb-6">
                نطمح لأن نكون الوجهة الأولى للسيدات الباحثات عن الأناقة والجودة العالية، من خلال تقديم تجربة تسوق فريدة ومتكاملة، تجمع بين جودة المنتج وسهولة التسوق.
              </TextArabic>
              <TextArabic>
                كما نسعى لبناء علاقة مميزة مع عملائنا قائمة على الثقة والاهتمام بالتفاصيل، وتلبية احتياجاتهم بأعلى مستويات الجودة والخدمة.
              </TextArabic>
            </div>
          </div>
          
          <div className="my-16">
            <TextArabic variant="h2" className="mb-10 text-center">براندات حصرية</TextArabic>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-full bg-[#F0E6D2]">
                  <img
                    src="/assets/placeholder-image.svg"
                    alt="Classic"
                    className="h-full w-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
                <TextArabic variant="h4" className="mb-2">Classic</TextArabic>
                <TextArabic>ملابس كلاسيكية أنيقة تناسب جميع المناسبات</TextArabic>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-full bg-[#F0E6D2]">
                  <img
                    src="/assets/placeholder-image.svg"
                    alt="Ghyma"
                    className="h-full w-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
                <TextArabic variant="h4" className="mb-2">Ghyma</TextArabic>
                <TextArabic>تصاميم عصرية تجمع بين الأناقة والراحة</TextArabic>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-full bg-[#F0E6D2]">
                  <img
                    src="/assets/placeholder-image.svg"
                    alt="Designerr. Mix"
                    className="h-full w-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
                <TextArabic variant="h4" className="mb-2">Designerr. Mix</TextArabic>
                <TextArabic>قطع فاخرة مصممة حسب أحدث صيحات الموضة</TextArabic>
              </div>
            </div>
          </div>
          
          <div className="my-16">
            <TextArabic variant="h2" className="mb-10 text-center">فريقنا</TextArabic>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <img
                    src="/assets/placeholder-image.svg"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                    width={96}
                    height={96}
                  />
                </div>
                <TextArabic variant="h5" className="mb-1">سارة محمد</TextArabic>
                <TextArabic className="text-sm text-gray-500">المديرة التنفيذية</TextArabic>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <img
                    src="/assets/placeholder-image.svg"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                    width={96}
                    height={96}
                  />
                </div>
                <TextArabic variant="h5" className="mb-1">نورة أحمد</TextArabic>
                <TextArabic className="text-sm text-gray-500">مديرة التسويق</TextArabic>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <img
                    src="/assets/placeholder-image.svg"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                    width={96}
                    height={96}
                  />
                </div>
                <TextArabic variant="h5" className="mb-1">هدى عبدالله</TextArabic>
                <TextArabic className="text-sm text-gray-500">مصممة الأزياء</TextArabic>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <img
                    src="/assets/placeholder-image.svg"
                    alt="Team Member"
                    className="h-full w-full object-cover"
                    width={96}
                    height={96}
                  />
                </div>
                <TextArabic variant="h5" className="mb-1">لينا خالد</TextArabic>
                <TextArabic className="text-sm text-gray-500">مديرة خدمة العملاء</TextArabic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}