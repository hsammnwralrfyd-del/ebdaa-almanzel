import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield, Clock, Award, TrendingUp } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { seoData, generateStructuredData } from "@/utils/seo/seoData";

const CanopiesPage = () => {
  const seoInfo = seoData.canopies;
  useSEO({
    ...seoInfo,
    structuredData: generateStructuredData('canopies', seoInfo.title, seoInfo.description),
  });

  const services = [
    {
      title: "مظلات سيارات حديد",
      description: "مظلات حديدية متينة تقاوم الظروف المناخية القاسية بجودة عالية",
    },
    {
      title: "مظلات سيارات متحركة",
      description: "مظلات تتيح سهولة التحكم في الظل مع آليات تشغيل يدوية أو كهربائية",
    },
    {
      title: "مظلات سيارات مودرن",
      description: "تصميمات عصرية تجمع بين الجمال والعملية باستخدام مواد خفيفة",
    },
    {
      title: "مظلات سيارات داخلية",
      description: "تركيب مظلات داخل الجراجات والمواقف المغلقة لحماية إضافية",
    },
    {
      title: "مظلات سيارات جاهزة",
      description: "مظلات بمقاسات وتصاميم جاهزة للتركيب الفوري والاستخدام السريع",
    },
    {
      title: "استخراج التصاريح",
      description: "خدمة استخراج تصاريح تركيب المظلات من أمانة منطقة مكة المكرمة ",
    },
  ];

  const detailedServices = [
    {
      title: "مظلات سيارات حديد",
      description: "تصنع هذه المظلات من الحديد عالي الجودة لضمان المتانة وطول العمر، كما تتميز بقدرتها على تحمل الظروف المناخية القاسية. تُستخدم في المنازل والفلل والمواقف التجارية.",
      image: "/canopies1/2.webp"
    },
    {
      title: "مظلات سيارات متحركة",
      description: "تتيح المظلات المتحركة سهولة التحكم في الظل وتوفير الحماية عند الحاجة فقط. تتميز بآلية تشغيل سهلة سواء كانت يدوية أو كهربائية.",
        image: "/canopies1/3.webp"
    },
    {
      title: "مظلات سيارات مودرن",
      description: "تصميمات عصرية تجمع بين الجمال والعملية، حيث تُستخدم مواد خفيفة مثل الألومنيوم مع أقمشة مقاومة للأشعة فوق البنفسجية، مما يضفي شكلاً أنيقًا وعصريًا.",
      image: "/canopies1/4.webp"
    },
  ];

  const features = [
    {
      icon: Award,
      title: "خبرة طويلة",
      description: "أكثر من 15 عامًا في مجال تصميم وتركيب المظلات"
    },
    {
      icon: Shield,
      title: "جودة مضمونة",
      description: "استخدام مواد عالية الجودة تتناسب مع المناخ السعودي"
    },
    {
      icon: TrendingUp,
      title: "أسعار تنافسية",
      description: "أفضل الأسعار في السوق مع ضمان الجودة"
    },
    {
      icon: Clock,
      title: "التزام بالمواعيد",
      description: "فريق عمل محترف متخصص في التنفيذ السريع"
    },
  ];

  const canopyTypes = [
    {
      title: "مظلات سيارات حديد",
      description: "تصنع هذه المظلات من الحديد عالي الجودة لضمان المتانة وطول العمر، كما تتميز بقدرتها على تحمل الظروف المناخية القاسية. تُستخدم في المنازل والفلل والمواقف التجارية.",
      price: "150 - 300 ريال/م²",
      features: ["متانة عالية", "تحمل الظروف القاسية", "مناسبة للمواقف التجارية"]
    },
    {
      title: "مظلات سيارات متحركة",
      description: "تتيح المظلات المتحركة سهولة التحكم في الظل وتوفير الحماية عند الحاجة فقط. تتميز بآلية تشغيل سهلة سواء كانت يدوية أو كهربائية.",
      price: "400 - 700 ريال/م²",
      features: ["مرونة في الاستخدام", "آلية تشغيل سهلة", "توفير المساحة"]
    },
    {
      title: "مظلات سيارات مودرن",
      description: "تصميمات عصرية تجمع بين الجمال والعملية، حيث تُستخدم مواد خفيفة مثل الألومنيوم مع أقمشة مقاومة للأشعة فوق البنفسجية، مما يضفي شكلاً أنيقًا وعصريًا.",
      price: "250 - 500 ريال/م²",
      features: ["تصميم عصري", "مواد خفيفة الوزن", "مقاومة للأشعة فوق البنفسجية"]
    },
  ];

  const priceTable = [
    { type: "مظلات سيارات حديد", price: "150 - 300 ريال/م²", description: "حسب سماكة الحديد والتشطيب" },
    { type: "مظلات سيارات متحركة", price: "400 - 700 ريال/م²", description: "تشمل آلية التشغيل" },
    { type: "مظلات سيارات مودرن", price: "250 - 500 ريال/م²", description: "حسب التصميم والخامات" },
    { type: "مظلات سيارات جاهزة", price: "1000 - 3000 ريال", description: "حسب الحجم والنوع" },
    { type: "مظلات سيارات داخلية", price: "200 - 400 ريال/م²", description: "تشمل التركيب في الجراجات" },
  ];

  const whyChooseUs = [
    "خبرة واسعة في تركيب كافة أنواع مظلات السيارات",
    "استخدام خامات عالية الجودة لضمان متانة المظلات",
    "أسعار تنافسية مع ضمان الجودة",
    "سرعة في التنفيذ ومرونة في التخصيص حسب الطلب",
    "خدمة استخراج التصاريح نيابة عن العملاء",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/canopies1/1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white font-bold text-lg">الرائدون في مجال المظلات</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white drop-shadow-lg">
              مظلات سيارات
              <span className="block mt-2" style={{ color: '#d1a347' }}>بمكة المكرمة </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              تركيب جميع أنواع مظلات السيارات بجودة عالية وأقل الأسعار - حلول متكاملة لجميع احتياجاتك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 gap-3 font-bold shadow-2xl hover:scale-105 transition-all duration-300 border-2"
                style={{ backgroundColor: '#d1a347', borderColor: '#d1a347', color: '#fff' }}
                asChild
              >
                <a href="https://wa.me/966541210865" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  تواصل عبر واتساب
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 gap-3 font-bold bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-black shadow-2xl transition-all duration-300"
                asChild
              >
                <a href="tel:0536986956">
                  <Phone className="w-6 h-6" />
                  اتصل الآن
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#d1a347' }}>
              لماذا نحن الخيار الأفضل؟
            </h2>
            <div className="h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: '#d1a347' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-[#d1a347] animate-fade-in-up bg-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(209, 163, 71, 0.1)' }}>
                    <Icon className="w-8 h-8" style={{ color: '#d1a347' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#d1a347' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#d1a347' }}>
              خدماتنا المتخصصة
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم حلولًا متكاملة لجميع أنواع مظلات السيارات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <Card 
                  key={index}
                  className="group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-[#d1a347] animate-fade-in-up overflow-hidden relative bg-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d1a347]/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#d1a347' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#d1a347' }}>
              تفاصيل خدماتنا
            </h2>
            <div className="h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: '#d1a347' }}></div>
          </div>

          <div className="space-y-8">
            {detailedServices.map((service, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up border-2 hover:border-[#d1a347] bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative overflow-hidden group">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="font-bold" style={{ color: '#d1a347' }}>{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 p-8 md:p-12">
                    <h3 className="text-3xl font-bold mb-4" style={{ color: '#d1a347' }}>
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}


      {/* Price Table Section */}
   

      {/* CTA Section */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/canopies1/1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              جاهزون لتركيب مظلتك؟
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مناسب يلبي احتياجاتك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 gap-3 font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: '#d1a347', color: '#fff' }}
                asChild
              >
                <a href="https://wa.me/966541210865" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  تواصل عبر واتساب
                </a>
              </Button>
              
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 gap-3 font-bold bg-white text-black hover:bg-gray-100 shadow-2xl transition-all duration-300"
                asChild
              >
                <a href="tel:0536986956">
                  <Phone className="w-6 h-6" />
                  0536986956
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CanopiesPage;