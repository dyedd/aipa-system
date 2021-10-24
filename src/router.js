import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: "/",
        component: () => import("./views/Home.vue"),
    },
    {
        path: "/seller",
        component: () => import("./views/SellerHome.vue"),
    },
]
export default createRouter({
    history: createWebHistory(),
    routes,
})
