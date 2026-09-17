import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { contactLinks } from "@/config/client";
import { Phone, MessageCircle, Shield, Clock, Award, TrendingUp, Crown, Sparkles, CheckCircle2, Eye, Home, Zap } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { seoData, generateStructuredData } from "@/utils/seo/seoData";

const ShuttersPage = () => {
  const seoInfo = {
    title: "سواتر بمكة المكرمة  | مؤسسة ربوع البلاد",
    description: "تركيب سواتر خصوصية بجودة عالية وأسعار منافسة في مكة المكرمة . تصاميم عصرية، هياكل حديدية متينة، ضمان شامل على جميع الأعمال.",
    keywords: "سواتر بمكة المكرمة , سواتر خصوصية, سواتر منازل, مقاول سواتر مكة المكرمة , تركيب سواتر, سواتر للفلل",
    canonical: "https://muthallat.com/fencing-shutters",
  };

  useSEO({
    ...seoInfo,
    structuredData: generateStructuredData('fencingShutters', seoInfo.title, seoInfo.description),
  });

  const services = [
    {
      title: "سواتر للمنازل",
      description: "سواتر للمنازل بقماش PVC عالي الجودة مقاوم للعوامل الجوية",
      icon: Home,
    },
    {
      title: "سواتر للفلل",
      description: "سواتر للفلل بتصاميم أنيقة وعملية",
      icon: Eye,
    },
    {
      title: "سواتر للاستراحات",
      description: "سواتر للاستراحات بهياكل حديدية متينة",
      icon: Shield,
    },
    {
      title: "سواتر عزل بصري",
      description: "سواتر عزل بصري للخصوصية الكاملة",
      icon: Zap,
    },
    {
      title: "سواتر قماشية",
      description: "سواتر قماشية بألوان وتصاميم متنوعة",
      icon: Award,
    },
    {
      title: "تصميم مخصص",
      description: "تصميم سواتر حسب طلب العميل",
      icon: Sparkles,
    },
  ];

  const detailedServices = [
    {
      title: "سواتر للمنازل",
      description: "نوفر سواتر للمنازل بتصاميم عصرية، تتميز بمقاومتها لأشعة الشمس والأمطار والعوامل الجوية، مع هيكل حديدي قوي يضمن المتانة.",
      image: "/LaserShutters1/1.webp"
    },
    {
      title: "سواتر للفلل",
      description: "نوفر تركيب سواتر للفلل بتصاميم أنيقة وجودة عالية، توفر الخصوصية والأناقة في الوقت نفسه.",
      image: "/LaserShutters1/2.webp"
    },
    {
      title: "سواتر للاستراحات",
      description: "نقدم سواتر للاستراحات بتصاميم عصرية وفاخرة، تجمع بين الجمال والمتانة.",
      image: "/canopies1/4.webp"
    },
    {
      title: "سواتر عزل بصري",
      description: "نوفر تركيب سواتر عزل بصري بهياكل حديدية متينة، تتميز بمقاومتها للعوامل الجوية.",
      image: "/canopies1/5.webp"
    },
  ];

  const features = [
    {
      icon: Award,
      title: "خبرة طويلة",
      description: "أكثر من 20 عامًا في مجال تصميم وتركيب السواتر"
    },
    {
      icon: Shield,
      title: "جودة مضمونة",
      description: "استخدام مواد عالية الجودة تتناسب مع مناخ منطقة مكة المكرمة "
    },
    {
      icon: TrendingUp,
      title: "أسعار تنافسية",
      description: "أفضل الأسعار في السوق مع ضمان الجودة"
    },
    {
      icon: Clock,
      title: "التزام بالمواعيد",
      description: "فريق عمل محترف متخصص في تركيب السواتر"
    },
  ];

  const benefits = [
    "خصوصية كاملة",
    "تصاميم عصرية",
    "حماية من أشعة الشمس",
    "هياكل حديدية متينة",
    "مناسبة للمنازل والفلل",
    "ضمان شامل على جميع الأعمال",
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0A] text-[#F4EFE6]">
      <Header />

      {/* Premium Hero Section */}
      <section
        className="relative pt-40 pb-32 overflow-hidden"
        style={{
          backgroundImage: 'url(/LaserShutters1/1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0A]/97 via-[#1C1712]/92 to-[#0B0B0A]/85"></div>
        
        {/* Premium Effects */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D6B56A]/6 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#1C1712]/15 blur-3xl" />

        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            {/* Elegant Badge */}
            <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-[#D6B56A]/25 bg-[#1C1712]/50 px-6 py-4 backdrop-blur-xl">
              <div className="h-3 w-3 animate-pulse rounded-full bg-[#D6B56A]" />
              <span className="text-sm font-bold text-[#D6B56A] tracking-wide">
                مقاول سواتر مكة المكرمة 
              </span>
              <Crown size={16} className="text-[#D6B56A]" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-[#F4EFE6]">
              سواتر بمكة المكرمة 
              <span className="block text-gradient-luxury mt-4">
                بأعلى معايير الجودة
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#B8AD9A]/80 mb-10 leading-relaxed max-w-3xl">
              تركيب سواتر خصوصية بتصاميم عصرية وجودة عالية للمنازل والفلل 
              والاستراحات في مكة المكرمة  مع الخصوصية الكاملة
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/966541210865"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury"
              >
                <MessageCircle size={22} />
                تواصل عبر واتساب
                <Sparkles size={18} />
              </a>

              <a
                href="tel:+966541210865"
                className="btn-modern"
              >
                <Phone size={22} />
                اتصل الآن
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0A] to-transparent"></div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-[#0B0B0A]">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-[#D6B56A]/25 bg-[#1C1712]/50 px-6 py-4 backdrop-blur-xl">
              <Crown size={18} className="text-[#D6B56A]" />
              <span className="text-sm font-bold text-[#D6B56A] tracking-wide">
                لماذا نحن الخيار الأفضل
              </span>
              <Crown size={18} className="text-[#D6B56A]" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F4EFE6] mb-8">
              مميزات تجعلنا
              <span className="block text-gradient-luxury mt-4">
                الخيار الأفضل
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-[#D6B56A]/20 bg-[#1C1712]/50 p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-[#D6B56A]/40 hover:shadow-[0_24px_60px_rgba(214,181,106,0.18)]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#D6B56A]/20 to-[#B89A55]/10 border border-[#D6B56A]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#D6B56A] group-hover:to-[#B89A55]">
                    <Icon size={32} className="text-[#D6B56A] transition-colors duration-500 group-hover:text-[#0B0B0A]" />
                  </div>
                  <h3 className="text-xl font-black text-[#F4EFE6] mb-3">{feature.title}</h3>
                  <p className="text-sm leading-7 text-[#B8AD9A]/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Services Grid */}
      <section className="py-24 bg-[#1C1712]">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F4EFE6] mb-8">
              خدمات السواتر
              <span className="block text-gradient-luxury mt-4">
                التي نقدمها
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-[#D6B56A]/20 bg-[#0B0B0A]/50 p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-[#D6B56A]/40 hover:shadow-[0_24px_60px_rgba(214,181,106,0.18)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#D6B56A]/20 to-[#B89A55]/10 border border-[#D6B56A]/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#D6B56A] group-hover:to-[#B89A55]">
                    <Icon size={28} className="text-[#D6B56A] transition-colors duration-500 group-hover:text-[#0B0B0A]" />
                  </div>
                  <h3 className="text-xl font-black text-[#F4EFE6] mb-3">{service.title}</h3>
                  <p className="text-sm leading-7 text-[#B8AD9A]/70">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Detailed Services */}
      <section className="py-24 bg-[#0B0B0A]">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F4EFE6] mb-8">
              تفاصيل خدمات السواتر
              <span className="block text-gradient-luxury mt-4">
                بمكة المكرمة 
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-[#D6B56A]/20 bg-[#1C1712]/50 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-[#D6B56A]/40 hover:shadow-[0_24px_60px_rgba(214,181,106,0.18)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} بمكة المكرمة `}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 right-5 left-5">
                    <h3 className="text-lg font-black text-[#F4EFE6]">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-[#B8AD9A]/80">{service.description}</p>
                </div>
                <div className="h-2 w-full bg-gradient-to-r from-[#D6B56A] via-[#D6B56A] to-[#B89A55] transition-all duration-700 group-hover:h-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Benefits Section */}
      <section className="py-24 bg-[#1C1712]">
        <div className="section-container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#F4EFE6] mb-8">
                مميزات السواتر
                <span className="block text-gradient-luxury mt-4">
                  من ربوع البلاد
                </span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D6B56A]/20 border border-[#D6B56A]/30">
                      <CheckCircle2 size={16} className="text-[#D6B56A]" />
                    </div>
                    <span className="text-lg text-[#B8AD9A]/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-[#D6B56A]/20 shadow-2xl">
                <img
                  src="/LaserShutters1/1.webp"
                  alt="سواتر بمكة المكرمة "
                  className="h-[450px] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/80 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 rounded-2xl border border-[#D6B56A]/25 bg-[#0B0B0A]/95 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#D6B56A] to-[#B89A55] shadow-lg">
                    <Award size={28} className="text-[#0B0B0A]" />
                  </div>
                  <div>
                    <div className="text-base font-black text-[#F4EFE6]">
                      ضمان شامل
                    </div>
                    <div className="text-sm text-[#B8AD9A]/70">
                      على جميع الأعمال
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B0B0A] to-[#1C1712]">
        <div className="section-container text-center">
          <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-[#D6B56A]/25 bg-[#1C1712]/50 px-6 py-4 backdrop-blur-xl">
            <Crown size={18} className="text-[#D6B56A]" />
            <span className="text-sm font-bold text-[#D6B56A] tracking-wide">
              ابدأ مشروعك الآن
            </span>
            <Crown size={18} className="text-[#D6B56A]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F4EFE6] mb-8">
            هل تحتاج سواتر لمنزلك؟
          </h2>
          <p className="text-xl text-[#B8AD9A]/80 mb-10 max-w-2xl mx-auto">
            تواصل مع مؤسسة ربوع البلاد للحصول على الحل المناسب لمساحتك واحتياجك
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              className="btn-luxury"
            >
              <MessageCircle size={22} />
              اطلب عرض سعر مجاني
              <Sparkles size={18} />
            </a>
            <a
              href={contactLinks.phone}
              className="btn-modern"
            >
              <Phone size={22} />
              اتصل بنا الآن
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShuttersPage;
