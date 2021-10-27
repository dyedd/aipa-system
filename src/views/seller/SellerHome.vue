<script setup>
import SellerHeader from "../../components/seller/SellerHeader.vue"
import SellerInfo from "../../components/seller/SellerInfo.vue"
import SellerItemsPreview from "../../components/seller/SellerItemsPreview.vue"
import BillsPreview from "../../components/seller/BillsPreview.vue"
import { login } from "../../utils/sellerInfo.js"
import { useStore } from "vuex"

const store = useStore()
const rawLoginState = localStorage.getItem("sellerLogin")
if (rawLoginState) {
    const loginState = JSON.parse(rawLoginState)
    login(loginState).then(res => {
        store.commit("SELLER_LOGIN", res)
    })
}
</script>

<template>
    <SellerInfo class="seller-info" />
    <SellerItemsPreview class="items-preview" />
    <BillsPreview class="bills-preview" />
</template>

<style lang="scss" scoped>
@import "../../components/seller/style/common.scss";
.seller-info,
.items-preview,
.bills-preview {
    @include main-panel;
}
</style>
