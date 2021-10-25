<script setup>
import { reactive, ref } from "@vue/reactivity"
import {
    fetchSellerInfo,
    generateModifiableSellerInfo,
    pushSellerInfo,
} from "../../utils/sellerInfo.js"

let editorVisible = ref(false)

const sellerInfo = reactive(fetchSellerInfo())

const modifedInfo = reactive(generateModifiableSellerInfo(sellerInfo))

function pushInfo() {
    Object.assign(sellerInfo, pushSellerInfo(modifedInfo))
}

function pushHandler() {
    pushInfo()
    editorVisible = false
}
</script>

<template>
    <div class="seller-info-container">
        <el-dialog v-model="editorVisible" title="编辑商户信息" width="80rem">
            <el-form label-width="10rem">
                <el-form-item label="商户名称">
                    <el-input v-model="modifedInfo.name"></el-input>
                </el-form-item>
                <el-form-item label="账户地址">
                    <el-input v-model="modifedInfo.location"></el-input>
                </el-form-item>
                <el-form-item label="账户介绍">
                    <el-input v-model="modifedInfo.description"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="editorVisible = false">取消</el-button>
                    <el-button type="primary" @click="pushHandler()"
                        >提交</el-button
                    >
                </span>
            </template>
        </el-dialog>

        <div class="top-container">
            <h1 class="title">商户信息管理</h1>
            <el-button type="success" @click="editorVisible = true"
                >编辑信息</el-button
            >
        </div>
        <div class="innercontainer">
            <div class="pic-container">
                <el-image
                    fit="cover"
                    :src="sellerInfo.profilePicture"
                    class="profile-picture"
                ></el-image>
                <label class="uploader" for="seller-profile-pic-upload"
                    >点击选择一张1:1的图片上传</label
                >
                <input
                    id="seller-profile-pic-upload"
                    type="file"
                    accept="image/*"
                />
            </div>
            <div class="text-container">
                <div class="info-item">
                    <span class="info-key">商店名</span
                    ><span class="info-value">{{ sellerInfo.name }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">加入时间</span
                    ><span class="info-value">{{ sellerInfo.joinTime }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">产地</span
                    ><span class="info-value">{{ sellerInfo.location }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">商品数量</span
                    ><span class="info-value">{{ sellerInfo.itemCount }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">销售量</span
                    ><span class="info-value">{{
                        sellerInfo.salesVolume
                    }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">简介</span
                    ><span class="info-value">{{
                        sellerInfo.description
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./style/common.scss";
#seller-profile-pic-upload {
    display: none;
}

.seller-info-container {
    @include card;
    .top-container {
        @include space-between;
        margin-bottom: 2rem;
        .title {
            @include common-title;
        }
    }

    .innercontainer {
        display: flex;
        align-items: center;

        .pic-container {
            position: relative;

            .profile-picture {
                height: 250px;
                width: 250px;
            }
            .uploader {
                @include fullsize;

                font-size: 1.4rem;
                justify-content: center;
                align-items: center;
                color: #fff;
                background-color: rgba($color: #000000, $alpha: 0.7);
                display: flex;
                opacity: 0;

                &:hover {
                    opacity: 1;
                }
            }
        }

        .text-container {
            margin-left: 6rem;
            .info-item {
                margin-bottom: 1rem;

                .info-key,
                .info-value {
                    font-size: 1.6rem;
                    display: inline-block;
                }
                .info-key {
                    color: $secondary-color;
                    font-weight: bolder;
                    width: 10rem;
                }
            }
            .info-item:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
