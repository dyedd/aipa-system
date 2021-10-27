<script setup>
import { PLACEHOLDER_IMAGE_PATH } from "../constants.js"
const props = defineProps({
    item: Object, // type: DetailItemInfo defined in items.js
})
</script>

<template>
    <div class="item-info" v-if="item">
        <div class="picture-container">
            <el-image
                class="picture"
                fit="cover"
                :src="item.picture ? item.picture : PLACEHOLDER_IMAGE_PATH"
            />
        </div>
        <div class="text-info">
            <div class="item">
                <div class="key">商品名称</div>
                <div class="value">{{ item.name }}</div>
            </div>
            <div class="item">
                <div class="key">商品价格</div>
                <div class="value">{{ item.price }}</div>
            </div>
            <div class="item">
                <div class="key">商品描述</div>
                <div class="value">{{ item.detailedDescription }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./style/common.scss";
#iteminfo-pic-upload {
    display: none;
}
.item-info {
    @include card;
    display: flex;

    > * {
        margin-left: 2rem;
    }
    > *:first-child {
        margin-left: 0rem;
    }
    .picture-container {
        flex: 0 0 200px;
        position: relative;

        .picture {
            height: 200px;
            width: 200px;
        }
    }

    .text-info {
        @include key-value;
    }
}
</style>
