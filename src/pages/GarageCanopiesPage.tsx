import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const GarageCanopiesPage = () => (
  <ServicePageTemplate service={servicesById.garageCanopies} />
);

export default GarageCanopiesPage;
