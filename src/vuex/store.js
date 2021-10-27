import { createStore } from "vuex"
import * as actions from "./actions"
import * as mutations from "./mutations"
import * as getters from "./getters"
const store = createStore({
    state: {
        userInfo: {
            username: "",
            group: "",
        },
        goodsList: [], // 商品列表
        shoppingCart: [], // 购物车
        newShoppingCart: [],
    },
    getters,
    actions,
    mutations,
})
export default store
