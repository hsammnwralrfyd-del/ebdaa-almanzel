import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "ما هي خدمات المقاولات العامة التي تقدمونها؟",
    answer:
      "نقدم خدمات المظلات والسواتر والهناجر والمستودعات والعزل المائي والحراري وتنسيق الحدائق في المنطقة الشرقية.",
  },
  {
    question: "ما المدن التي تخدمونها في المنطقة الشرقية؟",
    answer:
      "نخدم العملاء في الدمام والخبر والمنطقة الشرقية والمملكة العربية السعودية.",
  },
  {
    question: "هل تقدمون خدمات العزل المائي والحراري؟",
    answer:
      "نعم، نقدم خدمات العزل المائي والحراري بأعلى جودة وأسعار تنافسية.",
  },
  {
    question: "هل تقدمون خدمات هناجر ومستودعات؟",
    answer:
      "نعم، نقدم خدمات هناجر ومستودعات بتصاميم عصرية تناسب احتياجات العملاء.",
  },
  {
    question: "هل تقدمون ضمان على الأعمال؟",
    answer:
      "نعم، نقدم ضماناً شاملاً على جميع الأعمال المنفذة وجودة المواد المستخدمة لراحة بال عملائنا.",
  },
  {
    question: "كيف يمكنني التواصل معكم؟",
    answer:
      "يمكنك التواصل معنا عبر واتساب على الرقم 966554271816 أو الاتصال مباشرة على 571638694.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" dir="rtl" className="section-padding relative overflow-hidden bg-ivory">
      <div className="section-container relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="section-badge mb-5">
            <HelpCircle size={14} className="shrink-0 text-bronze" />
            <span>الأسئلة الشائعة</span>
          </div>

          <h2 className="section-title mb-4">
            أهم الاستفسارات
            <span className="mt-2 block text-gradient-luxury">عن خدماتنا</span>
          </h2>

          <p className="section-desc mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدمات المقاولات العامة
            في المنطقة الشرقية
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="overflow-hidden rounded-xl border border-bronze/15 bg-white px-4 shadow-sm data-[state=open]:border-bronze/30 sm:px-5"
              >
                <AccordionTrigger className="py-4 text-right text-sm font-bold text-charcoal hover:no-underline sm:text-base [&>svg]:shrink-0 [&>svg]:text-bronze">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-8 text-charcoal-soft/75 sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
