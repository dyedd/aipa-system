<script setup>
import { ref } from "@vue/reactivity"
import { fetchItemsByKeywordAndSellerId } from "../../utils/items.js"
import { useStore } from "vuex"
import Seller from "../../components/seller/Item.vue"

const props = defineProps({
    keyword: String,
})
const store = useStore()
const items = ref()
fetchItemsByKeywordAndSellerId(store.state.sellerInfo.id, props.keyword).then(
    res => {
        items.value = res
    },
)
</script>

<template>
    <div class="search-container">
        <div class="top">
            <h1 class="title">商品搜索： {{ keyword }}</h1>
        </div>
        <div class="items">
            <Item v-for="item in items" :key="item.id" :item="item" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../components/seller/style/common.scss";
.search-container {
    @include main-panel;
    @include card;
    .top {
        .title {
            @include common-title;
        }
    }
    .items {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fill, 20rem);
    }
}
</style>
