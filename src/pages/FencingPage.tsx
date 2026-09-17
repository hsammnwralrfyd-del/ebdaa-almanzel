import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const FencingPage = () => (
  <ServicePageTemplate service={servicesById.fencing} />
);

export default FencingPage;
