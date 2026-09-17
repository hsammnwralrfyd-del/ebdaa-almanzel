import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const PoolCanopiesPage = () => (
  <ServicePageTemplate service={servicesById.poolCanopies} />
);

export default PoolCanopiesPage;
