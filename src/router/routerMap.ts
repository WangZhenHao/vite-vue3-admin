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
// declare module 'vue-router' {
//     interface RouteMeta {
//         title?: string;
//     }
// }

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
            KeepAlive: false,
        },
    },
    '/overview': {
        path: '/overview',
        name: 'overview',
        component: () => import('@views/overview/index.vue'),
        meta: {
            title: '概况',
        },
    },
};

export default map;
