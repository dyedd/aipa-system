<script setup>
const props = defineProps({
    item: Object, // type: DetailItemInfo defined in items.js
})
</script>

<template>
    <div class="item-info" v-if="item">
        <div class="picture-container">
            <el-image :src="item.picture" />
            <label class="uploader" for="iteminfo-pic-upload"
                >点击选择一张1:1的图片上传</label
            >
            <input id="iteminfo-pic-upload" type="file" accept="image/*" />
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

        .uploader {
            @include common-coverer;
            font-size: 1.6rem;
        }
        #seller-profile-pic-upload {
            display: none;
        }
    }

    .text-info {
        @include key-value;
    }
}
</style>
