import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const PergolasPage = () => (
  <ServicePageTemplate service={servicesById.pergolas} />
);

export default PergolasPage;
