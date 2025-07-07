// إذا كان لديك تعريف للنوع Brand في ملف منفصل (مثل '@/types')
// فيجب أن يكون موجودًا هكذا:
// import { Brand } from '@/types';

// وإلا، يمكنك تعريف النوع Brand هنا مباشرة إذا لم يكن موجودًا في مكان آخر
export interface Brand {
  id: string;
  name: string;
  description: string;
  image: string; // خاصية مسار الصورة
  instagramLink?: string; // خاصية رابط إنستجرام (اختيارية)
  // أضف أي خصائص أخرى موجودة في بيانات العلامة التجارية الخاصة بك
}

export const brands: Brand[] = [
  {
    id: 'classic.color.shop',
    name: 'classic.color.shop',
    description: 'ملابس كلاسيكية بأناقة تجمع بين الأناقة والراحة',
    image: '/brands/classic.color.shop.jpg', // المسار إلى لوجو classic.color.shop
    instagramLink: 'https://www.instagram.com/classic.color.shop/',
  },
  {
    id: 'ghyma68',
    name: 'ghyma68',
    description: 'تصاميم عصرية تجمع بين الأناقة والراحة',
    image: '/brands/ghyma68.jpg', // المسار إلى لوجو ghyma68
    instagramLink: 'https://www.instagram.com/ghyma68/',
  },
  {
    id: 'designerr.mix',
    name: 'designerr.mix',
    description: 'تلقى مصممينا حسب أحدث صيحات الموضة',
    image: '/brands/designerr.mix.jpg', // المسار إلى لوجو designerr.mix
    instagramLink: 'https://www.instagram.com/designerr.mix/',
  },
  // يمكنك إضافة المزيد من العلامات التجارية هنا بنفس النمط
];