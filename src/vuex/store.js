import { createStore } from "vuex"
import * as actions from "./actions"
import * as mutations from "./mutations"
import * as getters from "./getters"
const store = createStore({
    state: {
        userInfo: {
            username: "",
            group: "",
            id: 0,
        },
        sellerInfo: {
            id: -1,
            name: "",
            username: "",
        },
        goodsSort: [],
        goodsList: [], // 商品列表
        shoppingCart: [], // 购物车
        newShoppingCart: [],
        marketing: {
            // 营销
            CarouselItems: [], // 轮播图
            activity: [], // 活动
        },
        seckills: {
            // 秒杀
            deadline: {
                hours: 0,
                minute: 0,
                seconds: 0,
            },
            goodsList: [],
        },
        // 新品上架
        newGoodsList: [],
        // 热门商品
        hotGoodsList: [],
        // 收货地址
        address: [],
    },
    getters,
    actions,
    mutations,
})
export default store
