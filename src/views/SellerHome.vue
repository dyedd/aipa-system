<script setup>
import SellerHeader from "../components/seller/SellerHeader.vue"
import SellerInfo from "../components/seller/SellerInfo.vue"
import SellerItemsPreview from "../components/seller/SellerItemsPreview.vue"
import BillsPreview from "../components/seller/BillsPreview.vue"
</script>

<template>
    <SellerHeader />
    <SellerInfo class="seller-info" />
    <SellerItemsPreview class="items-preview" />
    <BillsPreview class="bills-preview" />
</template>

<style lang="scss" scoped>
@import "../assets/styles/constants.scss";
.seller-info,
.items-preview,
.bills-preview {
    width: $header-width;
    margin: 0 auto;
    background-color: $fg-color;
    margin-top: 2rem;
}
</style>
