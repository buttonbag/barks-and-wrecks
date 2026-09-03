import { ServiceCard } from "components/ServiceCard";
import { getServiceItems } from "utils/getServiceItems";

export const ServiceItems = async () => {
  const services = await getServiceItems();
  
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {services.serviceItems.map(service => (
        <ServiceCard key={service.id} content={service} />
      ))}
    </div>
  )
}