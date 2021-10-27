<script setup>
import { ref } from "@vue/reactivity"
import BillDetail from "./BillDetail.vue"
const props = defineProps({
    bills: Object, // type: Bills, defined in bills.js
})
const billDialogVisible = ref(false)
const selectedBillId = ref(-1)

function showDetail(id) {
    selectedBillId.value = id
    billDialogVisible.value = true
}
function handleClose() {
    billDialogVisible.value = false
}
</script>

<template>
    <el-dialog
        v-model="billDialogVisible"
        title="订单详情"
        :before-close="handleClose"
    >
        <BillDetail :id="selectedBillId" />
    </el-dialog>
    <el-table :data="bills">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="itemName" label="商品名称"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="buyerName" label="购买者"></el-table-column>
        <el-table-column prop="stateText" label="状态"></el-table-column>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button
                    type="text"
                    size="small"
                    @click="showDetail(bills[scope.$index].id)"
                    >查看详情</el-button
                >
            </template>
        </el-table-column>
    </el-table>
</template>

<style lang="scss" scoped></style>
