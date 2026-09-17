import type { LucideIcon } from "lucide-react";
import {
  Grid,
  Zap,
  TreePine,
  Shield,
  Home,
  Droplets,
  Armchair,
  Warehouse,
  Layout,
  Layers,
  Fence,
} from "lucide-react";

export type ServiceSeoKey =
  | "structuralCanopies"
  | "schoolCanopies"
  | "laserCutCanopies"
  | "archCanopies"
  | "garageCanopies"
  | "warehouses"
  | "fencing"
  | "roofInsulation"
  | "waterThermalInsulation"
  | "claddingCanopies"
  | "pyramidalCanopies"
  | "landscaping";

export interface ServiceDefinition {
  id: ServiceSeoKey;
  slug: string;
  route: string;
  folder: string;
  title: string;
  shortTitle: string;
  badge: string;
  heroSubtitle: string;
  introTitle: string;
  introDescription: string;
  galleryTitle: string;
  galleryDescription: string;
  benefitsTitle: string;
  hasHeaderImage: boolean;
  galleryImageCount: number;
  cardImage: string;
  icon: LucideIcon;
  features: Array<{ title: string; description: string }>;
  benefits: string[];
  serviceTypes: Array<{ title: string; description: string }>;
  contentSections: Array<{ title: string; description: string; imageIndex: number }>;
  areasText: string;
}

/** Hero uses header.webp when available; gallery uses numbered images only. */
export function getServiceHeroPath(service: ServiceDefinition): string {
  if (service.hasHeaderImage) {
    return `/${service.folder}/header.webp`;
  }
  return `/${service.folder}/1.webp`;
}

export function getServiceGalleryPaths(service: ServiceDefinition): string[] {
  return Array.from(
    { length: service.galleryImageCount },
    (_, index) => `/${service.folder}/${index + 1}.webp`
  );
}

const defaultFeatures = [
  {
    title: "خبرة طويلة",
    description: "سنوات من الخبرة في تنفيذ المشاريع بجودة واحترافية عالية",
  },
  {
    title: "جودة مضمونة",
    description: "استخدام مواد عالية الجودة مناسبة لمناخ المملكة",
  },
  {
    title: "أسعار تنافسية",
    description: "أفضل الأسعار مع ضمان الجودة والتنفيذ الاحترافي",
  },
  {
    title: "التزام بالمواعيد",
    description: "فريق عمل محترف يلتزم بمواعيد التسليم المتفق عليها",
  },
];

export const servicesList: ServiceDefinition[] = [
  {
    id: "structuralCanopies",
    slug: "structural-canopies",
    route: "/structural-canopies",
    folder: "structural-canopies",
    title: "مظلات شد إنشائي",
    shortTitle: "شد إنشائي",
    badge: "مظلات شد إنشائي",
    heroSubtitle: "تصاميم عصرية ومتانة عالية",
    introTitle: "مظلات شد إنشائي في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ مظلات شد إنشائي في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تقدم مظلات شد إنشائي بتصاميم عصرية ومتانة عالية.",
    galleryTitle: "معرض أعمال مظلات شد إنشائي",
    galleryDescription: "نماذج من مشاريع مظلات شد إنشائي المنفذة بجودة عالية",
    benefitsTitle: "مميزات مظلات شد إنشائي",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/services1/1.webp",
    icon: Grid,
    features: defaultFeatures,
    benefits: [
      "تصاميم عصرية ومتانة عالية",
      "مقاومة للعوامل الجوية",
      "هياكل حديدية متينة",
      "سهولة الصيانة",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "مظلات شد إنشائي", description: "تنفيذ مظلات شد إنشائي بتصاميم عصرية" },
      { title: "مظلات للمساحات الكبيرة", description: "حلول للمساحات الواسعة" },
      { title: "مظلات للمواقف", description: "حماية لمواقف السيارات" },
      { title: "تصميم مخصص", description: "تصميم حسب احتياجات العميل" },
    ],
    contentSections: [
      { title: "مظلات شد إنشائي", description: "تنفيذ مظلات شد إنشائي بتصاميم عصرية ومتانة عالية.", imageIndex: 0 },
      { title: "مظلات للمواقف", description: "حماية كاملة لمواقف السيارات.", imageIndex: 1 },
      { title: "مظلات للمساحات الكبيرة", description: "حلول للمساحات الواسعة.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "schoolCanopies",
    slug: "school-canopies",
    route: "/school-canopies",
    folder: "school-canopies",
    title: "مظلات مدارس",
    shortTitle: "مظلات مدارس",
    badge: "مظلات مدارس",
    heroSubtitle: "أعلى معايير الأمان والجودة",
    introTitle: "مظلات مدارس في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ مظلات مدارس في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ مظلات المدارس والملاعب بأعلى معايير الأمان والجودة.",
    galleryTitle: "معرض أعمال مظلات المدارس",
    galleryDescription: "نماذج من مشاريع مظلات المدارس المنفذة",
    benefitsTitle: "مميزات مظلات المدارس",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/school-canopies/1.webp",
    icon: Shield,
    features: defaultFeatures,
    benefits: [
      "أعلى معايير الأمان",
      "مواد مقاومة للحريق",
      "تصاميم آمنة للطلاب",
      "متانة عالية",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "مظلات مدارس", description: "مظلات للملاعب والساحات" },
      { title: "مظلات للملاعب", description: "حماية للملاعب الرياضية" },
      { title: "مظلات للساحات", description: "تغطية للساحات المدرسية" },
      { title: "تصميم مخصص", description: "تصميم حسب مساحة المدرسة" },
    ],
    contentSections: [
      { title: "مظلات للمدارس", description: "مظلات آمنة للمدارس.", imageIndex: 0 },
      { title: "مظلات للملاعب", description: "حماية للملاعب الرياضية.", imageIndex: 1 },
      { title: "مظلات للساحات", description: "تغطية للساحات المدرسية.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "laserCutCanopies",
    slug: "laser-cut-canopies",
    route: "/laser-cut-canopies",
    folder: "laser-cut-canopies",
    title: "مظلات قص ليزر",
    shortTitle: "قص ليزر",
    badge: "مظلات قص ليزر",
    heroSubtitle: "تصاميم حديثة ودقة عالية",
    introTitle: "مظلات قص ليزر في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ مظلات قص ليزر في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ مظلات قص ليزر بتصاميم حديثة ودقة عالية.",
    galleryTitle: "معرض أعمال مظلات قص ليزر",
    galleryDescription: "نماذج من مشاريع مظلات قص ليزر المنفذة",
    benefitsTitle: "مميزات مظلات قص ليزر",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/services1/2.webp",
    icon: Zap,
    features: defaultFeatures,
    benefits: [
      "تصاميم حديثة ودقيقة",
      "قصات ليزر متنوعة",
      "مظهر جمالي راقي",
      "سهولة التركيب",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "مظلات قص ليزر", description: "تصاميم حديثة بقص ليزر" },
      { title: "مظلات بتصاميم فنية", description: "تصاميم فنية متنوعة" },
      { title: "مظلات للمباني", description: "حلول للمباني التجارية" },
      { title: "تصميم مخصص", description: "تصميم حسب ذوق العميل" },
    ],
    contentSections: [
      { title: "مظلات قص ليزر", description: "تصاميم حديثة ودقيقة.", imageIndex: 0 },
      { title: "مظلات بتصاميم فنية", description: "تصاميم فنية متنوعة.", imageIndex: 1 },
      { title: "مظلات للمباني", description: "حلول للمباني التجارية.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "archCanopies",
    slug: "arch-canopies",
    route: "/arch-canopies",
    folder: "arch-canopies",
    title: "مظلات قوس",
    shortTitle: "مظلات قوس",
    badge: "مظلات قوس",
    heroSubtitle: "تصاميم أنيقة للساحات",
    introTitle: "مظلات قوس في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ مظلات قوس في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ مظلات قوس بتصاميم أنيقة للساحات والمناطق الخارجية.",
    galleryTitle: "معرض أعمال مظلات قوس",
    galleryDescription: "نماذج من مشاريع مظلات قوس المنفذة",
    benefitsTitle: "مميزات مظلات قوس",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/services1/4.webp",
    icon: Layout,
    features: defaultFeatures,
    benefits: [
      "تصاميم أنيقة",
      "هياكل مقوسة متينة",
      "مظهر جمالي راقي",
      "مناسبة للساحات",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "مظلات قوس", description: "تصاميم أنيقة مقوسة" },
      { title: "مظلات للساحات", description: "حلول للساحات الخارجية" },
      { title: "مظلات للحدائق", description: "تغطية للحدائق" },
      { title: "تصميم مخصص", description: "تصميم حسب المساحة" },
    ],
    contentSections: [
      { title: "مظلات قوس", description: "تصاميم أنيقة للساحات.", imageIndex: 0 },
      { title: "مظلات للساحات", description: "حلول للساحات الخارجية.", imageIndex: 1 },
      { title: "مظلات للحدائق", description: "تغطية للحدائق.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "garageCanopies",
    slug: "garage-canopies",
    route: "/garage-canopies",
    folder: "garage-canopies",
    title: "مظلات كراج",
    shortTitle: "مظلات كراج",
    badge: "مظلات كراج",
    heroSubtitle: "حماية كاملة للسيارات",
    introTitle: "مظلات كراج ومظلات سيارات في الدمام والخبر",
    introDescription: "تنفيذ مظلات كراج ومظلات سيارات في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ مظلات الكراج والمواقف بحماية كاملة للسيارات.",
    galleryTitle: "معرض أعمال مظلات الكراج",
    galleryDescription: "نماذج من مشاريع مظلات الكراج المنفذة",
    benefitsTitle: "مميزات مظلات الكراج",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/services1/5.webp",
    icon: Warehouse,
    features: defaultFeatures,
    benefits: [
      "حماية كاملة للسيارات",
      "تصاميم عملية",
      "هياكل متينة",
      "سهولة التركيب",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "مظلات كراج", description: "مظلات لمواقف السيارات" },
      { title: "مظلات للمواقف", description: "حلول للمواقف العامة" },
      { title: "مظلات للفيلات", description: "مظلات لمواقف الفيلات" },
      { title: "تصميم مخصص", description: "تصميم حسب عدد السيارات" },
    ],
    contentSections: [
      { title: "مظلات كراج", description: "حماية كاملة للسيارات.", imageIndex: 0 },
      { title: "مظلات للمواقف", description: "حلول للمواقف العامة.", imageIndex: 1 },
      { title: "مظلات للفيلات", description: "مظلات لمواقف الفيلات.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "warehouses",
    slug: "warehouses",
    route: "/warehouses",
    folder: "warehouses",
    title: "هناجر ومستودعات",
    shortTitle: "هناجر",
    badge: "هناجر ومستودعات",
    heroSubtitle: "عزل حراري ممتاز",
    introTitle: "هناجر ومستودعات في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ هناجر ومستودعات في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ هناجر ومستودعات بعزل حراري ممتاز.",
    galleryTitle: "معرض أعمال الهناجر",
    galleryDescription: "نماذج من مشاريع الهناجر والمستودعات المنفذة",
    benefitsTitle: "مميزات الهناجر",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/WarehousesDetail1/1.webp",
    icon: Warehouse,
    features: defaultFeatures,
    benefits: [
      "عزل حراري ممتاز",
      "مساحات واسعة",
      "هياكل متينة",
      "سهولة التركيب",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "هناجر", description: "هناجر بمساحات مختلفة" },
      { title: "مستودعات", description: "مستودعات للتخزين" },
      { title: "هناجر صناعية", description: "هناجر للمشاريع الصناعية" },
      { title: "تصميم مخصص", description: "تصميم حسب المساحة المطلوبة" },
    ],
    contentSections: [
      { title: "هناجر", description: "هناجر بمساحات مختلفة.", imageIndex: 0 },
      { title: "مستودعات", description: "مستودعات للتخزين.", imageIndex: 1 },
      { title: "هناجر صناعية", description: "هناجر للمشاريع الصناعية.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "fencing",
    slug: "fencing",
    route: "/fencing",
    folder: "fencing",
    title: "سواتر",
    shortTitle: "سواتر",
    badge: "سواتر",
    heroSubtitle: "سواتر خصوصية للمنازل والفيلل",
    introTitle: "سواتر في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ سواتر في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ سواتر الخصوصية للمنازل والفيلل بتصاميم متنوعة.",
    galleryTitle: "معرض أعمال السواتر",
    galleryDescription: "نماذج من مشاريع السواتر المنفذة",
    benefitsTitle: "مميزات السواتر",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/services1/6.webp",
    icon: Fence,
    features: defaultFeatures,
    benefits: [
      "خصوصية كاملة",
      "تصاميم متنوعة",
      "مواد عالية الجودة",
      "سهولة التركيب",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "سواتر", description: "سواتر خصوصية للمنازل" },
      { title: "سواتر للفيلل", description: "سواتر للفيلل والقصور" },
      { title: "سواتر حديد", description: "سواتر حديدية متينة" },
      { title: "تصميم مخصص", description: "تصميم حسب ذوق العميل" },
    ],
    contentSections: [
      { title: "سواتر", description: "سواتر خصوصية للمنازل.", imageIndex: 0 },
      { title: "سواتر للفيلل", description: "سواتر للفيلل والقصور.", imageIndex: 1 },
      { title: "سواتر حديد", description: "سواتر حديدية متينة.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "roofInsulation",
    slug: "roof-insulation",
    route: "/roof-insulation",
    folder: "roof-insulation",
    title: "عوازل الأسطح",
    shortTitle: "عوازل الأسطح",
    badge: "عوازل الأسطح",
    heroSubtitle: "حماية كاملة من التسربات",
    introTitle: "عوازل أسطح في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ عوازل أسطح في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ عوازل الأسطح بحماية كاملة من التسربات.",
    galleryTitle: "معرض أعمال عوازل الأسطح",
    galleryDescription: "نماذج من مشاريع عوازل الأسطح المنفذة",
    benefitsTitle: "مميزات عوازل الأسطح",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/services1/7.webp",
    icon: Droplets,
    features: defaultFeatures,
    benefits: [
      "حماية كاملة من التسربات",
      "مواد عالية الجودة",
      "متانة عالية",
      "سهولة التركيب",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "عوازل الأسطح", description: "عزل مائي للأسطح" },
      { title: "عزل حراري", description: "عزل حراري للأسطح" },
      { title: "عزل صوتي", description: "عزل صوتي للأسطح" },
      { title: "تصميم مخصص", description: "تصميم حسب نوع السطح" },
    ],
    contentSections: [
      { title: "عوازل الأسطح", description: "حماية كاملة من التسربات.", imageIndex: 0 },
      { title: "عزل حراري", description: "عزل حراري للأسطح.", imageIndex: 1 },
      { title: "عزل صوتي", description: "عزل صوتي للأسطح.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "waterThermalInsulation",
    slug: "water-thermal-insulation",
    route: "/water-thermal-insulation",
    folder: "water-thermal-insulation",
    title: "العزل المائي والحراري",
    shortTitle: "العزل",
    badge: "العزل المائي والحراري",
    heroSubtitle: "أفضل المواصفات",
    introTitle: "العزل المائي والحراري في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ العزل المائي والحراري في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ العزل المائي والحراري بأفضل المواصفات.",
    galleryTitle: "معرض أعمال العزل",
    galleryDescription: "نماذج من مشاريع العزل المنفذة",
    benefitsTitle: "مميزات العزل",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/services1/8.webp",
    icon: Shield,
    features: defaultFeatures,
    benefits: [
      "أفضل المواصفات",
      "حماية كاملة",
      "مواد عالية الجودة",
      "متانة عالية",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "العزل المائي", description: "عزل مائي للمباني" },
      { title: "العزل الحراري", description: "عزل حراري للمباني" },
      { title: "العزل الصوتي", description: "عزل صوتي للمباني" },
      { title: "تصميم مخصص", description: "تصميم حسب نوع المبنى" },
    ],
    contentSections: [
      { title: "العزل المائي", description: "عزل مائي للمباني.", imageIndex: 0 },
      { title: "العزل الحراري", description: "عزل حراري للمباني.", imageIndex: 1 },
      { title: "العزل الصوتي", description: "عزل صوتي للمباني.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "claddingCanopies",
    slug: "cladding-canopies",
    route: "/cladding-canopies",
    folder: "cladding-canopies",
    title: "مظلات كلادينج",
    shortTitle: "كلادينج",
    badge: "مظلات كلادينج",
    heroSubtitle: "تصاميم عصرية",
    introTitle: "مظلات كلادينج في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ مظلات كلادينج في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ مظلات كلادينج بتصاميم عصرية.",
    galleryTitle: "معرض أعمال مظلات كلادينج",
    galleryDescription: "نماذج من مشاريع مظلات كلادينج المنفذة",
    benefitsTitle: "مميزات مظلات كلادينج",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/services1/1.webp",
    icon: Layers,
    features: defaultFeatures,
    benefits: [
      "تصاميم عصرية",
      "مواد عالية الجودة",
      "مظهر جمالي راقي",
      "سهولة التركيب",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "مظلات كلادينج", description: "مظلات بكلادينج" },
      { title: "واجهات كلادينج", description: "واجهات بكلادينج" },
      { title: "مظلات للمباني", description: "حلول للمباني التجارية" },
      { title: "تصميم مخصص", description: "تصميم حسب ذوق العميل" },
    ],
    contentSections: [
      { title: "مظلات كلادينج", description: "مظلات بتصاميم عصرية.", imageIndex: 0 },
      { title: "واجهات كلادينج", description: "واجهات بكلادينج.", imageIndex: 1 },
      { title: "مظلات للمباني", description: "حلول للمباني التجارية.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "pyramidalCanopies",
    slug: "pyramidal-canopies",
    route: "/pyramidal-canopies",
    folder: "pyramidal-canopies",
    title: "مظلات هرمية",
    shortTitle: "مظلات هرمية",
    badge: "مظلات هرمية",
    heroSubtitle: "تصاميم كلاسيكية وعصرية",
    introTitle: "مظلات هرمية في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ مظلات هرمية في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ مظلات هرمية بتصاميم كلاسيكية وعصرية.",
    galleryTitle: "معرض أعمال مظلات هرمية",
    galleryDescription: "نماذج من مشاريع مظلات هرمية المنفذة",
    benefitsTitle: "مميزات مظلات هرمية",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/pyramidal-car-canopies/1.webp",
    icon: Layout,
    features: defaultFeatures,
    benefits: [
      "تصاميم كلاسيكية وعصرية",
      "هياكل متينة",
      "مظهر جمالي راقي",
      "سهولة التركيب",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "مظلات هرمية", description: "مظلات بتصاميم هرمية" },
      { title: "مظلات للمواقف", description: "مظلات هرمية للمواقف" },
      { title: "مظلات للحدائق", description: "مظلات هرمية للحدائق" },
      { title: "تصميم مخصص", description: "تصميم حسب المساحة" },
    ],
    contentSections: [
      { title: "مظلات هرمية", description: "مظلات بتصاميم كلاسيكية وعصرية.", imageIndex: 0 },
      { title: "مظلات للمواقف", description: "مظلات هرمية للمواقف.", imageIndex: 1 },
      { title: "مظلات للحدائق", description: "مظلات هرمية للحدائق.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
  {
    id: "landscaping",
    slug: "landscaping",
    route: "/landscaping",
    folder: "landscaping",
    title: "تنسيق حدائق",
    shortTitle: "تنسيق حدائق",
    badge: "تنسيق حدائق",
    heroSubtitle: "تصاميم متنوعة",
    introTitle: "تنسيق حدائق في الدمام والخبر والمنطقة الشرقية",
    introDescription: "تنفيذ تنسيق حدائق في الدمام والخبر والمنطقة الشرقية. مؤسسة إبداع المنزل للمقاولات العامة تنفذ تنسيق الحدائق بتصاميم متنوعة.",
    galleryTitle: "معرض أعمال تنسيق الحدائق",
    galleryDescription: "نماذج من مشاريع تنسيق الحدائق المنفذة",
    benefitsTitle: "مميزات تنسيق الحدائق",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/services1/1.webp",
    icon: TreePine,
    features: defaultFeatures,
    benefits: [
      "تصاميم متنوعة",
      "نباتات عالية الجودة",
      "مظهر جمالي راقي",
      "سهولة الصيانة",
      "ضمان شامل على الأعمال",
    ],
    serviceTypes: [
      { title: "تنسيق حدائق", description: "تنسيق الحدائق بتصاميم متنوعة" },
      { title: "تنسيق للفيلات", description: "تنسيق حدائق للفيلات" },
      { title: "تنسيق للمنازل", description: "تنسيق حدائق للمنازل" },
      { title: "تصميم مخصص", description: "تصميم حسب ذوق العميل" },
    ],
    contentSections: [
      { title: "تنسيق حدائق", description: "تنسيق الحدائق بتصاميم متنوعة.", imageIndex: 0 },
      { title: "تنسيق للفيلات", description: "تنسيق حدائق للفيلات.", imageIndex: 1 },
      { title: "تنسيق للمنازل", description: "تنسيق حدائق للمنازل.", imageIndex: 2 },
      { title: "تنفيذ احترافي", description: "فريق متخصص في التنفيذ.", imageIndex: 3 },
    ],
    areasText: "نخدم الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية",
  },
];

export const servicesById = Object.fromEntries(
  servicesList.map((service) => [service.id, service])
) as Record<ServiceSeoKey, ServiceDefinition>;
