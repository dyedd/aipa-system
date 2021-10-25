<script setup>
import { getBillsBySellerId } from "../../utils/bills"
import { getUserId } from "../../utils/userInfo"
const billsInfo = getBillsBySellerId(getUserId(), 0, 10)
const bills = billsInfo.value
</script>

<template>
    <div class="bills-preview-content">
        <div class="top-container">
            <h1 class="title">近期订单</h1>
            <el-button type="success" plain>查看更多</el-button>
        </div>
        <el-table :data="bills">
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="itemName" label="商品名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="buyerName" label="购买者"></el-table-column>
            <el-table-column label="操作">
                <template #default>
                    <el-button type="text" size="small">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style lang="scss" scoped>
//@import "../../assets/styles/constants.scss";
@import "./style/common.scss";

.bills-preview-content {
    @include card;
    .top-container {
        @include space-between;
        margin-bottom: 2rem;
        .title {
            @include common-title;
        }
    }
}
</style>
