import { ArrowLeft, Building2, MapPin, Calendar, CheckCircle, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { client } from "@/config/client";
import { servicesList, servicesById } from "@/config/services";

// Generate gallery images from service folders
const galleryImages = servicesList.flatMap(service =>
  Array.from(
    { length: service.galleryImageCount },
    (_, index) => `/${service.folder}/${index + 1}.webp`
  )
);

// Map project titles to service IDs for images
const projectServiceMap: Record<string, string> = {
  "مظلات شد إنشائي": "structuralCanopies",
  "مظلات مدارس": "schoolCanopies",
  "مظلات قص ليزر": "laserCutCanopies",
  "مظلات قوس": "archCanopies",
  "مظلات كراج": "garageCanopies",
  "هناجر ومستودعات": "warehouses",
  "سواتر": "fencing",
  "عوازل الأسطح": "roofInsulation",
  "العزل المائي والحراري": "waterThermalInsulation",
  "مظلات كلادينج": "claddingCanopies",
  "مظلات هرمية": "pyramidalCanopies",
  "تنسيق حدائق": "landscaping",
};

export const Projects = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-ivory">
      <div className="section-container relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="section-badge mb-5">
            <Building2 size={14} className="shrink-0 text-bronze" />
            <span>معرض الأعمال</span>
          </div>
          <h2 className="section-title mb-4">
            مشاريعنا
            <span className="mt-2 block text-gradient-luxury">في الدمام والخبر</span>
          </h2>
          <p className="section-desc mx-auto">
            نفخر بتقديم أفضل الحلول الهندسية والتصميمية لمظلات السيارات
            والسواتر والبرجولات والهناجر في الدمام والخبر والمنطقة الشرقية
          </p>
        </div>

        <div className="mb-14 sm:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="section-divider h-px flex-1" />
            <h3 className="shrink-0 text-lg font-bold text-bronze-dark">
              المشاريع المميزة
            </h3>
            <div className="section-divider h-px flex-1" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {client.projects.slice(0, 6).map((project, index) => {
              const serviceId = projectServiceMap[project.title] as keyof typeof servicesById;
              const service = serviceId ? servicesById[serviceId] : null;
              const projectImage = service?.cardImage || `${import.meta.env.BASE_URL}projects1/${(index % 9) + 1}.webp`;

              return (
              <Link
                key={project.title}
                to={project.link}
                className="group premium-card block min-w-0 overflow-hidden"
              >
                {/* صورة نظيفة */}
                <div className="h-52 overflow-hidden sm:h-56">
                  <img
                    src={projectImage}
                    alt={`مشروع ${project.title} - مؤسسة إبداع المنزل للمقاولات العامة`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-bronze/20 bg-ivory px-2.5 py-0.5 text-xs font-semibold text-bronze-dark">
                      <CheckCircle size={11} className="shrink-0" />
                      مشروع منفذ
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-bronze/20 bg-ivory px-2.5 py-0.5 text-xs font-semibold text-charcoal-soft">
                      <MapPin size={11} className="shrink-0 text-bronze" />
                      الدمام والخبر
                    </span>
                  </div>

                  <h3 className="mb-1 text-lg font-extrabold text-charcoal sm:text-xl">
                    {project.title}
                  </h3>
                  <div className="mb-3 flex items-center gap-1.5 text-xs text-charcoal-soft/60">
                    <Calendar size={12} className="shrink-0" />
                    تم التنفيذ
                  </div>

                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-charcoal-soft/75">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-bronze/10 px-3 py-0.5 text-xs font-semibold text-bronze-dark">
                      جودة عالية
                    </span>
                    <span className="rounded-full bg-bronze/10 px-3 py-0.5 text-xs font-semibold text-bronze-dark">
                      ضمان شامل
                    </span>
                  </div>

                  <div className="flex items-center gap-2 border-t border-bronze/10 pt-4 text-sm font-bold text-bronze-dark">
                    عرض التفاصيل
                    <ArrowLeft
                      size={16}
                      className="shrink-0 transition-transform group-hover:-translate-x-1"
                    />
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </div>

        <div className="mb-14 sm:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="section-divider h-px flex-1" />
            <h3 className="flex shrink-0 items-center gap-2 text-lg font-bold text-bronze-dark">
              <LayoutGrid size={18} className="shrink-0" />
              معرض الصور
            </h3>
            <div className="section-divider h-px flex-1" />
          </div>

          {/* شبكة صور نظيفة بدون طبقات hover */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
            {galleryImages.map((image, index) => {
              // Find which service this image belongs to
              const serviceIndex = Math.floor(index / 4);
              const service = servicesList[serviceIndex];
              const altText = service ? `${service.title} - مؤسسة إبداع المنزل للمقاولات العامة` : `صورة مشروع ${index + 1} - مؤسسة إبداع المنزل للمقاولات العامة`;

              return (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-bronze/12 bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={altText}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                  />
                </div>
              </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <a href="#contact" className="btn-luxury w-full sm:w-auto">
              استشر مشروعك
              <ArrowLeft size={18} className="shrink-0" />
            </a>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal-soft/70">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="shrink-0 text-bronze" />
                استشارة مجانية
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="shrink-0 text-bronze" />
                ضمان الجودة
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


