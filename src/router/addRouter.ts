// import * as type from '@api/login/type';
import router from './index';
import routerMap from './routerMap';
import { userLoginIn } from '@api/login';
type menuList = InferArray<
    Awaited<ReturnType<typeof userLoginIn>>['result']['list']
>;

function addRouter(list: menuList[]) {
    for (let item of list) {
        const comp = routerMap[item.path];
        if (comp) {
            router.addRoute('Home', comp);
        }
    }

    console.log(router);
}

export default addRouter;
