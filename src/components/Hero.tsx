import { Phone, MessageCircle, ArrowDown, HardHat } from "lucide-react";

import { client, contactLinks } from "@/config/client";

export const Hero = () => {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-[100dvh] overflow-hidden"
    >
      {/* صورة الخلفية */}
      <img
        src={`${import.meta.env.BASE_URL}hero1/w.webp`}
        alt="مظلات الدمام والخبر - مقاولات عامة الدمام والخبر - مظلات وسواتر المنطقة الشرقية"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      {/* طبقة خفيفة جدًا لتحسين قراءة النص بدون إخفاء الصورة */}
      <div className="absolute inset-0 bg-black/20" />

      {/* المحتوى فوق الصورة */}
      <div className="relative z-10 flex min-h-[100dvh] items-center px-5 py-28 sm:px-8 lg:px-16">
        <div className="w-full max-w-3xl animate-elegant-fade">
          
          {/* الشارة */}
          <div className="section-badge mb-6 inline-flex">
            <HardHat size={14} className="shrink-0 text-bronze" />
            <span>{client.tagline}</span>
          </div>

          {/* العنوان */}
          <h1 className="mb-5 text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            {client.hero.title}

            <span className="mt-3 block text-gradient-luxury drop-shadow-md">
              {client.hero.subtitle}
            </span>
          </h1>

          {/* الوصف */}
          <p className="mb-8 max-w-2xl text-base leading-8 text-white/95 drop-shadow-md sm:text-lg">
            {client.hero.paragraph1}
          </p>

          {/* الأزرار */}
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury w-full sm:w-auto"
            >
              <MessageCircle size={18} className="shrink-0" />
              تواصل معنا عبر واتساب
            </a>

            <a
              href={contactLinks.phone}
              className="btn-modern w-full sm:w-auto"
            >
              <Phone size={18} className="shrink-0 text-bronze" />
              اتصل الآن
            </a>
          </div>
        </div>
      </div>

      {/* سهم النزول */}
      <a
        href="#services"
        className="group absolute bottom-6 left-1/2 z-20 -translate-x-1/2 sm:bottom-8"
        aria-label="الانتقال إلى الخدمات"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-bronze/40 bg-white/90 shadow-sm backdrop-blur-sm transition-transform group-hover:translate-y-0.5">
          <ArrowDown size={18} className="text-bronze" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
