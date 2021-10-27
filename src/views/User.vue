<script setup>
import { ref } from "vue"
import Header from "../components/Header.vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
const store = useStore()
const router = useRouter()
const userInfo = store.state.userInfo
let activeTitle = ref("我的订单")
const bar = {
    myAddress: "我的收货地址",
    addAddress: "添加收货地址",
    myOrder: "我的订单",
    myShoppingCart: "我的购物车",
}
const handleSelect = (key, path) => {
    activeTitle.value = bar[key.substring(6)]
}
</script>
<template>
    <Header />
    <el-container>
        <el-container>
            <el-aside>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @select="handleSelect"
                    router
                >
                    <div class="user-icon">
                        <div class="user-img">
                            <el-avatar
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                :size="96"
                            ></el-avatar>
                        </div>
                        <p>{{ userInfo.username }}</p>
                    </div>
                    <el-sub-menu index="1">
                        <template #title>
                            <i class="el-icon-location"></i>
                            <span>收货地址</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/home/myAddress"
                                >我的收货地址</el-menu-item
                            >
                            <el-menu-item index="/home/addAddress"
                                >添加收货地址</el-menu-item
                            >
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <i class="el-icon-goods"></i>
                            <span>购物订单</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/home/myOrder"
                                >我的订单</el-menu-item
                            >
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <i class="el-icon-box"></i>
                            <span>购物车</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/home/myShoppingCart"
                                >我的购物车</el-menu-item
                            >
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header :style="{ background: '#fff' }">
                    <h2>{{ activeTitle }}</h2>
                </el-header>
                <el-main>
                    <el-card>
                        <router-view></router-view>
                    </el-card>
                </el-main>
                <el-footer>@2021</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<style lang="scss" scoped>
h2 {
    font-size: 2rem;
    line-height: 6rem;
    color: $normal-text-color;
}
.wrapper {
    background-color: $normal-text-color !important;
}
.el-card {
    margin-top: 2rem;
    height: calc(100vh - 15rem);
}
.el-main {
    padding: 0 2rem;
}
.el-aside {
    width: 18rem;
    background-color: $fg-color;
    color: $normal-text-color;
    height: calc(100vh - 3.6rem);
    overflow: auto;
    .user-icon {
        text-align: center;
    }
    p {
        margin-top: 0.2rem;
        font-size: 2rem;
    }
}
.el-footer {
    margin-top: 0.5rem;
    padding: 0 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
}
</style>
<style lang="scss">
.aipa-menu {
    background-color: $normal-text-color !important;
    & > .el-menu-item {
        color: $fg-color !important;
    }
}
</style>
