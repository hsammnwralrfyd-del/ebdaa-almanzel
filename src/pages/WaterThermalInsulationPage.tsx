import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const WaterThermalInsulationPage = () => (
  <ServicePageTemplate service={servicesById.waterThermalInsulation} />
);

export default WaterThermalInsulationPage;
