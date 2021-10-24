<script setup>
import { reactive } from "@vue/reactivity"

const sellerBasicInfo = reactive({
    name: "江南皮革厂", //type: str
    joinTime: "2021-01-01", //type: TBD
    location: "浙江 温州", //type: str
    // 商品数量
    itemCount: 0, //type: number
    // 销售量
    salesVolume: 0, //type: number
    // 1:1 图片
    profilePicture: "/example/shop-profile-pic.jpg", //type: str
    //简介
    description: "", //type: str
})
</script>

<template>
    <div class="seller-info-container">
        <h1 class="title">商户信息/管理</h1>
        <div class="innercontainer">
            <div class="pic-container">
                <el-image
                    fit="cover"
                    :src="sellerBasicInfo.profilePicture"
                    class="profile-picture"
                ></el-image>
                <label class="uploader" for="seller-profile-pic-upload"
                    >点击选择一张1:1的图片上传</label
                >
                <input id="seller-profile-pic-upload" type="file" accept="image/*" />
            </div>
            <div class="text-container">
                <div class="info-item">
                    <span class="info-key">商店名</span
                    ><span class="info-value">{{ sellerBasicInfo.name }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">加入时间</span
                    ><span class="info-value">{{
                        sellerBasicInfo.joinTime
                    }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">产地</span
                    ><span class="info-value">{{
                        sellerBasicInfo.location
                    }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">商品数量</span
                    ><span class="info-value">{{
                        sellerBasicInfo.itemCount
                    }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">销售量</span
                    ><span class="info-value">{{
                        sellerBasicInfo.salesVolume
                    }}</span>
                </div>
                <div class="info-item">
                    <span class="info-key">简介</span
                    ><span class="info-value">{{
                        sellerBasicInfo.description
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#seller-profile-pic-upload {
    display: none;
}

.seller-info-container {
    padding: 2rem;
    box-sizing: border-box;

    .title {
        color: $primary-color;
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .innercontainer {
        display: flex;
        align-items: center;

        .pic-container {
            position: relative;

            .profile-picture {
                height: 200px;
                width: 200px;
            }
            .uploader {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                
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
            margin-left: 4rem;
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

