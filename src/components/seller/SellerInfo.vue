<script setup>
import { reactive, ref } from "@vue/reactivity"
import {
    fetchSellerInfoById,
    generateModifiableSellerInfo,
    updateSellerInfoById,
} from "../../utils/sellerInfo.js"
import { uploadFile } from "../../utils/commonApi.js"
import { getSellerId } from "../../utils/userInfo.js"
import { watchEffect } from "vue-demi"
import { useStore } from "vuex"

const store = useStore()
let editorVisible = ref(false)

const sellerInfo = ref({})

const modifedInfo = ref({})

watchEffect(() => {
    if (store.state.sellerInfo.id !== -1) {
        fetchSellerInfoById(store.state.sellerInfo.id).then(res => {
            sellerInfo.value = res
            modifedInfo.value = generateModifiableSellerInfo(sellerInfo.value)
        })
    }
})

function pushInfo() {
    updateSellerInfoById(modifedInfo.value.id, modifedInfo.value).then(res => {
        sellerInfo.value = res
        modifedInfo.value = generateModifiableSellerInfo(res)
    })
}

function pushHandler() {
    pushInfo()
    editorVisible.value = false
}

const profilePictureUploader = ref()
function profilePictureUpload() {
    const files = profilePictureUploader.value.files
    if (files !== 0) {
        uploadFile(files[0]).then(result => {
            modifedInfo.value.profilePicture = result
            pushInfo()
        })
    }
}

function handleLogout() {
    store.commit("SELLER_LOGOUT")
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
                    ref="profilePictureUploader"
                    @change="profilePictureUpload"
                    id="seller-profile-pic-upload"
                    type="file"
                    accept="image/*"
                />
            </div>
            <div class="text-container">
                <div class="info-item">
                    <span class="info-key">商店名</span>
                    <span class="info-value"
                        >{{ sellerInfo.name
                        }}<el-button
                            v-if="store.state.sellerInfo.id !== -1"
                            @click="handleLogout()"
                            >退出登陆</el-button
                        ></span
                    >
                </div>
                <div class="info-item">
                    <span class="info-key">加入时间</span>
                    <span class="info-value">{{ sellerInfo.joinTime }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">产地</span>
                    <span class="info-value">{{ sellerInfo.location }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">商品数量</span>
                    <span class="info-value">{{ sellerInfo.itemCount }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">销售量</span>
                    <span class="info-value">
                        {{ sellerInfo.salesVolume }}
                    </span>
                </div>
                <div class="info-item">
                    <span class="info-key">简介</span>
                    <span class="info-value">
                        {{ sellerInfo.description }}
                    </span>
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
