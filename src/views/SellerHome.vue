<script setup>
import SellerHeader from "../components/seller/SellerHeader.vue"
import SellerInfo from "../components/seller/SellerInfo.vue"
</script>

<template>
    <SellerHeader />
    <SellerInfo class="seller-info" />
</template>

<style lang="scss" scoped>
@import "../assets/styles/constants.scss";
.seller-info {
    width: $header-width;
    margin: 0 auto;
    background-color: $fg-color;
    margin-top: 2rem;
}
</style>
