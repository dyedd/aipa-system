<script setup>
import Heading from "./Heading.vue"
</script>
<template>
    <Heading spanText="新品" hText="上架" />
    <div class="productItem">
        <div class="productDetail">
            <a href="#" target="_blank">
                <img
                    src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png"
                    alt="HUAWEI Mate 40 Pro+ 5G 全网通"
                />
                <p class="name">HUAWEI Mate 40 Pro+ 5G 全网通</p>
                <p class="desc">
                    华为 HUAWEI Mate 40 Pro+ 5G 全网通华为 HUAWEI Mate 40 Pro+
                    5G 全网通
                </p>
                <p class="price">23333</p>
            </a>
        </div>
        <div class="productDetail">
            <a href="#" target="_blank">
                <img
                    src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png"
                    alt="HUAWEI Mate 40 Pro+ 5G 全网通"
                />
                <p class="name">HUAWEI Mate 40 Pro+ 5G 全网通</p>
                <p class="desc">
                    华为 HUAWEI Mate 40 Pro+ 5G 全网通华为 HUAWEI Mate 40 Pro+
                    5G 全网通
                </p>
                <p class="price">23333</p>
            </a>
        </div>
        <div class="productDetail">
            <a href="#" target="_blank">
                <img
                    src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png"
                    alt="HUAWEI Mate 40 Pro+ 5G 全网通"
                />
                <p class="name">HUAWEI Mate 40 Pro+ 5G 全网通</p>
                <p class="desc">
                    华为 HUAWEI Mate 40 Pro+ 5G 全网通华为 HUAWEI Mate 40 Pro+
                    5G 全网通
                </p>
                <p class="price">23333</p>
            </a>
        </div>
        <div class="productDetail">
            <a href="#" target="_blank">
                <img
                    src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png"
                    alt="HUAWEI Mate 40 Pro+ 5G 全网通"
                />
                <p class="name">HUAWEI Mate 40 Pro+ 5G 全网通</p>
                <p class="desc">
                    华为 HUAWEI Mate 40 Pro+ 5G 全网通华为 HUAWEI Mate 40 Pro+
                    5G 全网通
                </p>
                <p class="price">23333</p>
            </a>
        </div>
        <div class="productDetail">
            <a href="#" target="_blank">
                <img
                    src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png"
                    alt="HUAWEI Mate 40 Pro+ 5G 全网通"
                />
                <p class="name">HUAWEI Mate 40 Pro+ 5G 全网通</p>
                <p class="desc">
                    华为 HUAWEI Mate 40 Pro+ 5G 全网通华为 HUAWEI Mate 40 Pro+
                    5G 全网通
                </p>
                <p class="price">23333</p>
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.productItem {
    display: flex;
    justify-content: space-between;
}
.productDetail {
    width: 23.4rem;
    height: 35.2rem;
    background-color: #fafafa;
    border-top: 0.1rem solid #ffa500;
    &:nth-child(2) {
        border-color: #008000;
    }
    &:nth-child(3) {
        border-color: #00f;
    }
    &:nth-child(4) {
        border-color: #f00;
    }
    &:nth-child(5) {
        border-color: #008080;
    }
    &:hover {
        & img {
            opacity: 1;
        }
    }
    & a {
        text-decoration: none;
        display: block;
        font-size: 1.4rem;
        text-align: center;
        & img {
            width: 16rem;
            height: 16rem;
            opacity: 0.8;
            margin: 3.7rem;
        }
        & .desc {
            font-size: 1.2rem;
            color: #b0b0b0;
            margin: 1.5rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        & .price {
            color: #1baeae;
        }
    }
}
</style>
