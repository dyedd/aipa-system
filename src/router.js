import { createRouter, createWebHistory } from "vue-router"
import { sellerRouter } from "./views/seller/seller-router"
import myOrder from "./components/user/myOrder.vue"
import myAddress from "./components/user/myAddress.vue"
import addAddress from "./components/user/addAddress.vue"
import myShoppingCart from "./components/user/myShoppingCart.vue"
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
    {
        path: "/home",
        component: () => import("./views/User.vue"),
        name: "User",
        children: [
            {
                path: "/",
                name: "HomeIndex",
                component: myOrder,
            },
            {
                path: "myAddress",
                name: "MyAddress",
                component: myAddress,
            },
            {
                path: "addAddress",
                name: "AddAddress",
                component: addAddress,
            },
            {
                path: "myOrder",
                name: "MyOrder",
                component: myOrder,
            },
            {
                path: "myShoppingCart",
                name: "MyShoppingCart",
                component: myShoppingCart,
            },
        ],
    },
    ...sellerRouter,
]
export default createRouter({
    history: createWebHistory(),
    routes,
})
