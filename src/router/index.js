import {createRouter, createWebHistory} from 'vue-router';

export const routes = [
    {
        path: '/',
        component: () => import('@/views/wellcome/index.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/hello',
        component: () => import('@/views/hello/index.vue')
    },
    {
        path: '/基础语法',
        component:()=>import('@/views/基础语法/index.vue')
    },
    {
        path: '/生命周期',
        component:()=>import('@/views/生命周期/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({left: 0, top: 0}),
    routes
});

export default router;

