import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FloatingButtons from "./components/FloatingButtons";

// ===============================
// الصفحة الرئيسية
// ===============================
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// ===============================
// خدمات إبداع المنزل - 12 خدمة
// ===============================

// 1 - مظلات شد إنشائي
const StructuralCanopiesPage = lazy(
  () => import("./pages/StructuralCanopiesPage")
);

// 2 - مظلات مدارس
const SchoolCanopiesPage = lazy(
  () => import("./pages/SchoolCanopiesPage")
);

// 3 - مظلات قص ليزر
const LaserCutCanopiesPage = lazy(
  () => import("./pages/LaserCutCanopiesPage")
);

// 4 - مظلات قوس
const ArchCanopiesPage = lazy(
  () => import("./pages/ArchCanopiesPage")
);

// 5 - مظلات كراج
const GarageCanopiesPage = lazy(
  () => import("./pages/GarageCanopiesPage")
);

// 6 - هناجر ومستودعات
const WarehousesPage = lazy(
  () => import("./pages/WarehousesPage")
);

// 7 - سواتر
const FencingPage = lazy(
  () => import("./pages/FencingPage")
);

// 8 - عوازل الأسطح
const RoofInsulationPage = lazy(
  () => import("./pages/RoofInsulationPage")
);

// 9 - العزل المائي والحراري
const WaterThermalInsulationPage = lazy(
  () => import("./pages/WaterThermalInsulationPage")
);

// 10 - مظلات كلادينج
const CladdingCanopiesPage = lazy(
  () => import("./pages/CladdingCanopiesPage")
);

// 11 - مظلات هرمية
const PyramidalCanopiesPage = lazy(
  () => import("./pages/PyramidalCanopiesPage")
);

// 12 - تنسيق حدائق
const LandscapingPage = lazy(
  () => import("./pages/LandscapingPage")
);

// ===============================
// React Query
// ===============================

const queryClient = new QueryClient();

// ===============================
// شاشة التحميل
// ===============================

const LoadingFallback = () => (
  <div
    dir="rtl"
    className="flex min-h-screen items-center justify-center bg-background"
  >
    <div className="text-center">
      <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />

      <p className="text-lg text-muted-foreground">
        جاري التحميل...
      </p>
    </div>
  </div>
);

// ===============================
// التطبيق
// ===============================

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter basename="/ebdaa-almanzel/">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>

            {/* =========================
                الصفحة الرئيسية
            ========================= */}

            <Route
              path="/"
              element={<Index />}
            />

            {/* =========================
                خدمات إبداع المنزل - 12 خدمة
            ========================= */}

            {/* 1 - مظلات شد إنشائي */}
            <Route
              path="/structural-canopies"
              element={<StructuralCanopiesPage />}
            />

            {/* 2 - مظلات مدارس */}
            <Route
              path="/school-canopies"
              element={<SchoolCanopiesPage />}
            />

            {/* 3 - مظلات قص ليزر */}
            <Route
              path="/laser-cut-canopies"
              element={<LaserCutCanopiesPage />}
            />

            {/* 4 - مظلات قوس */}
            <Route
              path="/arch-canopies"
              element={<ArchCanopiesPage />}
            />

            {/* 5 - مظلات كراج */}
            <Route
              path="/garage-canopies"
              element={<GarageCanopiesPage />}
            />

            {/* 6 - هناجر ومستودعات */}
            <Route
              path="/warehouses"
              element={<WarehousesPage />}
            />

            {/* 7 - سواتر */}
            <Route
              path="/fencing"
              element={<FencingPage />}
            />

            {/* 8 - عوازل الأسطح */}
            <Route
              path="/roof-insulation"
              element={<RoofInsulationPage />}
            />

            {/* 9 - العزل المائي والحراري */}
            <Route
              path="/water-thermal-insulation"
              element={<WaterThermalInsulationPage />}
            />

            {/* 10 - مظلات كلادينج */}
            <Route
              path="/cladding-canopies"
              element={<CladdingCanopiesPage />}
            />

            {/* 11 - مظلات هرمية */}
            <Route
              path="/pyramidal-canopies"
              element={<PyramidalCanopiesPage />}
            />

            {/* 12 - تنسيق حدائق */}
            <Route
              path="/landscaping"
              element={<LandscapingPage />}
            />

            {/* =========================
                أي رابط غير موجود
            ========================= */}

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>
        </Suspense>

        {/* أزرار الاتصال العائمة */}
        <FloatingButtons />

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
