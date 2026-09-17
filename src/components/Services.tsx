import { ArrowLeft, CheckCircle2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesList } from "@/config/services";

export const Services = () => {
  return (
    <section
      id="services"
      dir="rtl"
      className="section-padding relative overflow-hidden bg-ivory"
    >
      <div className="bg-pattern-dots absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="section-badge mb-5">
            <Wrench size={14} className="shrink-0 text-bronze" />
            <span>خدماتنا المتكاملة</span>
          </div>

          <h2 className="section-title mb-4">
            خدمات مؤسسة إبداع المنزل
            <span className="mt-2 block text-gradient-luxury">
              للمظلات والسواتر
            </span>
          </h2>

          <p className="section-desc mx-auto">
            نقدم مجموعة متكاملة من خدمات المظلات والسواتر والهناجر والبرجولات
            والكلادينج والشبوك وتسوير المباني في الدمام والخبر والمنطقة الشرقية.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;

            return (
              <Link
                key={service.id}
                to={service.route}
                className={`group block min-w-0 ${isFeatured ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <article className="premium-card flex h-full flex-col overflow-hidden">
                  {/* صورة نظيفة بدون طبقات */}
                  <div
                    className={`overflow-hidden ${
                      isFeatured ? "h-52 sm:h-64" : "h-44 sm:h-48"
                    }`}
                  >
                    <img
                      src={service.cardImage}
                      alt={`${service.title} - مؤسسة إبداع المنزل للمقاولات العامة`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="icon-new !h-10 !w-10 shrink-0">
                          <Icon size={18} className="shrink-0" />
                        </div>
                        <h3 className="text-base font-extrabold leading-snug text-charcoal sm:text-lg">
                          {service.title}
                        </h3>
                      </div>
                      <span className="shrink-0 text-xs font-black text-bronze/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mb-4 flex-1 text-sm leading-7 text-charcoal-soft/80 sm:text-base">
                      {service.introDescription.slice(0, 120)}...
                    </p>

                    <ul className="mb-4 space-y-2">
                      {service.benefits.slice(0, 3).map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs text-charcoal-soft/75 sm:text-sm"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-bronze"
                          />
                          <span className="min-w-0 break-words">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 border-t border-bronze/15 pt-4 text-sm font-bold text-bronze-dark">
                      تفاصيل الخدمة
                      <ArrowLeft
                        size={18}
                        className="shrink-0 transition-transform group-hover:-translate-x-1"
                      />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
