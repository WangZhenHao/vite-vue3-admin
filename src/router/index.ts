import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@views/home/index.vue';
import Login from '@views/login/index.vue';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import user from '@store/user';

const map = {
    path: '/system/menuList',
    name: 'menuList',
    component: () => import('@views/system/menuList/index.vue'),
};

const routes: RouteRecordRaw[] = [
    //   {
    //     path: '/',
    //     redirect: '/home',
    //   },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [],
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
// router.addRoute('Home', map);

router.beforeEach((to, from, next) => {
    nprogress.start();
    console.log(to);
    const userInfo = user();
    if (to.name === 'Login') {
        if (!userInfo.menuList.length) {
            next();
        } else {
            next({ name: 'Home' });
        }
        return;
    } else if (userInfo.menuList.length) {
        next();
    } else {
        userInfo
            .checkLogin()
            .then(() => {
                next(to.path);
            })
            .catch(() => {
                next({ name: 'Login' });
            });
    }
});

router.afterEach((to) => {
    nprogress.done();
});

export default router;
