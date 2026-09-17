import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const ArchCanopiesPage = () => (
  <ServicePageTemplate service={servicesById.archCanopies} />
);

export default ArchCanopiesPage;
