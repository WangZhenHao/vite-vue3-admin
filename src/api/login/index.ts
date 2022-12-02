import { ipost } from '@js/axios';

export function getMenuList(data: MenuList) {
  return ipost('/data/menuList.json', data);
}
