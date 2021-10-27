<script setup>
import { ref, watchEffect } from "vue-demi"
import { fetchBillById } from "../../utils/bills.js"
import { onMounted } from "@vue/runtime-core"
const props = defineProps({
    id: Number,
})
const billDetail = ref({})
watchEffect(() => {
    if (props.id !== -1) {
        fetchBillById(props.id).then(res => {
            billDetail.value = res
        })
    }
})
</script>

<template>
    <div class="bill-info">
        <div class="item">
            <div class="key">商品名称</div>
            <div class="value">{{ billDetail.itemName }}</div>
        </div>
        <div class="item">
            <div class="key">顾客</div>
            <div class="value">{{ billDetail.buyerName }}</div>
        </div>
        <div class="item">
            <div class="key">日期</div>
            <div class="value">{{ billDetail.date }}</div>
        </div>
        <div class="item">
            <div class="key">状态</div>
            <div class="value">{{ billDetail.stateText }}</div>
        </div>
        <div class="item">
            <div class="key">手机号</div>
            <div class="value">{{ billDetail.phone }}</div>
        </div>
        <div class="item">
            <div class="key">地址</div>
            <div class="value">{{ billDetail.destination }}</div>
        </div>
        <div class="item">
            <div class="key">运费</div>
            <div class="value">{{ billDetail.shipFee }}</div>
        </div>
        <div class="item">
            <div class="key">快递信息</div>
            <div class="value">{{ billDetail.shipInfo }}</div>
        </div>
        <div class="item">
            <div class="key">运单号</div>
            <div class="value">{{ billDetail.shipNumber }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./style/common.scss";
.bill-info {
    @include key-value;
}
</style>
