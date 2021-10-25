<script setup></script>
<template>
    <div class="section-heading">
        <span>新品上架</span>
    </div>
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
    background-color: #fff;
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
.section-heading {
    width: 100%;
    margin: 2rem 0 0rem;
    overflow: hidden;
    background-color: #fff;
    span {
        font-size: 2rem;
        line-height: 5rem;
        color: #000;
        margin-left: 1.5rem;
        font-weight: 600;
    }
}
</style>
