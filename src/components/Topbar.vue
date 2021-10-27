<script setup>
import { ref } from "@vue/reactivity"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
const store = useStore()
const router = useRouter()
const userInfo = store.state.userInfo
store.dispatch("loadShoppingCart")
const shoppingCart = store.state.shoppingCart
let cartShow = ref(false)
const handleShow = () => {
    cartShow.value = !cartShow.value
}
const myInfo = () => {
    router.push("/home/myOrder")
}
const signOutFun = () => {
    store.dispatch("signOut")
    router.push("/")
}
const goToPay = () => {
    router.push("/order")
}
</script>
<template>
    <el-container>
        <el-header class="topbar">
            <el-row justify="space-between">
                <el-col :span="6">
                    <p class="welcome-mes">欢迎来到利民宝 ！</p>
                </el-col>
                <el-col :span="4" class="right-info">
                    <template v-if="!userInfo.username">
                        <el-button type="text">
                            <Icon
                                name="User"
                                color="#fff"
                                size="1.6rem"
                                align="-.3rem"
                            />
                            <span class="right-info-item">
                                <router-link to="/login">登录</router-link>
                            </span>
                        </el-button>
                        <el-button type="text">
                            <span class="right-info-item">
                                <router-link to="/login">注册</router-link>
                            </span>
                        </el-button>
                    </template>
                    <template v-else>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                <el-avatar
                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                ></el-avatar>
                                <span class="username">{{
                                    userInfo.username
                                }}</span>
                                <i
                                    class="el-icon-arrow-down el-icon--right"
                                ></i>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>
                                        <div class="my-info" @click="myInfo">
                                            <Icon name="home" />
                                            <p>我的主页</p>
                                        </div>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <div
                                            class="my-info"
                                            @click="signOutFun"
                                        >
                                            <Icon name="tuichu" />
                                            <p>退出登录</p>
                                        </div>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </template>
                    <el-button type="text" @mouseenter="handleShow">
                        <Icon
                            name="cart"
                            color="#fff"
                            size="1.6rem"
                            style="margin-left: 0.25rem"
                        />
                        <span class="right-info-item">购物车 (0)</span>
                    </el-button>
                </el-col>
            </el-row>
            <template v-if="cartShow">
                <div class="cartpop" @mouseleave="handleShow">
                    <div
                        class="shopping-cart-null"
                        v-show="shoppingCart.length <= 0"
                    >
                        <Icon name="wukong" class="cart-null-icon"></Icon>
                        <span>你的购物车没有空空哦</span>
                        <span>赶快去添加商品吧~</span>
                    </div>
                    <div
                        class="shopping-cart-list"
                        v-show="shoppingCart.length > 0"
                    >
                        <div
                            class="shopping-cart-box"
                            v-for="(item, index) in shoppingCart"
                            :key="index"
                        >
                            <div class="shopping-cart-img">
                                <img :src="item.img" />
                            </div>
                            <div class="shopping-cart-info">
                                <div class="shopping-cart-title">
                                    <p>{{ item.title.substring(0, 22) }}...</p>
                                </div>
                                <div class="shopping-cart-detail">
                                    <p>
                                        套餐:
                                        <span class="shopping-cart-text">
                                            {{ item.package }}
                                        </span>
                                        数量:
                                        <span class="shopping-cart-text">
                                            {{ item.count }}
                                        </span>
                                        价钱:
                                        <span class="shopping-cart-text">
                                            {{ item.price }}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="go-to-buy">
                            <el-button type="warning" @click="goToPay"
                                >去结账</el-button
                            >
                        </div>
                    </div>
                </div>
            </template>
        </el-header>
    </el-container>
</template>
<style lang="scss" scoped>
.el-avatar {
    width: 3rem;
    height: 3rem;
    line-height: 3.6rem;
    vertical-align: middle;
}
.my-info {
    text-align: center;
}
.topbar {
    position: relative;
}
.el-container {
    width: 100%;
    background-color: $normal-text-color;
}
.el-header {
    height: 3.6rem;
    line-height: 3.6rem;
    width: 120rem;
    margin: 0 auto;
    padding: 0 !important;
}
.welcome-mes {
    font-size: 1.2rem;
    color: $fg-color;
}
.right-info {
    line-height: 3.6rem;
    height: 3.6rem;
    .username {
        color: #999999;
        margin-left: 0.5rem;
    }
}
.right-info-item {
    color: $fg-color;
    a {
        color: $fg-color;
        text-decoration: none;
    }
    border-right: 0.1rem solid $fg-color;
    padding: 0 1rem;
}
.right-info > button:last-child {
    .right-info-item {
        padding: 0 0.5rem !important;
        border: none;
    }
}
.el-button {
    min-height: 3.6rem !important;
    padding: 0;
}
.el-button + .el-button {
    margin-left: 0 !important;
}
.shopping-cart-list {
    padding: 3px 15px;
}
.shopping-cart-box {
    margin: 8px 0px;
    margin-top: 15px;
    padding-bottom: 15px;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px #ccc dotted;
}
.shopping-cart-box:first-child {
    margin-top: 8px;
}
.shopping-cart-img {
    margin-right: 15px;
    width: 40px;
    height: 40px;
}
.shopping-cart-img img {
    width: 100%;
}
.shopping-cart-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    width: 200px;
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    color: #999999;
}
.shopping-cart-detail {
    color: #999999;
}
.shopping-cart-text {
    color: #ccc;
}
.go-to-buy {
    display: flex;
    justify-content: flex-end;
}
.shopping-cart-null {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.cart-null-icon {
    font-size: 38px;
    margin-bottom: 15px;
}
.shopping-cart-null span {
    color: #999999;
    font-size: 12px;
    line-height: 16px;
}
.cartpop {
    position: absolute;
    background-color: $fg-color;
    z-index: 9999;
    right: 0;
    top: 2.6rem;
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    box-sizing: border-box;
    border-radius: 0.4rem;
    box-shadow: 0 0.1rem 0.6rem rgb(0 0 0 / 20%);
}
</style>
