<script setup>
import { ref, watchEffect } from "vue-demi"
import { fetchBillsBySellerId } from "../../utils/bills"
import { getSellerId } from "../../utils/userInfo"
import Bills from "./Bills.vue"
const billsInfo = ref({})
const bills = ref([])
const BILLS_ON_PREVIEW = 15

async function init() {
    billsInfo.value = await fetchBillsBySellerId(
        getSellerId(),
        0,
        BILLS_ON_PREVIEW,
    )
    bills.value = billsInfo.value.value
}
init().then(() => {})
</script>

<template>
    <div class="bills-preview-content">
        <div class="top-container">
            <h1 class="title">近期订单</h1>
            <el-button type="success" plain>查看更多</el-button>
        </div>
        <Bills :bills="bills" />
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
