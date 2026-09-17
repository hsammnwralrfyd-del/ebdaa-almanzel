import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const WarehousesPage = () => (
  <ServicePageTemplate service={servicesById.warehouses} />
);

export default WarehousesPage;
