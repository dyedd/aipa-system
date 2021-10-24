<script setup>
import { reactive, ref } from "@vue/reactivity"
import { panelData } from "../../utils/panelData"
import p1 from "../../assets/carousel/1.jpg"
import p2 from "../../assets/carousel/2.jpg"
import p3 from "../../assets/carousel/3.jpg"
import { onMounted } from "@vue/runtime-core"
import SumChart from "./SumChart.vue"
const carouselItem = reactive([
    {
        url: "#",
        image: p1,
    },
    {
        url: "#",
        image: p2,
    },
    {
        url: "#",
        image: p3,
    },
])
const panel = ref(null)
const panelRight = ref(false)
const showDetail = index => {
    panel.value = index
    panelRight.value = true
}
const hideDetail = () => {
    panel.value = null
    panelRight.value = false
}
const navSide = ref()
const iteamDetail = ref()
const isActive = ref(0)
const handleBar = index => {
    isActive.value = index
}
const barItem = [
    [
        {
            image: "caigoudating",
            text: "采购管理",
        },
        {
            image: "dingdanguanli",
            text: "订单管理",
        },
        {
            image: "youhuiquan",
            text: "优惠券",
        },
    ],
    [
        {
            image: "gongyinglian",
            text: "供应管理",
        },
        {
            image: "dingdanguanli",
            text: "订单管理",
        },
        {
            image: "dianpu",
            text: "店铺管理",
        },
    ],
]

onMounted(() => {
    iteamDetail.value.style.left = navSide.value.offsetWidth + "px"
    iteamDetail.value.style.top = navSide.value.offsetTop + "px"
    window.onresize = () => {
        iteamDetail.value.style.left = navSide.value.offsetWidth + "px"
        iteamDetail.value.style.top = navSide.value.offsetTop + "px"
    }
})
</script>
<template>
    <el-row justify="space-between" align="middle" class="nav" tag="section">
        <el-col :span="6">
            <div class="nav-body">
                <div class="nav-side" ref="navSide">
                    <template v-for="(item, index) in panelData" :key="index">
                        <div
                            class="item"
                            :class="{ active: index === panel }"
                            @mouseenter="showDetail(index)"
                            @mouseleave="hideDetail"
                        >
                            <a href="#" target="_blank" class="link">
                                <img :src="item.img" alt="icon" />
                                {{ item.navTags }}
                            </a>

                            <div class="line">
                                <template
                                    v-for="(ele, i) in item.parent"
                                    :key="i"
                                >
                                    <a
                                        href
                                        target="_blank"
                                        class="second-link"
                                        >{{ ele.name }}</a
                                    >
                                </template>
                            </div>
                        </div>
                    </template>
                    <div
                        class="item-pop"
                        ref="iteamDetail"
                        v-show="panelRight"
                        @mouseleave="hideDetail"
                    >
                        <template v-for="(ele, i) in panelData" :key="i">
                            <div
                                class="item-detail"
                                v-if="i === panel"
                                @mouseenter="showDetail(i)"
                            >
                                <template
                                    v-for="(item, i) in ele.parent"
                                    :key="i"
                                >
                                    <div class="item-detail-container">
                                        <a
                                            href
                                            target="_blank"
                                            class="third-link"
                                            >{{ item.name }}</a
                                        >
                                        <div class="item-detail-line">
                                            <template
                                                v-for="(ch, j) in item.children"
                                                :key="j"
                                            >
                                                <a
                                                    target="_blank"
                                                    class="fouth-link"
                                                    >{{ ch }}</a
                                                >
                                            </template>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="12">
            <el-carousel class="swiper" height="34.5rem">
                <el-carousel-item v-for="item in carouselItem" :key="item">
                    <a :href="item.url" target="_blank">
                        <div class="banner">
                            <img :src="item.image" alt="carouse" />
                        </div>
                    </a>
                </el-carousel-item>
            </el-carousel>
            <div class="home-recommendCard">
                <a href="#" target="_blank">
                    <img
                        src="https://image.cnhnb.com/image/jpg/miniapp/2021/10/15/d2569b7b6c1c4ea4a2d43eafa6253fbe.jpg"
                        alt
                    />
                </a>
                <a href="#" target="_blank">
                    <img
                        src="https://image.cnhnb.com/image/jpg/miniapp/2021/10/20/c620f9898f8b4fcaa42a6f449afe733f.jpg"
                        alt
                    />
                </a>
            </div>
        </el-col>
        <el-col :span="5">
            <div class="box-card">
                <div class="card-header">
                    <div class="title">欢迎来到利民宝~</div>
                    <div class="title-btn">
                        <el-button type="success">请登录</el-button>
                        <el-button type="success" plain>免费注册</el-button>
                    </div>
                </div>
                <div class="tabs">
                    <div class="tabs-bar">
                        <div
                            class="bar-item"
                            :class="{ 'bar-active': isActive === index }"
                            @click="handleBar(index)"
                            v-for="(item, index) in ['买家服务', '卖家服务']"
                            :key="item"
                        >
                            {{ item }}
                        </div>
                    </div>
                    <div class="tabs-content">
                        <div
                            class="tabs-item"
                            v-for="(detail, index) in barItem[isActive]"
                            :key="detail"
                        >
                            <div class="tabs-bg">
                                <Icon :name="detail.image" size="2.5rem"></Icon>
                            </div>
                            <div class="tabs-text">{{ detail.text }}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="chart-title">交易总价</div>
                    <div class="chart-container">
                        <SumChart></SumChart>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<style lang="scss" scoped>
.nav {
    margin-top: 2rem;
}
.nav-side {
    position: relative;
    height: 54rem;
    /* width: 28.5rem; */
    background-color: #fff;
    & .item {
        cursor: pointer;
        position: relative;
        height: 6.75rem;
        width: 100%;
        z-index: 999;
        & .link {
            margin-left: 1.5rem;
            padding-top: 1.5rem;
            display: flex;
            align-items: center;
            font-family: PingFangSC-Medium;
            font-size: 1.6rem;
            color: #444;
            letter-spacing: 0;
            font-weight: 600;
            text-decoration: none;
        }
        & img {
            margin-right: 1rem;
            height: 1.6rem;
            width: 1.6rem;
        }
        &.active {
            background: #fff;
            box-shadow: -1.1rem 0 1.5rem -0.4rem rgb(0 0 0 / 10%);
            border-right: none;
        }
    }
    & .line {
        margin-top: 0.7rem;
        margin-left: 4.2rem;
        display: flex;
        align-items: center;
        & .second-link:first-child {
            margin-left: 0;
        }
        & .second-link {
            max-width: 10rem;
            margin-left: 1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            white-space: normal;
            word-break: break-all;
            font-family: PingFangSC-Regular;
            font-size: 1.2rem;
            color: #646464;
            letter-spacing: 0;
            text-decoration: none;
        }
    }
    .item-pop {
        min-height: 54rem;
        padding-bottom: 2rem;
        position: absolute;
        width: 61.6rem;
        background-color: #fff;
        box-shadow: 0 0 1.2rem 0 rgb(0 0 0 / 10%);
        z-index: 99 !important;
        & .item-detail-container {
            margin-left: 2.4rem;
            margin-right: 2.4rem;
            width: calc(100% - 4.8rem);
        }
        & .third-link {
            display: block;
            margin-top: 2.4rem;
            font-family: PingFangSC-Medium;
            font-size: 1.4rem;
            color: #444;
            letter-spacing: 0;
            font-weight: 600;
            text-decoration: none;
            &:hover {
                color: $text-hover !important;
            }
        }
    }
    .item-detail-line {
        display: flex;
        flex-wrap: wrap;
        & .fouth-link:first-child {
            margin-left: 0;
        }
        & .fouth-link {
            margin-top: 6px;
            margin-right: 10px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #646464;
            letter-spacing: 0;
            &:hover {
                color: $text-hover !important;
            }
        }
    }
}
.swiper {
    width: 60rem;
    margin-left: calc((100% - 60rem) / 2);
    position: relative;
}
.box-card {
    background-color: #fff;
    height: 54rem;
    & .card-header {
        border-bottom: 0.1rem solid #f4f4f4;
        height: 12.3rem;
    }
    & .title {
        padding-top: 2.4rem;
        font-family: PingFangSC-Regular;
        font-size: 1.6rem;
        color: #444;
        letter-spacing: 0;
        text-align: center;
    }
    & .title-btn {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
    }
    & .el-button {
        font-size: 1.4rem !important;
    }
    & .el-button:first-child {
        padding: 0.7rem 2.4rem;
    }
    & .el-button:nth-child(2) {
        padding: 0.7rem 1.7rem;
    }
}
.home-recommendCard {
    width: 60rem;
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    & > a {
        display: flex;
        height: 18rem;
        width: 29.2rem;
        cursor: pointer;
        &:hover {
            box-shadow: 0 1rem 4rem 0 rgb(18 38 64 / 15%);
        }
        & > img {
            width: 100%;
            height: 100%;
        }
    }
}
.tabs {
    margin: 0 2.7rem;
    width: calc(100% - 5.4rem);
    padding-bottom: 2rem;
    border-bottom: 1px solid #f4f4f4;
    & .tabs-bar {
        margin: 1.9rem 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & .bar-item {
            cursor: pointer;
            font-family: PingFangSC-Medium;
            font-size: 1.3rem;
            color: #444;
            letter-spacing: 0;
            text-align: center;
            font-weight: 600;
            width: 7.6rem;
            padding-bottom: 1rem;
            border-bottom: 0.2rem solid #fff;
        }
        & .bar-item.bar-active {
            border-bottom: 0.2rem solid #39bf3e !important;
        }
    }
    & .tabs-content {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & .tabs-item {
            width: 4.8rem;
            cursor: pointer;
            & .tabs-bg {
                height: 4.8rem;
                width: 4.8rem;
                border: 0.1rem solid #ececec;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &:hover {
                & .tabs-bg {
                    border: 0.1rem solid #39bf3e;
                    color: #39bf3e;
                }
                & .tabs-text {
                    color: #39bf3e;
                }
            }
            & .tabs-text {
                text-align: center;
                margin-top: 1rem;
                font-size: 1.2rem;
                color: #646464;
            }
        }
    }
}
.chart-container {
    width: 25rem;
    margin-left: auto;
    margin-right: auto;
}
.chart-title {
    margin-top: 1rem;
    margin-left: 20px;
    margin-right: 20px;
    font-family: PingFangSC-Regular;
    font-size: 1.6rem;
    color: #444;
    letter-spacing: 0;
}
</style>
