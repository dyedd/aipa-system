<script setup>
import { ref } from "@vue/reactivity"
import {
    onBeforeUnmount,
    onMounted,
    onUnmounted,
    watchEffect,
} from "@vue/runtime-core"
import { useRoute, useRouter } from "vue-router"
import logo from "../../assets/logo.png"
import { SELLER_PATH_PREFIX } from "../../views/seller/seller-router"

const router = useRouter()
const activeIndex = ref("SellerHome")
const handleSelect = key => {
    router.push(SELLER_PATH_PREFIX + "/" + key)
}
function updateActiveIndex(path) {
    const pathArray = path.split("/")
    for (let i = 0; i < pathArray.length; i++) {
        if (pathArray[i] === SELLER_PATH_PREFIX.replaceAll("/", "")) {
            if (pathArray.length > i + 1) {
                activeIndex.value = pathArray[i + 1]
                break
            }
        }
    }
}
let stopAfterEachListener = null
onMounted(() => {
    // 在第一次进入网页时更新默认activeIndex
    const route = useRoute()
    updateActiveIndex(route.path)
    // 处理浏览器前进后退按钮与el-menu的active问题
    stopAfterEachListener = router.afterEach(to => {
        // 处理menu item的聚焦问题，如果不这么做，点击浏览器前进后退按钮后，即使在将activeIndex设为新的值，menu的聚焦仍然会停留在之前的item上
        // TODO 有更好的处理方法吗
        document.activeElement.blur()
        updateActiveIndex(to.path)
    })
})
onUnmounted(() => {
    if (stopAfterEachListener !== null && stopAfterEachListener !== undefined) {
        stopAfterEachListener()
    }
})
</script>

<template>
    <el-row
        justify="space-between"
        align="middle"
        class="container"
        tag="section"
    >
        <div class="header">
            <el-col :span="3" class="logo-container">
                <router-link to="/">
                    <el-image :src="logo" lazy class="header-logo"></el-image>
                </router-link>
            </el-col>
            <el-col :span="18" class="menu-container">
                <el-menu
                    :default-active="activeIndex"
                    class="aipa-seller-menu"
                    mode="horizontal"
                    @select="handleSelect"
                >
                    <el-menu-item index="home">商户首页</el-menu-item>
                    <el-menu-item index="item-management"
                        >商品管理</el-menu-item
                    >
                    <el-menu-item index="bill-management"
                        >订单管理</el-menu-item
                    >
                </el-menu>
            </el-col>
        </div>
    </el-row>
</template>

<style lang="scss" scoped>
.container {
    height: $header-height;
    background-color: #fff;
    box-shadow: $header-boxshadow;
    width: 100%;

    .header {
        width: $header-width;
        display: flex;
        margin: 0 auto;

        .logo-container {
            display: flex;
            align-items: center;
        }

        .menu-container {
            margin-left: 3rem;
        }
    }
}
</style>
