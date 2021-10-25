import { createRouter, createWebHistory } from "vue-router"
import { sellerRouter } from "./views/seller/seller-router"
const routes = [
    {
        path: "/",
        component: () => import("./views/Home.vue"),
        name: "Root",
    },
    ...sellerRouter,
]
export default createRouter({
    history: createWebHistory(),
    routes,
})
