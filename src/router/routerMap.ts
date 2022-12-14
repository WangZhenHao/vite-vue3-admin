// interface Compoent {
//   path: string;
//   name: string;
//   component: Function;
//   mate?: Object;
// }
import { RouteRecordRaw } from 'vue-router';
export interface Mapkey {
  [key: string]: RouteRecordRaw;
}

const map: Mapkey = {
  '/system/menuList': {
    path: '/system/menuList',
    name: 'menuList',
    component: () => import('@views/system/menuList/index.vue'),
    meta: {
      title: '菜单列表',
    },
  },
  '/system/roleList': {
    path: '/system/roleList',
    name: 'roleList',
    component: () => import('@views/system/roleList/index.vue'),
    meta: {
      title: '角色列表',
    },
  },
};

export default map;
