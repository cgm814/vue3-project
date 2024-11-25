import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',  // 路径
        name: 'Home',  // 名字
        component: () => import('@/views/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router // 导出