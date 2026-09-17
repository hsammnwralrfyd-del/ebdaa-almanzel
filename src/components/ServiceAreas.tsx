import { MapPin, Crown } from "lucide-react";

const serviceAreas = [
  "الخبر",
  "الظهران",
  "الدمام",
  "الأحساء",
  "الجبيل",
  "بقيق",
];

export const ServiceAreas = () => {
  return (
    <section
      id="service-areas"
      dir="rtl"
      className="section-padding relative overflow-hidden bg-ivory"
    >
      <div className="bg-pattern-dots absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="section-badge mb-5">
            <Crown size={14} className="shrink-0 text-bronze" />
            <span>مناطق الخدمة</span>
          </div>

          <h2 className="section-title mb-4">
            نخدمكم في المنطقة الشرقية
            <span className="mt-2 block text-gradient-luxury">
              في جميع المدن الرئيسية
            </span>
          </h2>

          <p className="section-desc mx-auto">
            نقدم خدمات المقاولات العامة والمظلات والبرجولات والسواتر وتغطية الممرات،
            بالإضافة إلى ترميم وتشطيب المنازل وتركيب بيوت الشعر الملكية وبناء الملاحق
            والمجالس والقرميد في مدن المنطقة الشرقية بجودة عالية وأسعار تنافسية.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="group premium-card flex items-center justify-center gap-3 p-5 sm:p-6"
              >
                <div className="icon-new !h-10 !w-10 shrink-0">
                  <MapPin size={18} className="shrink-0" />
                </div>
                <span className="text-base font-extrabold text-charcoal sm:text-lg">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
