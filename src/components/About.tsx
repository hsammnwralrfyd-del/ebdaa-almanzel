import {
  Award,
  ShieldCheck,
  Zap,
  Users,
  Building2,
  Target,
  Crown,
} from "lucide-react";
import { client } from "@/config/client";

const features = [
  {
    icon: Award,
    title: "جودة معتمدة",
    description:
      "نلتزم بأعلى معايير الجودة في جميع مشاريعنا مع ضمان شامل على جميع الأعمال.",
  },
  {
    icon: ShieldCheck,
    title: "ضمان شامل",
    description:
      "نقدم ضماناً شاملاً على جميع الخدمات والأعمال المنفذة لراحة بال عملائنا.",
  },
  {
    icon: Zap,
    title: "تنفيذ سريع",
    description:
      "نلتزم بالمواعيد المحددة ونضمن التنفيذ السريع والاحترافي للمشاريع.",
  },
  {
    icon: Users,
    title: "فريق متخصص",
    description:
      "نمتلك فريقًا من المهندسين والفنيين المتخصصين في أعمال الحدادة.",
  },
  {
    icon: Building2,
    title: "خبرة واسعة",
    description:
      "أكثر من 20 عاماً من الخبرة في تنفيذ المشاريع المعدنية والهناجر.",
  },
  {
    icon: Target,
    title: "دقة في التنفيذ",
    description:
      "نحرص على الدقة في القياسات والمواصفات الهندسية لضمان الثبات والأمان.",
  },
];

export default function About() {
  return (
    <section id="about" dir="rtl" className="section-padding relative overflow-hidden bg-white">
      <div className="section-container relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="section-badge mb-5">
            <Crown size={14} className="shrink-0 text-bronze" />
            <span>من نحن</span>
          </div>

          <h2 className="section-title mb-4">
            مؤسسة إبداع المنزل
            <span className="mt-2 block text-gradient-luxury">
              للمقاولات العامة
            </span>
          </h2>

          <p className="section-desc mx-auto">{client.description}</p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0 space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-extrabold text-charcoal sm:text-2xl">
                خبرة ومصداقية في مشاريع المقاولات العامة
              </h3>
              <p className="text-sm leading-8 text-charcoal-soft/80 sm:text-base">
                نحن مؤسسة سعودية متخصصة في تصميم وتنفيذ المشاريع المعدنية
                والمقاولات العامة في المنطقة الشرقية. نقدم خدمات متكاملة تشمل المظلات والبرجولات والسواتر وتغطية الممرات، بالإضافة إلى ترميم وتشطيب المنازل وتركيب بيوت الشعر الملكية وبناء الملاحق والمجالس والقرميد. نلتزم بأعلى معايير الجودة في جميع مشاريعنا مع ضمان شامل على الأعمال.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-bold text-bronze-dark">
                مناطق خدمتنا
              </h4>
              <p className="text-sm leading-8 text-charcoal-soft/80 sm:text-base mb-4">
                نخدم العملاء في مدن المنطقة الشرقية:
              </p>
              <ul className="space-y-2.5">
                {[
                  "الدمام",
                  "الخبر",
                  "المنطقة الشرقية",
                  "المملكة العربية السعودية",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-charcoal-soft/85 sm:text-base"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="group premium-card p-5">
                  <div className="icon-new mb-4">
                    <Icon size={22} className="shrink-0" />
                  </div>
                  <h4 className="mb-2 text-base font-extrabold text-charcoal">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-7 text-charcoal-soft/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
