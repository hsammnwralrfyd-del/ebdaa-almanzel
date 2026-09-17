import React from "react";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  ChevronLeft,
  Images,
  Maximize2,
  X,
} from "lucide-react";
import { servicesList } from "@/config/services";

// Generate gallery images from service folders
const galleryImages = servicesList.flatMap(service =>
  Array.from(
    { length: service.galleryImageCount },
    (_, index) => ({
      src: `/${service.folder}/${index + 1}.webp`,
      alt: `${service.title} - مؤسسة إبداع المنزل للمقاولات العامة`
    })
  )
);

export const Gallery = () => {
  const [active, setActive] = React.useState(0);
  const [lightbox, setLightbox] = React.useState(false);

  const goNext = () =>
    setActive((i) => (i + 1) % galleryImages.length);
  const goPrev = () =>
    setActive((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  React.useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft")
        setActive((i) => (i + 1) % galleryImages.length);
      if (e.key === "ArrowRight")
        setActive((i) => (i - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const current = galleryImages[active];

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-white">
      <div className="section-container relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="section-badge mb-5">
            <Images size={14} className="shrink-0 text-bronze" />
            <span>معرض أعمالنا</span>
          </div>

          <h2 className="section-title mb-4">
            أعمالنا بالصور
            <span className="mt-2 block text-gradient-luxury">نفتخر بتنفيذنا</span>
          </h2>

          <p className="section-desc mx-auto">
            مؤسسة إبداع المنزل للمقاولات العامة في الدمام والخبر — متخصصون في تنفيذ مظلات
            سيارات، سواتر، برجولات، هناجر، واجهات كلادينج، وجلسات خارجية بأعلى
            جودة.
          </p>
        </div>

        {/* عرض رئيسي — صورة كاملة بدون طبقات */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-bronze/15 bg-ivory shadow-sm">
            <button
              type="button"
              onClick={() => setLightbox(true)}
              className="group relative block w-full"
              aria-label="عرض الصورة بحجم كامل"
            >
              <div className="aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
                <img
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  className="h-full w-full object-cover transition-opacity duration-300"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="675"
                />
              </div>
              <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg border border-bronze/20 bg-white/95 text-bronze opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                <Maximize2 size={16} />
              </span>
            </button>

            {/* أزرار التنقل */}
            <button
              type="button"
              onClick={goPrev}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-bronze/20 bg-white/95 text-bronze shadow-sm transition-colors hover:bg-ivory"
              aria-label="الصورة السابقة"
            >
              <ChevronRight size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-bronze/20 bg-white/95 text-bronze shadow-sm transition-colors hover:bg-ivory"
              aria-label="الصورة التالية"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* التسمية تحت الصورة — ليس فوقها */}
          <div className="mt-4 text-center sm:mt-5">
            <h3 className="mb-1 text-base font-extrabold text-charcoal sm:text-lg">
              {current.alt}
            </h3>
            <p className="text-sm text-charcoal-soft/65">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(galleryImages.length).padStart(2, "0")}
            </p>
          </div>

          {/* شبكة مصغرات */}
          <div className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3 lg:grid-cols-12">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "aspect-square overflow-hidden rounded-lg border-2 transition-all",
                  active === index
                    ? "border-bronze ring-2 ring-bronze/20"
                    : "border-transparent opacity-70 hover:opacity-100"
                )}
                aria-label={`عرض ${image.alt}`}
                aria-current={active === index}
              >
                <img
                  src={image.src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="120"
                  height="120"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
            aria-label="إغلاق"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
            aria-label="السابق"
          >
            <ChevronRight size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
            aria-label="التالي"
          >
            <ChevronLeft size={20} />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
