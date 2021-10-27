<script setup>
import { ref } from "@vue/reactivity"
import { useRoute, useRouter } from "vue-router"
import {
    fetchItemById,
    removeItemById,
    updateItemById,
    generateModifiableDetailItemInfo,
} from "../../utils/items"
import ItemInfo from "../../components/seller/ItemInfo.vue"
import Review from "../../components/seller/Review.vue"
import { fetchReviewsByItemId } from "../../utils/reviews"
import Pager from "../../components/seller/widgets/Pager.vue"
import PagedNavigator from "../../components/seller/widgets/PagedNavigator.vue"
import { commonNavigator } from "../../utils/utils"
import { ElMessageBox, ElMessage } from "element-plus"
import "element-plus/es/components/message/style/css"
import "element-plus/es/components/message-box/style/css"

const REVIEWS_PER_PAGE = 15

const router = useRouter()
const route = useRoute()
const itemId = route.params.id
const item = ref({}) // type: DetailItemInfo, defined in items.js
const reviewInfo = ref({}) // type: PageOfArrayOfReview, defined in reviews.js
const reviews = ref([])

let navigate = ref()

async function init() {
    item.value = await fetchItemById(itemId)

    navigate.value = commonNavigator(
        page => {
            return fetchReviewsByItemId(item.value.id, page, REVIEWS_PER_PAGE)
        },
        0,
        async value => {
            reviewInfo.value = value
            reviews.value = value.value
            return true
        },
        {
            init: true,
        },
    )
}
init().then(() => {})

function removeItem() {
    ElMessageBox.confirm("确定要删除商品?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    })
        .then(async () => {
            await removeItemById(item.value.id)
            ElMessage({
                type: "success",
                message: "删除成功",
            })
            router.back()
        })
        .catch(() => {})
}

const modifiableDetailItemInfo = ref()
const editItemDialogVisible = ref(false)
function editItem() {
    modifiableDetailItemInfo.value = generateModifiableDetailItemInfo(
        item.value,
    )
    editItemDialogVisible.value = true
}
function editItemConfirm(modifiableItem) {
    updateItemById(modifiableItem.id, modifiableItem).then(value => {
        item.value = value
    })

    editItemDialogVisible.value = false
}
function editItemCancel(modifiableItem) {
    editItemDialogVisible.value = false
}
</script>

<template>
    <el-dialog v-model="editItemDialogVisible" title="编辑商品">
        <div class="new-item-dialog">
            <ItemEditor
                :item="modifiableDetailItemInfo"
                @cancel="editItemCancel($event)"
                @confirm="editItemConfirm($event)"
            />
        </div>
    </el-dialog>
    <div class="item-detail" v-if="item !== undefined && item !== null">
        <div class="header">
            <h1 class="title">商品: {{ item.name }}</h1>
        </div>

        <div class="summary">
            <div class="summary-title">
                <h1 class="title">商品数据</h1>
            </div>
            <div class="summary-content">
                <div class="reviews">
                    总计评论
                    <div class="number">{{ item.reviewCounts }}</div>
                    条
                </div>
                <div class="sales-volumne">
                    总计销售
                    <div class="number">{{ item.salesVolume }}</div>
                    条
                </div>
                <div class="sales">
                    总计销售
                    <div class="number">{{ item.sales }}</div>
                    元
                </div>
            </div>
        </div>
        <div class="info">
            <div class="top">
                <h1 class="title">商品信息</h1>
                <div class="operations">
                    <el-button type="danger" @click="removeItem()"
                        >删除商品</el-button
                    >
                    <el-button type="success" @click="editItem()"
                        >编辑信息</el-button
                    >
                </div>
            </div>
            <ItemInfo :item="item" class="item-info" />
        </div>
        <div class="reviews">
            <div class="top">
                <div class="info-container">
                    <h1 class="title">评价信息</h1>
                    <Pager font-size="1.5rem" :page-like="reviewInfo" />
                </div>
            </div>
            <div class="reviews-contaienr">
                <Review
                    class="review"
                    v-for="review in reviews"
                    :review="review"
                    :key="review.id"
                />
            </div>
            <div class="footer">
                <PagedNavigator
                    font-size="1.6rem"
                    :page-like="reviewInfo"
                    @navigate="navigate($event)"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../components/seller/style/common.scss";
$margin-between-category: 3rem;
.item-detail {
    @include main-panel;

    > .header {
        .title {
            @include primary-title;
        }
    }

    > .summary {
        .title {
            @include common-title;
            margin-top: 2rem;
        }

        .summary-content {
            margin-top: 1.5rem;
            display: flex;
            justify-content: space-evenly;

            > * {
                @include card;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 20rem;
                height: 20rem;
                font-size: 2.5rem;
                .number {
                    color: $primary-color;
                    margin: 0.3rem 0;
                    font-size: 3rem;
                }
            }
        }
    }

    > .info {
        margin-top: $margin-between-category;
        .top {
            @include space-between;

            .title {
                @include common-title;
            }
        }
        .item-info {
            margin-top: 2rem;
        }
    }
    > .reviews {
        margin-top: $margin-between-category;

        .top {
            margin-bottom: 2rem;

            .info-container {
                display: flex;
                align-items: center;

                .title {
                    @include common-title;
                    margin-right: 2rem;
                }
            }
        }
        .review {
            margin-bottom: 2rem;
        }
        .review:last-child {
            margin-bottom: 0;
        }

        .footer {
            margin-top: 2rem;
        }
    }
}
</style>
