<script setup>
import { ref } from "@vue/reactivity"
import logo from "../../assets/logo.png"

const activeIndex = ref("seller-home")
const handleSelect = (key, keyPath) => {
    // Todo
}
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
                <el-image :src="logo" lazy class="header-logo"></el-image>
            </el-col>
            <el-col :span="18" class="menu-container">
                <el-menu
                    :default-active="activeIndex"
                    class="aipa-seller-menu"
                    mode="horizontal"
                    @select="handleSelect"
                >
                    <el-menu-item index="seller-home">商户首页</el-menu-item>
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
@import "../../assets/styles/constants.scss";
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
