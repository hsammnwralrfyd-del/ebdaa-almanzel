import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const LaserCutCanopiesPage = () => (
  <ServicePageTemplate service={servicesById.laserCutCanopies} />
);

export default LaserCutCanopiesPage;
