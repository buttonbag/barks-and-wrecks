import { v4 as uuid } from "uuid";

export const mapServiceItems = (serviceItems) => {
  
  return serviceItems.map(s=>({
    id: uuid(),
    icon: s.icon,
    label: s.label,
    description: s.description,
    price: s.price
  }))
};