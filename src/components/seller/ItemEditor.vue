<script setup>
import { ref } from "@vue/reactivity"
import { onMounted, watch } from "vue-demi"
const CONFRIM = "confirm"
const CANCEL = "cancel"

const props = defineProps({
    item: Object, //type: ModifiableDetailItemInfo, defined in items.js
})
const emits = defineEmits(["confirm", "cancel"])
const modifiableItem = ref({ ...props.item })
const PLACEHOLDER_IMAGE_PATH = "/example/placeholder.png"
</script>

<template>
    <div class="item-editor">
        <div class="picture-container">
            <el-image
                :src="modifiableItem?.picture ?? PLACEHOLDER_IMAGE_PATH"
            />
            <label class="uploader" for="item-pic-upload"
                >点击选择一张1:1的图片上传</label
            >
            <input id="item-pic-upload" type="file" accept="image/*" />
        </div>
        <div class="text-container">
            <el-form :model="modifiableItem" label-width="12rem">
                <el-form-item label="商品名称">
                    <el-input v-model="modifiableItem.name"></el-input>
                </el-form-item>
                <el-form-item label="商品价格">
                    <el-input v-model="modifiableItem.price"></el-input>
                </el-form-item>
                <el-form-item label="商品描述">
                    <el-input
                        v-model="modifiableItem.detailedDescription"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="emits(CONFRIM, modifiableItem)"
                        >确定</el-button
                    >
                    <el-button @click="emits(CANCEL, modifiableItem)"
                        >取消</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style lang="scss">
@import "./style/common.scss";

#item-pic-upload {
    display: none;
}
.item-editor {
    display: flex;

    .picture-container {
        position: relative;
        flex: 0 0 200px;
        height: 200px;
        .uploader {
            font-size: 1.6rem;
            @include common-coverer;
        }
    }
    .text-container {
        flex-grow: 1;
    }
}
</style>
