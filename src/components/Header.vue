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
    <el-row justify="center" align="middle" class="container" tag="section">
        <el-col :span="3">
            <el-image :src="logo" lazy class="header-logo"></el-image>
        </el-col>
        <el-col :span="12">
            <el-menu
                :default-active="activeIndex"
                class="aipa-menu"
                mode="horizontal"
                @select="handleSelect"
                router
            >
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="2">关于我们</el-menu-item>
                <el-menu-item index="3">商店</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="3">
            <el-input v-model="input" placeholder="搜一搜">
                <template #suffix>
                    <Icon name="search" color="" size="1.6rem" />
                </template>
            </el-input>
        </el-col>
    </el-row>
</template>
<style lang="scss" scoped>
.container {
    height: 10rem;
    background-color: #fff;
    box-shadow: 0 0.3rem 0.4rem rgb(26 26 26 / 10%);
}
.header-logo {
    height: 5rem;
}
.el-menu--horizontal {
    border-bottom: none;
}
</style>
