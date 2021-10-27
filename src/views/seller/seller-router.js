import ItemDetail from "./ItemDetail.vue"
import SellerHome from "./SellerHome.vue"
import ItemManagement from "./ItemManagement.vue"
import BillManagement from "./BillManagement.vue"
import SellerEntry from "./SellerEntry.vue"
import ItemSearch from "./ItemSearch.vue"
export const SELLER_PATH_PREFIX = "/seller"
export const sellerRouter = [
    {
        path: SELLER_PATH_PREFIX,
        component: () => import("../../views/seller/SellerMain.vue"),
        children: [
            {
                path: "home",
                component: SellerHome,
                name: "SellerHome",
            },
            {
                path: "item-management/search",
                component: ItemSearch,
                name: "ItemSearch",
                props: true,
            },
            {
                path: "item-management/:id",
                component: ItemDetail,
                name: "ItemDetail",
            },
            {
                path: "item-management",
                component: ItemManagement,
                name: "ItemManagement",
            },
            {
                path: "bill-management",
                component: BillManagement,
                name: "BillManagement",
            },
            {
                path: "",
                redirect: { name: "SellerHome" },
            },
        ],
    },
]
