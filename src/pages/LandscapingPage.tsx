import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const LandscapingPage = () => (
  <ServicePageTemplate service={servicesById.landscaping} />
);

export default LandscapingPage;
