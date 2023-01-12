import * as type from '@api/login/type';
import router from './index';
import routerMap from './routerMap';
import { RouteRecordRaw } from 'vue-router';
// import type { Mapkey } from './routerMap';

function addRouter(list: type.menu[]) {
  for (let item of list) {
    const comp = routerMap[item.path] as RouteRecordRaw;
    if (comp) {
      router.addRoute('Home', comp);
    }
  }
}

export default addRouter;
