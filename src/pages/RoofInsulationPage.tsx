import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const RoofInsulationPage = () => (
  <ServicePageTemplate service={servicesById.roofInsulation} />
);

export default RoofInsulationPage;
