// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state, data) => {
    state.userInfo = data
}
// 设置商品分类
export const SET_GOODS_SORT = (state, data) => {
    state.goodsSort = data
}
// 添加购物车
export const ADD_SHOPPING_CART = (state, data) => {
    const item = {
        goods_id: data.goods_id,
        count: data.count,
        img: data.package.img,
        package: data.package.intro,
        price: data.package.price,
        title: data.title,
    }
    state.shoppingCart.push(item)
    state.newShoppingCart = data
}
// 设置购物车信息
export const SET_SHOPPING_CART = (state, data) => {
    state.shoppingCart = data
}
// 设置收获地址
export const SET_USER_ADDRESS = (state, data) => {
    state.address = data
}
// 设置轮播(营销)图
export const SET_CAROUSELITEMS_INFO = (state, { carouselItems, activity }) => {
    state.marketing.CarouselItems = carouselItems
    state.marketing.activity = activity
}
// 设置秒杀
export const SET_SECKILLS_INFO = (state, seckills) => {
    state.seckills.goodsList = seckills[0]
    state.seckills.deadline = seckills[1]
}
// 设置新品上架
export const SET_NEW_GOODS = (state, data) => {
    state.newGoodsList = data
}
// 设置热门商品
export const SET_HOT_INFO = (state, data) => {
    state.hotGoodsList = data
}
// 添加收获地址
export const ADD_USER_ADDRESS = (state, data) => {
    state.address = [...data, ...state.address]
}
