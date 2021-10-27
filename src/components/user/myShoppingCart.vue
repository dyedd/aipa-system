<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
const store = useStore()
store.dispatch("loadShoppingCart")
let tableData = store.state.shoppingCart
</script>
<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column label="图片">
            <template #default="scope">
                <img :src="scope.row.img" style="width: 5rem" alt />
            </template>
        </el-table-column>
        <el-table-column label="标题" prop="title" />
        <el-table-column label="套餐" prop="package" />
        <el-table-column label="数量" prop="count" />
        <el-table-column label="价格" prop="price" />
    </el-table>
    <el-button type="danger" style="float: right; margin-top: 2rem"
        >删除</el-button
    >
</template>
