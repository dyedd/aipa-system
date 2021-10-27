<script setup>
import SellerManagement from "./SellerManagement.vue"
import ItemManagementByAdminVue from "./ItemManagementByAdmin.vue"
</script>
<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <i class="el-icon-data-line"></i>
                        <span>Dashboard</span>
                    </template>
                    <el-menu-item-group title="仪表盘">
                        <el-menu-item index="1-1">大盘数据</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span>分类管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-s-goods"></i>
                    <span>商品管理</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-user-solid"></i>
                    <span>会员管理</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-s-order"></i>
                    <span>订单管理</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i class="el-icon-user-solid"></i>
                    <span>商户管理</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <SellerManagement></SellerManagement>
            <ItemManagementByAdminVue></ItemManagementByAdminVue>
        </el-container>
    </el-container>
</template>
