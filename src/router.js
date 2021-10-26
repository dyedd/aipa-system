import { createRouter, createWebHistory } from "vue-router"
import { sellerRouter } from "./views/seller/seller-router"
const routes = [
    {
        path: "/",
        component: () => import("./views/Home.vue"),
        name: "Root",
    },
    {
        path: "/login",
        component: () => import("./views/Login.vue"),
        name: "Login",
    },
    {
        path: "/admin",
        component: () => import("./views/admin/Index.vue"),
        name: "adminRoot",
    },
    ...sellerRouter,
]
export default createRouter({
    history: createWebHistory(),
    routes,
})
