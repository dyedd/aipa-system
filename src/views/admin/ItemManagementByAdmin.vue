<script setup>
import { ref } from "vue-demi"
import { fetchAllItems } from "../../utils/items"

const shownItems = ref()
const items = ref()
const searchKeyword = ref()
fetchAllItems().then(res => {
    shownItems.value = res
    items.value = res
})
function handleSearch() {
    if (searchKeyword.value) {
        shownItems.value = items.value.filter(item => {
            return (
                item.name.indexOf(searchKeyword.value) !== -1 ||
                item.detailedDescription.indexOf(searchKeyword.value) !== -1
            )
        })
    }
}
</script>

<template>
    <div class="item-management-container">
        <div class="top">
            <div class="info">
                <h1 class="title">商品管理</h1>
            </div>
            <div class="search-box">
                <el-input
                    placeholder="过滤"
                    class="search"
                    v-on:keyup="handleSearch()"
                    v-model="searchKeyword"
                >
                    <template #suffix>
                        <Icon
                            name="search"
                            color
                            size="1.6rem"
                            @click="handleSearch()"
                        />
                    </template>
                </el-input>
            </div>
        </div>
        <div class="items">
            <Item
                v-for="item in shownItems"
                :item="item"
                class="item"
                :key="item.id"
            />
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
}
</style>
