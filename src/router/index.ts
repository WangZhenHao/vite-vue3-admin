import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@views/home/index.vue'
import Login from '@views/login/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;