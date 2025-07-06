import { Product } from "@/types";

export const products: Product[] = [
  // Classic Brand Products
  {
    id: "classic-001",
    brandId: "classic",
    name: "فستان كلاسيك أسود",
    description: "فستان أنيق بقصة كلاسيكية مناسب لجميع المناسبات الرسمية",
    price: 1200,
    sizes: ["S", "M", "L", "XL"],
    colors: ["أسود", "أزرق داكن", "بيج"],
    images: ["/assets/products/classic-001-1.jpg", "/assets/products/classic-001-2.jpg"],
    stock: 15
  },
  {
    id: "classic-002",
    brandId: "classic",
    name: "بدلة رسمية",
    description: "بدلة رسمية مصممة بأعلى معايير الجودة",
    price: 2500,
    sizes: ["S", "M", "L"],
    colors: ["رمادي", "أسود"],
    images: ["/assets/products/classic-002-1.jpg", "/assets/products/classic-002-2.jpg"],
    stock: 10
  },
  {
    id: "classic-003",
    brandId: "classic",
    name: "بلوزة حرير",
    description: "بلوزة من الحرير الطبيعي بتصميم أنيق",
    price: 850,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["أبيض", "وردي فاتح", "أزرق سماوي"],
    images: ["/assets/products/classic-003-1.jpg", "/assets/products/classic-003-2.jpg"],
    stock: 20
  },

  // Ghyma Brand Products
  {
    id: "ghyma-001",
    brandId: "ghyma",
    name: "فستان سهرة",
    description: "فستان سهرة فاخر مناسب للمناسبات الخاصة",
    price: 3200,
    sizes: ["S", "M", "L"],
    colors: ["ذهبي", "فضي", "أحمر"],
    images: ["/assets/products/ghyma-001-1.jpg", "/assets/products/ghyma-001-2.jpg"],
    stock: 8
  },
  {
    id: "ghyma-002",
    brandId: "ghyma",
    name: "بنطلون كاجوال",
    description: "بنطلون كاجوال مريح للإطلالات اليومية",
    price: 950,
    sizes: ["S", "M", "L", "XL"],
    colors: ["أسود", "بيج", "كحلي"],
    images: ["/assets/products/ghyma-002-1.jpg", "/assets/products/ghyma-002-2.jpg"],
    stock: 25
  },
  {
    id: "ghyma-003",
    brandId: "ghyma",
    name: "جاكيت شتوي",
    description: "جاكيت شتوي دافئ بتصميم عصري",
    price: 1800,
    sizes: ["M", "L", "XL"],
    colors: ["بني", "زيتي", "بورجندي"],
    images: ["/assets/products/ghyma-003-1.jpg", "/assets/products/ghyma-003-2.jpg"],
    stock: 12
  },

  // Designerr. Mix Products
  {
    id: "designerr-mix-001",
    brandId: "designerr-mix",
    name: "فستان مصمم حصري",
    description: "فستان مصمم حصرياً لمجموعة Designerr. Mix",
    price: 4500,
    sizes: ["XS", "S", "M", "L"],
    colors: ["تركواز", "فوشيا", "ذهبي"],
    images: ["/assets/products/designerr-mix-001-1.jpg", "/assets/products/designerr-mix-001-2.jpg"],
    stock: 5
  },
  {
    id: "designerr-mix-002",
    brandId: "designerr-mix",
    name: "طقم مناسبات",
    description: "طقم مناسبات فاخر مصمم خصيصاً للمناسبات المميزة",
    price: 3800,
    sizes: ["S", "M", "L"],
    colors: ["أزرق ملكي", "بنفسجي", "أخضر زمردي"],
    images: ["/assets/products/designerr-mix-002-1.jpg", "/assets/products/designerr-mix-002-2.jpg"],
    stock: 7
  },
  {
    id: "designerr-mix-003",
    brandId: "designerr-mix",
    name: "عباءة مطرزة",
    description: "عباءة مطرزة يدوياً بتصميم عصري أنيق",
    price: 2900,
    sizes: ["S/M", "L/XL"],
    colors: ["أسود", "كحلي", "بيج فاتح"],
    images: ["/assets/products/designerr-mix-003-1.jpg", "/assets/products/designerr-mix-003-2.jpg"],
    stock: 10
  }
];