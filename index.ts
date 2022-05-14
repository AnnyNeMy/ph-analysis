import { createWebHistory, createRouter } from "vue-router";

const routes = 
[
    {
        path: "/OneOneMethod",
        name: "OneOneMethod",
        component: () => import('@/components/OneOneMethod.vue')
    },
    {
        path: "/OneManyMethod",
        name: "OneManyMethod",
        component: () => import('@/components/OneManyMethod.vue')
    }
    ,
    {
        path: "/DataBase",
        name: "DataBase",
        component: () => import('@/components/common/DataBase.vue')
    },
    {
        path: "/Dividends",
        name: "Dividends",
        component: () => import('@/components/common/Dividends.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;





