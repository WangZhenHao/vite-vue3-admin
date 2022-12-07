import { ipost, iget } from '@js/axios';
import * as type from './type';

export const getMenuList = function (data: type.getMenuListData) {
  return iget('/data/menuList.json', data);
};
