// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state, data) => {
    state.userInfo = data
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
