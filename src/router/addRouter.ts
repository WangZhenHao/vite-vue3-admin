import * as type from '@api/login/type';
import router from './index';
import routerMap from './routerMap';

function addRouter(list: type.menu[]) {
    for (let item of list) {
        const comp = routerMap[item.path];
        if (comp) {
            router.addRoute('Home', comp);
        }
    }
}

export default addRouter;
