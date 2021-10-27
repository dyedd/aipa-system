<script setup>
import PagedNavigator from "../../components/seller/widgets/PagedNavigator.vue"
import Pager from "../../components/seller/widgets/Pager.vue"
import { ref } from "@vue/reactivity"
import Item from "../../components/seller/Item.vue"
import { fetchItemsBySellerId, createItem } from "../../utils/items"
import { getUserId } from "../../utils/userInfo"
import { hasMoreItems } from "../../utils/items.js"
import { commonNavigator } from "../../utils/utils.js"
import ItemEditor from "../../components/seller/ItemEditor.vue"
import { ElMessage } from "element-plus"

const ITEMS_PER_PAGE = 2
const itemInfo = ref({}) // PageOfArrayOfBasicItemInfo
const items = ref([]) // ArrayOfBasicItemInfo
const newItemDialogVisible = ref(false)

const navigate = commonNavigator(
    page => {
        return fetchItemsBySellerId(getUserId(), page, ITEMS_PER_PAGE)
    },
    0,
    async value => {
        itemInfo.value = value
        items.value = value.value
        return true
    },
    { init: true },
)
function newItemConfirm(modifiableItem) {
    createItem(modifiableItem)
        .then(res => {
            ElMessage({
                type: "success",
                message: "添加成功",
            })
            navigate(0, { absolute: true })
        })
        .catch(error => {
            ElMessage({
                type: "error",
                message: `添加失败${error}`,
            })
        })
        .finally(() => {
            newItemDialogVisible.value = false
        })
}

function newItemCancel(modifiableItem) {
    newItemDialogVisible.value = false
}
</script>

<template>
    <el-dialog v-model="newItemDialogVisible" title="发布新商品">
        <div class="new-item-dialog">
            <ItemEditor
                :item="{}"
                @cancel="newItemCancel($event)"
                @confirm="newItemConfirm($event)"
            />
        </div>
    </el-dialog>
    <div class="item-management-container">
        <div class="top">
            <div class="info">
                <h1 class="title">商品管理</h1>
                <Pager font-size="1.5rem" :page-like="itemInfo" />
                <div class="operations">
                    <el-button size="small" @click="newItemDialogVisible = true"
                        >发布新商品</el-button
                    >
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
            <PagedNavigator
                font-size="1.6rem"
                :page-like="itemInfo"
                @navigate="navigate($event)"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../components/seller/style/common.scss";

.new-item-dialog {
    padding: 0 3rem;
}

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
    .footer {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
