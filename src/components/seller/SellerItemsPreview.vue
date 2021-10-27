<script setup>
import { ref } from "@vue/reactivity"
import { fetchItemsBySellerId, hasMoreItems } from "../../utils/items.js"
import { getUserId } from "../../utils/userInfo.js"
import { PLACEHOLDER_IMAGE_PATH } from "../constants.js"
const itemInfo = ref({})
const items = ref([])
fetchItemsBySellerId(getUserId(), 0, 8).then(res => {
    itemInfo.value = res
    items.value = res.value
})
</script>

<template>
    <div class="items-preview-container">
        <div class="top-container">
            <h1 class="title">商品信息</h1>
            <el-button type="success" plain>查看更多</el-button>
        </div>
        <div class="item-container">
            <div v-for="(item, index) in items" :key="item.id" class="item">
                <el-image
                    :src="item.picture ? item.picture : PLACEHOLDER_IMAGE_PATH"
                    fit="cover"
                />
                <div
                    v-if="hasMoreItems(itemInfo) && index == items.length - 1"
                    class="show-more"
                >
                    查看更多
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./style/common.scss";
.items-preview-container {
    @include card;
    .top-container {
        @include space-between;
        margin-bottom: 2rem;
        .title {
            @include common-title;
        }
    }
    .item-container {
        display: grid;
        grid-template-columns: repeat(8, 13.625rem);
        gap: 1rem;

        .item {
            display: flex;
            align-items: center;
            position: relative;

            .show-more {
                @include fullsize;
                @include center;
                color: #fff;
                font-size: 1.6rem;
                background-color: rgba($color: #000000, $alpha: 0.7);
            }
        }
    }
}
</style>
