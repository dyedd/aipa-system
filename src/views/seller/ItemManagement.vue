<script setup>
import { ref } from "@vue/reactivity"
import Item from "../../components/seller/Item.vue"
import { fetchItemsBySellerId } from "../../utils/items"
import { getUserId } from "../../utils/userInfo"
import { hasMoreItems } from "../../utils/items.js"

let itemInfo = ref({}) // PageOfArrayOfBasicItemInfo
let items = ref([]) // ArrayOfBasicItemInfo
fetchItemsBySellerId(getUserId(), 0, 20).then(value => {
    itemInfo.value = value
    items.value = value.value
})

// navigate to page itemInfo.page + offset
// offset can be negative, but this function do NOT check whether result below zero or exceeded pageCounts - 1
function navigate(offset) {
    const to = itemInfo.value.page + offset
    fetchItemsBySellerId(getUserId(), to, 20).then(value => {
        itemInfo.value = value
        items.value = value.value
    })
}
</script>

<template>
    <div class="item-management-container">
        <div class="top">
            <div class="info">
                <h1 class="title">商品管理</h1>
                <div class="page-panel">
                    共
                    <span class="page-number">{{ itemInfo.pageCounts }}</span>
                    页，现在是第
                    <span class="page-number">{{ itemInfo.page + 1 }}</span> 页
                </div>
                <div class="operations">
                    <el-button size="small">发布新商品</el-button>
                </div>
            </div>
            <div class="search-box">
                <el-input placeholder="搜一搜" class="search">
                    <template #suffix>
                        <Icon name="search" color size="1.6rem" />
                    </template>
                </el-input>
            </div>
        </div>
        <div class="items">
            <Item
                v-for="item in items"
                :item="item"
                class="item"
                :key="item.id"
            />
        </div>
        <div class="footer">
            <div class="page-panel">
                共
                <span class="page-number">{{ itemInfo.pageCounts }}</span>
                页，现在是第
                <span class="page-number">{{ itemInfo.page + 1 }}</span> 页
            </div>
            <div class="navigator">
                <el-button
                    size="small"
                    :disabled="itemInfo.page == 0"
                    @click="navigate(-1)"
                    >上一页</el-button
                >
                <el-button
                    size="small"
                    :disabled="
                        itemInfo.value !== undefined && !hasMoreItems(itemInfo)
                    "
                    @click="navigate(1)"
                    >下一页</el-button
                >
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../components/seller/style/common.scss";

.item-management-container {
    @include main-panel;
    @include card;

    .top {
        @include space-between;

        .info {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            gap: 1.5rem;

            .title {
                @include common-title;
            }
            .page-panel {
                &,
                .page-number {
                    font-size: 1.4rem;
                }
                .page-number {
                    color: $secondary-color;
                }
            }
        }
        .search-box {
            max-width: 15rem;
        }
    }

    .items {
        padding: 2rem 2rem 0 2rem;
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fill, 20rem);
    }
    .footer {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .page-panel {
            &,
            .page-number {
                font-size: 1.6rem;
            }
            .page-number {
                color: $secondary-color;
            }
        }

        .navigator {
            margin-top: 0.5rem;
        }
    }
}
</style>
