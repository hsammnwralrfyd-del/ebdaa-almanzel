import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const GardenCanopiesPage = () => (
  <ServicePageTemplate service={servicesById.gardenCanopies} />
);

export default GardenCanopiesPage;
