<script setup>
import { ref } from "vue-demi"
import { fetchAllSellers, removeSellerById } from "../../utils/sellerInfo"
fetchAllSellers().then(res => {
    sellers.value = res
})

const sellers = ref([])
function handleRemoveSeller(id) {
    removeSellerById(id)
        .then(() => {
            return fetchAllSellers()
        })
        .then(res => {
            sellers.value = res
        })
}
</script>

<template>
    <div class="seller-management-container">
        <div class="top">
            <h1 class="title">商户管理</h1>
        </div>
        <div class="data">
            <el-table :data="sellers" style="width: 100%">
                <el-table-column prop="id" label="ID"></el-table-column>
                <el-table-column prop="name" label="商店名"></el-table-column>
                <el-table-column
                    prop="username"
                    label="登陆名"
                ></el-table-column>
                <el-table-column prop="location" label="地址"></el-table-column>
                <el-table-column
                    prop="joinTime"
                    label="加入时间"
                ></el-table-column>
                <el-table-column
                    prop="itemCount"
                    label="商品数量"
                ></el-table-column>
                <el-table-column
                    prop="salesVolume"
                    label="销售量"
                ></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button
                            type="text"
                            size="small"
                            @click="
                                handleRemoveSeller(sellers[scope.$index].id)
                            "
                            >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../components/seller/style/common.scss";

.seller-management-container {
    @include main-panel;
    @include card;
    .top {
        .title {
            @include common-title;
        }
    }
}
</style>
