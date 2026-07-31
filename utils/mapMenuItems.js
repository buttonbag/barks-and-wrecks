import {v4 as uuid} from 'uuid';

export const mapMenuItems = (menuItems) => {
  return menuItems.map(menuItem => ({
    id: uuid(),
    destination: menuItem.menuItem.destination.uri,
    label: menuItem.menuItem.label,
    subMenuItems: (menuItem.items || []).map(subItem => ({
      id: uuid(),
      destination: subItem.destination.uri,
      label: subItem.label,
    }))
  }));
}