<script setup></script>
<template>
    <div class="section-heading">
        <Icon name="xinpin" size="3rem" />
        <span>新品上架</span>
    </div>
    <div class="productItem">
        <template v-for="item in 5" :key="item">
            <div class="productDetail">
                <a href="#" target="_blank">
                    <p class="img-box">
                        <img
                            src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png"
                            alt="HUAWEI Mate 40 Pro+ 5G 全网通"
                        />
                    </p>
                    <p class="name">HUAWEI Mate 40 Pro+ 5G 全网通</p>
                    <p class="desc">
                        华为 HUAWEI Mate 40 Pro+ 5G 全网通华为 HUAWEI Mate 40
                        Pro+ 5G 全网通
                    </p>
                    <p class="price">￥6799</p>
                </a>
            </div>
        </template>
    </div>
</template>
<style lang="scss" scoped>
.productItem {
    display: flex;
    justify-content: space-between;
    background-color: $fg-color;
    padding: 0 2rem 2rem;
}

.productDetail {
    float: left;
    width: 20rem;
    background: rgba(133, 189, 255, 0.05);
    box-shadow: 0 0.6rem 1rem 0 rgba(95, 101, 105, 0.15);
    border-radius: 0.8rem;
    /* margin-right: 2.4rem; */
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    transition: all 0.2s;
    .img-box {
        text-align: center;
        margin-bottom: 1rem;
    }
    &:hover img {
        transition: all 0.2s;
        transform: scale(1.1);
    }
    img {
        width: 14.7rem;
        height: 16.65rem;
    }
    a {
        text-decoration: none;
    }
    .name {
        line-height: 2.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.4rem;
        color: #545c63;
    }
    .desc {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: $secondary-text-color;
    }
    .price {
        margin-top: 1rem;
        color: $red-text-color;
    }
}
.section-heading {
    width: 100%;
    margin: 2rem 0 0rem;
    overflow: hidden;
    background-color: $fg-color;
    svg {
        @include icon-pos;
    }
    span {
        font-size: 2rem;
        line-height: 5rem;
        color: $normal-text-color;
        margin-left: 0.5rem;
        font-weight: 600;
    }
}
</style>
