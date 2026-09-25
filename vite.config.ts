import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";

// SEO data for service pages (matches src/utils/seo/seoData.ts)
const serviceSEOData = {
  "structural-canopies": {
    title: "مظلات شد إنشائي في المنطقة الشرقية | إبداع المنزل",
    description: "تنفيذ مظلات شد إنشائي بتصاميم عصرية ومتانة عالية في الدمام والخبر والمنطقة الشرقية.",
    keywords: "مظلات شد إنشائي, مظلات الدمام, مظلات الخبر, مظلات المنطقة الشرقية",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/structural-canopies",
  },
  "school-canopies": {
    title: "مظلات مدارس في المنطقة الشرقية | إبداع المنزل",
    description: "تنفيذ مظلات مدارس ومرافق تعليمية بمواصفات مناسبة للحماية من الشمس والعوامل الجوية في المنطقة الشرقية.",
    keywords: "مظلات مدارس, مظلات مدارس الدمام, مظلات مدارس الخبر, مظلات المنطقة الشرقية",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/school-canopies",
  },
  "laser-cut-canopies": {
    title: "مظلات قص ليزر في المنطقة الشرقية | إبداع المنزل",
    description: "مظلات قص ليزر بتصاميم حديثة ودقيقة للمنازل والمواقف والمنشآت في الدمام والخبر والمنطقة الشرقية.",
    keywords: "مظلات قص ليزر, مظلات ليزر, مظلات الدمام, مظلات الخبر",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/laser-cut-canopies",
  },
  "arch-canopies": {
    title: "مظلات قوس في المنطقة الشرقية | إبداع المنزل",
    description: "تنفيذ مظلات قوس بتصاميم أنيقة للمواقف والمساحات الخارجية في الدمام والخبر والمنطقة الشرقية.",
    keywords: "مظلات قوس, مظلات مقوسة, مظلات الدمام, مظلات الخبر",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/arch-canopies",
  },
  "garage-canopies": {
    title: "مظلات كراج ومواقف سيارات في المنطقة الشرقية | إبداع المنزل",
    description: "تنفيذ مظلات كراج ومواقف سيارات للحماية من الشمس والعوامل الجوية في الدمام والخبر والمنطقة الشرقية.",
    keywords: "مظلات كراج, مظلات مواقف, مظلات سيارات, مظلات الدمام, مظلات الخبر",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/garage-canopies",
  },
  "warehouses": {
    title: "هناجر ومستودعات في المنطقة الشرقية | إبداع المنزل",
    description: "تنفيذ هناجر ومستودعات للمشاريع المختلفة في الدمام والخبر والمنطقة الشرقية.",
    keywords: "هناجر, مستودعات, هناجر الدمام, هناجر الخبر, مستودعات المنطقة الشرقية",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/warehouses",
  },
  "fencing": {
    title: "سواتر في المنطقة الشرقية | سواتر الدمام والخبر",
    description: "تنفيذ سواتر للمنازل والفلل والمنشآت في الدمام والخبر والمنطقة الشرقية.",
    keywords: "سواتر, سواتر الدمام, سواتر الخبر, سواتر المنطقة الشرقية, سواتر خصوصية",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/fencing",
  },
  "roof-insulation": {
    title: "عوازل الأسطح في المنطقة الشرقية | إبداع المنزل",
    description: "تنفيذ أعمال عزل الأسطح للحماية من تسربات المياه والعوامل الجوية في الدمام والخبر والمنطقة الشرقية.",
    keywords: "عوازل الأسطح, عزل الأسطح, عزل مائي, عزل الدمام, عزل الخبر",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/roof-insulation",
  },
  "water-thermal-insulation": {
    title: "العزل المائي والحراري في المنطقة الشرقية | إبداع المنزل",
    description: "تنفيذ أعمال العزل المائي والحراري للمباني والمنشآت في الدمام والخبر والمنطقة الشرقية.",
    keywords: "العزل المائي والحراري, عزل مائي, عزل حراري, عزل الدمام, عزل الخبر",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/water-thermal-insulation",
  },
  "cladding-canopies": {
    title: "مظلات كلادينج في المنطقة الشرقية | إبداع المنزل",
    description: "تنفيذ مظلات كلادينج بتصاميم عصرية للمنازل والمنشآت في الدمام والخبر والمنطقة الشرقية.",
    keywords: "مظلات كلادينج, كلادينج, مظلات الدمام, مظلات الخبر, كلادينج المنطقة الشرقية",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/cladding-canopies",
  },
  "pyramidal-canopies": {
    title: "مظلات هرمية في المنطقة الشرقية | إبداع المنزل",
    description: "تنفيذ مظلات هرمية بتصاميم عملية وعصرية للمواقف والمساحات الخارجية في الدمام والخبر والمنطقة الشرقية.",
    keywords: "مظلات هرمية, مظلات هرمية الدمام, مظلات هرمية الخبر, مظلات سيارات",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/pyramidal-canopies",
  },
  "landscaping": {
    title: "تنسيق حدائق في المنطقة الشرقية | إبداع المنزل",
    description: "تنفيذ أعمال تنسيق حدائق وتصميم المساحات الخارجية في الدمام والخبر والمنطقة الشرقية.",
    keywords: "تنسيق حدائق, تنسيق حدائق الدمام, تنسيق حدائق الخبر, تصميم حدائق, حدائق المنطقة الشرقية",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/landscaping",
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/ebdaa-almanzel/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Copy server config files to dist after build
    {
      name: "copy-server-config",
      closeBundle() {
        if (mode === "production") {
          try {
            copyFileSync("public/.htaccess", "dist/.htaccess");
            copyFileSync("public/web.config", "dist/web.config");
            copyFileSync("public/404.html", "dist/404.html");
          } catch (err) {
            console.warn("Could not copy server config files:", err);
          }
        }
      },
    },
    // Generate static HTML files for service pages
    {
      name: "generate-service-pages",
      closeBundle() {
        if (mode === "production") {
          try {
            const indexPath = path.resolve(__dirname, "dist/index.html");
            const indexHtml = readFileSync(indexPath, "utf-8");

            for (const [route, seo] of Object.entries(serviceSEOData)) {
              const routeDir = path.resolve(__dirname, `dist/${route}`);
              
              // Ensure directory exists
              if (!existsSync(routeDir)) {
                mkdirSync(routeDir, { recursive: true });
              }

              // Replace SEO tags in HTML
              let serviceHtml = indexHtml
                .replace(/<title>.*?<\/title>/, `<title>${seo.title}</title>`)
                .replace(/<meta name="title" content=".*?">/, `<meta name="title" content="${seo.title}">`)
                .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${seo.description}">`)
                .replace(/<meta name="keywords" content=".*?">/, `<meta name="keywords" content="${seo.keywords}">`)
                .replace(/<link rel="canonical" href=".*?">/, `<link rel="canonical" href="${seo.url}">`)
                .replace(/<meta property="og:url" content=".*?">/, `<meta property="og:url" content="${seo.url}">`)
                .replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${seo.title}">`)
                .replace(/<meta property="og:description" content=".*?">/, `<meta property="og:description" content="${seo.description}">`)
                .replace(/<meta name="twitter:title" content=".*?">/, `<meta name="twitter:title" content="${seo.title}">`)
                .replace(/<meta name="twitter:description" content=".*?">/, `<meta name="twitter:description" content="${seo.description}">`);

              const serviceIndexPath = path.resolve(routeDir, "index.html");
              writeFileSync(serviceIndexPath, serviceHtml, "utf-8");
              console.log(`Generated service page: ${route}/index.html`);
            }
          } catch (err) {
            console.warn("Could not generate service pages:", err);
          }
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    minify: mode === "production" ? "esbuild" : false,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-accordion",
          ],
          "query-vendor": ["@tanstack/react-query"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
