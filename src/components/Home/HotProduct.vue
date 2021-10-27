<script setup>
import { useStore } from "vuex"
const store = useStore()
store.dispatch("loadHot")
const hot = store.state.hotGoodsList
</script>
<template>
    <div class="item-class">
        <div class="item-class-head">
            <Icon name="remen" size="3rem" />
            <span class="item-class-title">热门商品</span>
            <ul>
                <li v-for="(item, index) in hot.link" :key="index">
                    <a href="#">{{ item }}</a>
                </li>
            </ul>
        </div>
        <div
            class="item-class-content"
            v-for="(item, index) in hot.detail"
            :key="index"
        >
            <div class="item-content-top">
                <div class="item-big-img">
                    <img :src="item.bigImg" alt />
                </div>
                <div class="item-four-img">
                    <div
                        class="item-four-detail"
                        v-for="(subItem, index) in item.itemFour"
                        :key="index"
                    >
                        <div class="item-four-detail-text">
                            <p class="pt_bi_tit pt_bi_tit-eat">
                                {{ subItem.title }}
                            </p>
                            <p class="pt_bi_promo">{{ subItem.intro }}</p>
                        </div>
                        <div class="item-four-detail-img">
                            <router-link to="/">
                                <img :src="subItem.img" alt />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-content-bottom">
                <div
                    class="item-content-bottom-img"
                    v-for="(subImg, index) in item.itemContent"
                    :key="index"
                >
                    <router-link to="/">
                        <img :src="subImg" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.item-class {
    width: 100%;
    height: 47rem;
    margin-top: 3.5rem;
    background-color: $fg-color;
    padding-bottom: 50rem;
}
.item-class-head {
    width: 100%;
    height: 5rem;
    background-color: $fg-color;
    svg {
        @include icon-pos;
    }
    ul {
        list-style: none;
        float: right;
        margin-right: 3rem;
        line-height: 5rem;
    }
    a {
        padding: 0.6rem;
        margin-left: 1.5rem;
        font-size: 1.2rem;
        background-color: $green-text-color;
        border: 0.1rem solid $green-text-color;
        text-decoration: none;
        color: $fg-color;
        border-radius: 10rem;
        &:hover {
            border: 0.1rem solid $fg-color;
        }
    }
    li {
        float: left;
    }
}
.item-class-title {
    font-weight: 600;
    font-size: 2rem;
    line-height: 5rem;
    color: $normal-text-color;
    margin-left: 0.5rem;
}
.item-class-content {
    cursor: pointer;
    border-right: 0.1rem solid #ccc;
    float: left;
    margin-left: 0.5rem;
    &:nth-child(odd) {
        border: none;
    }
}
.item-content-top {
    width: 100%;
    height: 26rem;
}
.item-big-img {
    width: 17rem;
    overflow: hidden;
    float: left;
    img {
        width: 16.6rem;
        height: 26rem;
        margin-left: 0rem;
        transition: margin-left 0.3s;
    }
    &:hover {
        img {
            margin-left: -1.5rem;
            transition: margin-left 0.3s;
        }
    }
}
.item-four-img {
    width: 42rem;
    float: left;
}
.item-four-detail {
    width: 21rem;
    height: 15rem;
    margin-left: -0.1rem;
    float: left;
    img {
        margin-left: 0rem;
        transition: margin-left 0.3s;
    }
    &:hover {
        img {
            margin-left: -0.6rem;
            transition: margin-left 0.3s;
        }
    }
    &:first-child {
        border-right: 0.1rem solid #ccc;
        border-bottom: 0.1rem solid #ccc;
    }
    &:last-child {
        border-top: 0.1rem solid #ccc;
        border-left: 0.1rem solid #ccc;
    }
}
.item-four-detail-text {
    width: 5rem;
    margin-left: 0.5rem;
    margin-top: 1.5rem;
    float: left;
}
.item-four-detail-img {
    width: 12.6rem;
    margin-top: 1.5rem;
    overflow: hidden;
    float: left;
    img {
        margin-left: 0.5rem;
        width: 12rem;
    }
}
.pt_bi_tit {
    font-weight: bold;
    font-size: 1.2rem;
    color: #006633;
}
.pt_bi_promo {
    color: $secondary-text-color;
}
.item-content-bottom {
    width: 100%;
    margin-top: 5rem;
}
.item-content-bottom-img {
    width: 18.6rem;
    margin-right: 1.2rem;
    overflow: hidden;
    float: left;
    img {
        margin-left: 0;
        transition: margin-left 0.3s;
    }
    &:hover {
        img {
            margin-left: -1.5rem;
            transition: margin-left 0.3s;
        }
    }
}
</style>
