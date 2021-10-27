<script setup>
import { ref } from "vue"
import logo from "../assets/logo.png"
const activeIndex = ref("/")
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
const input = ref("")
</script>
<template>
    <el-row
        justify="space-between"
        align="middle"
        class="wrapper"
        tag="section"
    >
        <div class="header">
            <el-col :span="3">
                <el-image :src="logo" lazy class="header-logo"></el-image>
            </el-col>
            <el-col :span="18">
                <el-menu
                    :default-active="activeIndex"
                    class="aipa-menu"
                    mode="horizontal"
                    @select="handleSelect"
                    router
                >
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/seller">商家管理</el-menu-item>
                    <el-menu-item index="/login">登录</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="3">
                <el-input v-model="input" placeholder="搜一搜" class="search">
                    <template #suffix>
                        <Icon name="search" color size="1.6rem" />
                    </template>
                </el-input>
            </el-col>
        </div>
    </el-row>
</template>
<style lang="scss" scoped>
.wrapper {
    height: $header-height;
    background-color: $fg-color;
    box-shadow: $header-boxshadow;
    width: 100%;
    .header {
        width: $header-width;
        display: flex;
        margin: 0 auto;
    }
    .search {
        line-height: $header-height;
    }
}
.header-logo {
    line-height: $header-height;
}
.el-menu--horizontal {
    border-bottom: none;
}
</style>
<style>
.el-image__inner {
    vertical-align: middle !important;
}
</style>
