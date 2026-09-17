import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { contactLinks } from "@/config/client";

const navItems = [
  { label: "الرئيسية", hash: "#home" },
  { label: "خدماتنا", hash: "#services" },
  { label: "أعمالنا", hash: "#portfolio" },
  { label: "من نحن", hash: "#about" },
  { label: "تواصل معنا", hash: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToHash = (hash: string) => {
    if (hash === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(hash);
    if (!element) return;
    const offset = element.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    event.preventDefault();
    setOpen(false);

    if (hash === "#home") {
      if (isHome) {
        navigate("/", { replace: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (isHome) {
      window.history.replaceState(null, "", hash);
      scrollToHash(hash);
    } else {
      navigate(`/${hash}`);
    }
  };

  useEffect(() => {
    if (!isHome || !location.hash) return;
    const timer = setTimeout(() => scrollToHash(location.hash), 200);
    return () => clearTimeout(timer);
  }, [isHome, location.hash]);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    if (isHome) {
      navigate("/", { replace: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header
      dir="rtl"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 -z-10 h-full transition-all duration-300 ${
          scrolled
            ? "border-b border-bronze/15 bg-white/98 shadow-[0_2px_12px_rgba(28,26,23,0.04)] backdrop-blur-xl"
            : "bg-white/90 backdrop-blur-md"
        }`}
      />

      <div className="section-container">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - RIGHT side in RTL */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="group relative flex shrink-0 items-center"
            aria-label="العودة إلى الصفحة الرئيسية"
          >
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-bronze/20 bg-white p-1.5 shadow-sm transition-all duration-300 group-hover:border-bronze/40 group-hover:shadow-md">
              <img
                src="/icon1/icon.webp"
                alt="مؤسسة إبداع المنزل للمقاولات العامة - مظلات وسواتر هناجر عزل تنسيق حدائق"
                className="h-full w-full object-contain"
                width="48"
                height="48"
                decoding="async"
              />
            </div>
          </Link>

          {/* Navigation - CENTER */}
          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = isHome && location.hash === item.hash;
                return (
                  <a
                    key={item.hash}
                    href={isHome ? item.hash : `/${item.hash}`}
                    onClick={(e) => handleNavigation(e, item.hash)}
                    className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-bronze-dark"
                        : "text-charcoal hover:text-bronze-dark"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-full bg-bronze rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* CTA Buttons - LEFT side in RTL */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={contactLinks.phone}
              className="flex h-10 items-center gap-2 rounded-md border border-bronze/20 bg-white px-4 text-sm font-semibold text-charcoal transition-all duration-200 hover:border-bronze/40 hover:bg-ivory/50 hover:text-bronze-dark"
            >
              <Phone size={16} className="shrink-0 text-bronze" />
              <span>اتصل الآن</span>
            </a>
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center gap-2 rounded-md bg-bronze px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-bronze-dark hover:shadow-md"
            >
              <MessageCircle size={16} className="shrink-0" />
              <span>واتساب</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-bronze/20 bg-white text-charcoal transition-colors hover:border-bronze/40 hover:bg-ivory/50 lg:hidden"
          >
            {open ? <X size={20} className="text-bronze" /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-[64px] z-40 bg-charcoal/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-x-0 top-[64px] z-50 max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-bronze/10 bg-white shadow-lg transition-all duration-300 lg:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="section-container py-6">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = isHome && location.hash === item.hash;
              return (
                <a
                  key={item.hash}
                  href={isHome ? item.hash : `/${item.hash}`}
                  onClick={(e) => handleNavigation(e, item.hash)}
                  className={`block py-3 px-4 text-base font-semibold transition-colors ${
                    isActive
                      ? "text-bronze-dark bg-bronze/5"
                      : "text-charcoal hover:text-bronze-dark hover:bg-ivory/50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="mt-6 space-y-3">
            <a
              href={contactLinks.phone}
              className="flex h-12 items-center justify-center gap-3 rounded-lg border border-bronze/20 bg-white text-sm font-semibold text-charcoal transition-all hover:border-bronze/40 hover:bg-ivory/50"
            >
              <Phone size={18} className="text-bronze" />
              <span>اتصل الآن</span>
            </a>
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-3 rounded-lg bg-bronze text-sm font-semibold text-white shadow-sm transition-all hover:bg-bronze-dark hover:shadow-md"
            >
              <MessageCircle size={18} />
              <span>واتساب</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
