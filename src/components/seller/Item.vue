<script setup>
const props = defineProps({
    item: Object, // type: BasicItemInfo, defined in items.js
})
</script>

<template>
    <div class="item" v-if="item !== null && item !== undefined">
        <router-link :to="{ name: 'ItemDetail', params: { id: item.id } }">
            <el-image :src="item.picture" class="preview-picture"></el-image>
        </router-link>
        <div class="description-container">
            <div class="price">¥{{ item.price }}</div>
            <router-link :to="{ name: 'ItemDetail', params: { id: item.id } }">
                <div class="name">{{ item.name }}</div>
            </router-link>
            <div class="inner-container">
                <span class="sales-volumne"
                    >销量<span class="sales-volumne-number">{{
                        item.salesVolume
                    }}</span
                    >件
                </span>
                <span class="review-counts"
                    >评价<span class="review-counts-number">{{
                        item.reviewCounts
                    }}</span
                    >条</span
                >
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./style/common.scss";
.item {
    display: flex;
    flex-direction: column;

    .description-container {
        padding: 0.5rem 1rem;
        .price {
            color: #e4393c;
            font-size: 2.3rem;
            font-weight: bold;
        }
        .name {
            color: $normal-text-color;
            font-size: 1.5rem;
        }
        .inner-container {
            color: $secondary-text-color;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .sales-volumne,
            .review-counts {
                @include center;
                font-size: 1.2rem;

                .sales-volumne-number,
                .review-counts-number {
                    font-size: 1.4rem;
                    color: #646fb0;
                }
            }
        }
    }
}
</style>
