<script setup>
import Topbar from "../components/Topbar.vue"
import Header from "../components/Header.vue"
import Nav from "../components/Home/Nav.vue"
import NewProduct from "../components/Home/NewProduct.vue"
import SeckillProduct from "../components/Home/SeckillProduct.vue"
</script>
<template>
    <Topbar />
    <Header />
    <div class="container">
        <Nav />
        <NewProduct />
        <SeckillProduct />
    </div>
</template>
<style lang="scss" scoped>
.container {
    width: 120rem;
    margin-left: auto;
    margin-right: auto;
}
</style>
