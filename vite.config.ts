import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import {
  copyFileSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from "fs";

// SEO data for service pages
const serviceSEOData = {
  "structural-canopies": {
    title: "مظلات شد إنشائي الدمام والخبر | إبداع المنزل",
    description:
      "تنفيذ وتركيب مظلات شد إنشائي في الدمام والخبر والمنطقة الشرقية، بتصاميم عملية وعصرية للمواقف والساحات والمشاريع.",
    keywords:
      "مظلات شد إنشائي الدمام, مظلات شد إنشائي الخبر, مظلات شد إنشائي, مظلات الدمام, مظلات الخبر",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/structural-canopies",
  },

  "school-canopies": {
    title: "مظلات مدارس الدمام والخبر | تنفيذ وتركيب | إبداع المنزل",
    description:
      "تنفيذ وتركيب مظلات مدارس في الدمام والخبر والمنطقة الشرقية، لحماية ساحات المدارس والملاعب والمرافق التعليمية من الشمس والعوامل الجوية.",
    keywords:
      "مظلات مدارس الدمام, مظلات مدارس الخبر, مظلات مدارس, تركيب مظلات مدارس, مظلات مدارس المنطقة الشرقية",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/school-canopies",
  },

  "laser-cut-canopies": {
    title: "مظلات قص ليزر الدمام والخبر | تصاميم حديثة | إبداع المنزل",
    description:
      "تنفيذ مظلات قص ليزر في الدمام والخبر والمنطقة الشرقية بتصاميم حديثة ودقيقة للمنازل والمواقف والمنشآت.",
    keywords:
      "مظلات قص ليزر الدمام, مظلات قص ليزر الخبر, مظلات ليزر الدمام, مظلات قص ليزر, مظلات الدمام",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/laser-cut-canopies",
  },

  "arch-canopies": {
    title: "مظلات قوس الدمام والخبر | تركيب مظلات مقوسة | إبداع المنزل",
    description:
      "تنفيذ وتركيب مظلات قوس ومظلات مقوسة في الدمام والخبر والمنطقة الشرقية للمواقف والساحات والمساحات الخارجية.",
    keywords:
      "مظلات قوس الدمام, مظلات قوس الخبر, مظلات مقوسة الدمام, مظلات قوس, مظلات الدمام",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/arch-canopies",
  },

  "garage-canopies": {
    title: "مظلات سيارات الدمام والخبر | مظلات كراج ومواقف | إبداع المنزل",
    description:
      "تنفيذ وتركيب مظلات سيارات في الدمام والخبر والمنطقة الشرقية لحماية السيارات والمواقف من الشمس والعوامل الجوية، للمنازل والفلل والمشاريع.",
    keywords:
      "مظلات سيارات الدمام, مظلات سيارات الخبر, مظلات كراج الدمام, مظلات مواقف السيارات الدمام, مظلات سيارات",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/garage-canopies",
  },

  warehouses: {
    title: "هناجر ومستودعات الدمام والخبر | تنفيذ وتركيب | إبداع المنزل",
    description:
      "تنفيذ وتركيب هناجر ومستودعات في الدمام والخبر والمنطقة الشرقية للمشاريع التجارية والصناعية والمخازن، مع حلول مناسبة للمساحات المختلفة.",
    keywords:
      "هناجر ومستودعات الدمام, هناجر الدمام, مستودعات الدمام, هناجر الخبر, مستودعات الخبر, تركيب هناجر",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/warehouses",
  },

  fencing: {
    title: "سواتر الدمام والخبر | تركيب سواتر للمنازل والفلل | إبداع المنزل",
    description:
      "تنفيذ وتركيب سواتر الدمام والخبر والمنطقة الشرقية للمنازل والفلل والمنشآت، مع حلول للخصوصية والحماية وتصاميم متنوعة.",
    keywords:
      "سواتر الدمام, سواتر الخبر, تركيب سواتر الدمام, سواتر منازل الدمام, سواتر فلل الدمام, سواتر المنطقة الشرقية",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/fencing",
  },

  "roof-insulation": {
    title: "عزل أسطح الدمام والخبر | عزل مائي للأسطح | إبداع المنزل",
    description:
      "تنفيذ عزل أسطح في الدمام والخبر والمنطقة الشرقية للحماية من تسربات المياه والعوامل الجوية، مع حلول مناسبة للأسطح والمباني.",
    keywords:
      "عزل أسطح الدمام, عزل أسطح الخبر, عزل مائي الدمام, عزل الأسطح, عوازل أسطح الدمام, عزل تسربات المياه",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/roof-insulation",
  },

  "water-thermal-insulation": {
    title: "عزل مائي وحراري الدمام والخبر | إبداع المنزل للمقاولات",
    description:
      "تنفيذ العزل المائي والحراري في الدمام والخبر والمنطقة الشرقية لحماية المباني والأسطح من تسربات المياه والحرارة والعوامل الجوية.",
    keywords:
      "عزل مائي وحراري الدمام, عزل مائي الدمام, عزل حراري الدمام, عزل مائي وحراري الخبر, العزل المائي والحراري",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/water-thermal-insulation",
  },

  "cladding-canopies": {
    title: "مظلات كلادينج الدمام والخبر | تنفيذ مظلات كلادينج | إبداع المنزل",
    description:
      "تنفيذ وتركيب مظلات كلادينج في الدمام والخبر والمنطقة الشرقية بتصاميم عصرية للمنازل والمداخل والمواقف والمنشآت.",
    keywords:
      "مظلات كلادينج الدمام, مظلات كلادينج الخبر, تركيب مظلات كلادينج, كلادينج الدمام, مظلات الدمام",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/cladding-canopies",
  },

  "pyramidal-canopies": {
    title: "مظلات هرمية الدمام والخبر | تركيب مظلات هرمية | إبداع المنزل",
    description:
      "تنفيذ وتركيب مظلات هرمية في الدمام والخبر والمنطقة الشرقية للمواقف والساحات والمساحات الخارجية بتصاميم عملية وعصرية.",
    keywords:
      "مظلات هرمية الدمام, مظلات هرمية الخبر, تركيب مظلات هرمية, مظلات هرمية, مظلات سيارات الدمام",
    url: "https://hsammnwralrfyd-del.github.io/ebdaa-almanzel/pyramidal-canopies",
  },

  landscaping: {
    title: "تنسيق حدائق الدمام والخبر | تصميم وتنفيذ حدائق | إبداع المنزل",
    description:
      "تنفيذ وتنسيق حدائق في الدمام والخبر والمنطقة الشرقية، مع تصميم المساحات الخارجية وتنسيق الحدائق للمنازل والفلل والمشاريع.",
    keywords:
      "تنسيق حدائق الدمام, تنسيق حدائق الخبر, تصميم حدائق الدمام, تنفيذ حدائق الدمام, تنسيق حدائق المنطقة الشرقية",
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

              if (!existsSync(routeDir)) {
                mkdirSync(routeDir, { recursive: true });
              }

              let serviceHtml = indexHtml
                .replace(
                  /<title>.*?<\/title>/,
                  `<title>${seo.title}</title>`
                )
                .replace(
                  /<meta name="title" content=".*?">/,
                  `<meta name="title" content="${seo.title}">`
                )
                .replace(
                  /<meta name="description" content=".*?">/,
                  `<meta name="description" content="${seo.description}">`
                )
                .replace(
                  /<meta name="keywords" content=".*?">/,
                  `<meta name="keywords" content="${seo.keywords}">`
                )
                .replace(
                  /<link rel="canonical" href=".*?">/,
                  `<link rel="canonical" href="${seo.url}">`
                )
                .replace(
                  /<meta property="og:url" content=".*?">/,
                  `<meta property="og:url" content="${seo.url}">`
                )
                .replace(
                  /<meta property="og:title" content=".*?">/,
                  `<meta property="og:title" content="${seo.title}">`
                )
                .replace(
                  /<meta property="og:description" content=".*?">/,
                  `<meta property="og:description" content="${seo.description}">`
                )
                .replace(
                  /<meta name="twitter:title" content=".*?">/,
                  `<meta name="twitter:title" content="${seo.title}">`
                )
                .replace(
                  /<meta name="twitter:description" content=".*?">/,
                  `<meta name="twitter:description" content="${seo.description}">`
                );

              const serviceIndexPath = path.resolve(
                routeDir,
                "index.html"
              );

              writeFileSync(serviceIndexPath, serviceHtml, "utf-8");

              console.log(
                `Generated service page: ${route}/index.html`
              );
            }
          } catch (err) {
            console.warn(
              "Could not generate service pages:",
              err
            );
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
          "react-vendor": [
            "react",
            "react-dom",
            "react-router-dom",
          ],

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