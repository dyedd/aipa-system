<script setup>
const props = defineProps({
    item: Object, // type: DetailItemInfo defined in items.js
})
</script>

<template>
    <div class="item-info">
        <div class="picture-container">
            <el-image :src="item.picture" />
            <label class="uploader" for="seller-profile-pic-upload"
                >点击选择一张1:1的图片上传</label
            >
            <input
                id="seller-profile-pic-upload"
                type="file"
                accept="image/*"
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
            @include fullsize;
            opacity: 0;

            &:hover {
                @include center;
                opacity: 1;
                font-size: 1.6rem;
                color: #fff;
                background-color: rgba($color: #000000, $alpha: 0.7);
            }
        }
        #seller-profile-pic-upload {
            display: none;
        }
    }

    .text-info {
        > .item {
            margin-bottom: 1.5rem;
        }
        > .item:last-child {
            margin-bottom: 0;
        }
        .item {
            display: flex;
            align-items: center;

            .key {
                flex: 0 0 10rem;
                font-size: 1.6rem;
                color: $secondary-color;
                font-weight: bolder;
            }

            .value {
                font-size: 1.6rem;
            }
        }
    }
}
</style>
