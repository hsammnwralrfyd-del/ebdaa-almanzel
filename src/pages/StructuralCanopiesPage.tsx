import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const StructuralCanopiesPage = () => (
  <ServicePageTemplate service={servicesById.structuralCanopies} />
);

export default StructuralCanopiesPage;
