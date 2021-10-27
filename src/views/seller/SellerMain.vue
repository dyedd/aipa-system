<script setup>
import { useStore } from "vuex"
import SellerHeader from "../../components/seller/SellerHeader.vue"
import { login } from "../../utils/sellerInfo"
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
    <SellerHeader />
    <router-view></router-view>
</template>

<style lang="scss" scoped></style>
