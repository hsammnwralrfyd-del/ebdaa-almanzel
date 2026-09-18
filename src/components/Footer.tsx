import {
  Phone,
  MapPin,
  Award,
  Instagram,
  MapPinned,
  Crown,
  Building2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { client } from "@/config/client";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.94v13.67a2.89 2.89 0 11-2-2.75V9.02a6.84 6.84 0 10-1.08 13.6 6.84 6.84 0 006.84-6.84V8.26a8.77 8.77 0 005.13 1.65V6.02a4.84 4.84 0 01-1.18-.33z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const socialLinks = [
  {
    label: "تيك توك",
    href: "https://vt.tiktok.com/ZSq52qGtk",
    icon: <TikTokIcon />,
  },
  {
    label: "إنستقرام",
    href: "https://www.instagram.com/aq571638694",
    icon: <Instagram size={20} className="shrink-0" />,
  },
  {
    label: "خرائط جوجل",
    href: "https://maps.app.goo.gl/uqDHmFPQSiLbADp96",
    icon: <MapPinned size={20} className="shrink-0" />,
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-bronze/15 bg-charcoal pt-16 pb-8 text-ivory">
      <div className="section-container relative z-10">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-bronze/30 bg-white p-1">
                <img
                  src={`${import.meta.env.BASE_URL}icon1/icon.webp`}
                  alt={client.shortName}
                  className="h-full w-full object-contain"
                  width="48"
                  height="48"
                  decoding="async"
                  loading="lazy"
                />
                <div className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-bronze">
                  <Crown size={10} className="text-charcoal" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-lg font-extrabold text-white sm:text-xl">
                  {client.shortName}
                </h3>
                <div className="flex items-center gap-1.5">
                  <Award size={14} className="shrink-0 text-bronze-light" />
                  <p className="text-xs font-semibold text-bronze-light sm:text-sm">
                    حدادة فاخرة
                  </p>
                </div>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-ivory/70">
              {client.description}
            </p>
            <div className="flex items-start gap-2 text-xs text-ivory/55 sm:text-sm">
              <MapPin size={16} className="mt-0.5 shrink-0 text-bronze-light" />
              <span className="min-w-0 break-words">
                {client.serviceAreas.join(" · ")}
              </span>
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="mb-5 flex items-center gap-2 text-base font-bold text-white">
              <span className="h-1 w-6 shrink-0 rounded-full bg-bronze" />
              روابط سريعة
            </h4>
            <div className="space-y-3">
              {client.navLinks.slice(0, 8).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-ivory/65 transition-colors hover:text-bronze-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="mb-5 flex items-center gap-2 text-base font-bold text-white">
              <span className="h-1 w-6 shrink-0 rounded-full bg-bronze" />
              خدماتنا
            </h4>
            <div className="space-y-3">
              {client.services.slice(0, 6).map((service) => (
                <div
                  key={service.title}
                  className="text-sm text-ivory/65"
                >
                  {service.title}
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="mb-5 flex items-center gap-2 text-base font-bold text-white">
              <span className="h-1 w-6 shrink-0 rounded-full bg-bronze" />
              تواصل معنا
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+966554271816"
                className="group flex items-center gap-3 rounded-xl border border-bronze/20 bg-charcoal-soft p-4 transition-colors hover:border-bronze/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-bronze text-charcoal">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-ivory/50">اتصل بنا الآن</div>
                  <div className="truncate text-sm font-bold text-white dir-ltr sm:text-base">
                    +966 55 427 1816
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/966554271816"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-[#25D366]/25 bg-charcoal-soft p-4 transition-colors hover:border-[#25D366]/45"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white">
                  <WhatsAppIcon />
                </span>
                <div className="min-w-0">
                  <div className="text-xs text-ivory/50">راسلنا عبر واتساب</div>
                  <div className="text-sm font-bold text-white sm:text-base">
                    تواصل فوري
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-3 gap-2 pt-2">
                {[
                  { icon: ShieldCheck, label: "ضمان" },
                  { icon: Zap, label: "سرعة" },
                  { icon: Building2, label: "جودة" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 rounded-lg border border-bronze/15 bg-charcoal-soft p-2.5 text-center"
                  >
                    <Icon size={18} className="shrink-0 text-bronze-light" />
                    <span className="text-xs font-semibold text-ivory/70">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 border-t border-bronze/15 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <p className="text-sm text-ivory/45">تابعنا على وسائل التواصل</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-bronze/20 bg-charcoal-soft text-ivory/60 transition-all hover:-translate-y-0.5 hover:border-bronze hover:text-bronze-light"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-bronze/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-right">
            <p className="text-xs text-ivory/40 sm:text-sm">
              © {new Date().getFullYear()} {client.shortName} — جميع الحقوق
              محفوظة
            </p>
            <a
              href="https://wa.me/966554271816"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ivory/40 transition-colors hover:text-bronze-light sm:text-sm"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
