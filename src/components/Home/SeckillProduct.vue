<script setup>
import { computed, ref } from "@vue/reactivity"
let seckillsHours = ref(1)
let seckillsMinutes = ref(38)
let seckillsSeconds = ref(36)
const reduceTime = () => {
    seckillsSeconds.value--
    if (seckillsSeconds.value === -1) {
        seckillsSeconds.value = 59
        seckillsMinutes.value--
        if (seckillsMinutes.value === -1) {
            seckillsMinutes.value = 59
            seckillsHours.value--
        }
    }
}
const formatTime = num => {
    if (num < 10) {
        return `0${num}`
    }
    return num
}
let hours = computed(() => {
    return formatTime(seckillsHours.value)
})
let minutes = computed(() => {
    return formatTime(seckillsMinutes.value)
})
let seconds = computed(() => {
    return formatTime(seckillsSeconds.value)
})
let interval = setInterval(() => {
    reduceTime()
    if (seckillsHours.value === 0) {
        clearTimeout(interval)
    }
}, 1000)
</script>
<template>
    <div class="seckill">
        <div class="seckill-head">
            <div class="seckill-icon">
                <Icon name="shijian" size="3rem"></Icon>
            </div>
            <div class="seckill-text">
                <span class="seckill-title">
                    <s>限时秒杀</s>
                </span>
                <span class="seckill-remarks">总有你想不到的低价</span>
            </div>
            <div class="count-down">
                <span class="count-down-text">当前场次</span>
                <span class="count-down-num count-down-hour">{{ hours }}</span>
                <span class="count-down-point">:</span>
                <span class="count-down-num count-down-minute">{{
                    minutes
                }}</span>
                <span class="count-down-point">:</span>
                <span class="count-down-num count-down-seconds">{{
                    seconds
                }}</span>
                <span class="count-down-text">后结束抢购</span>
            </div>
        </div>
        <div class="seckill-content">
            <div class="seckill-item" v-for="(item, index) in 6" :key="index">
                <div class="seckill-item-img">
                    <a>
                        <img
                            src="https://powerdos.github.io/Mall-Vue/static/img/index/seckill/seckill-item1.jpg"
                        />
                    </a>
                </div>
                <div class="seckill-item-info">
                    <p>【赠小风扇】维他 柠檬茶250ml*32盒 礼品装 整箱</p>
                    <p>
                        <span class="seckill-price text-danger">
                            ￥{{ 2.5 }}
                        </span>
                        <span class="seckill-old-price">
                            <s>{{ 4 }}</s>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.seckill {
    width: 100%;
    height: 33rem;
    margin: 1.5rem auto;
}
.seckill-head {
    width: 100%;
    height: 5rem;
    background-color: $fg-color;
}
.seckill-icon {
    @include icon-pos;
    margin-right: 0.5rem;
    svg {
        animation-name: shake-clock;
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
    }
}
@keyframes shake-clock {
    0% {
        transform: rotate(-8deg);
    }
    50% {
        transform: rotate(8deg);
    }
    100% {
        transform: rotate(-8deg);
    }
}
.seckill-text {
    width: 30rem;
    height: 100%;
    float: left;
    .seckill-title {
        s {
            font-size: 2rem;
            line-height: 5rem;
            color: #000;
            font-weight: 700;
        }
    }
    .seckill-remarks {
        margin-left: 0.5rem;
        font-size: 1rem;
        color: $red-text-color;
    }
}
/*倒计时*/
.count-down {
    height: 100%;
    margin-right: 3rem;
    line-height: 5rem;
    float: right;
}
.count-down-text {
    margin: 0 0.5rem;
    color: $normal-text-color;
}
.count-down-num {
    padding: 0.3rem;
    border-radius: 50%;
    background-color: $third-text-color;
    font-size: 2.6rem;
    font-weight: bold;
    color: $fg-color;
}
.count-down-point {
    font-size: 2.6rem;
    font-weight: bold;
    color: $normal-text-color;
}
.seckill-content {
    width: 100%;
    height: 28rem;
    background: $fg-color;
}
.seckill-item {
    width: 18.3rem;
    height: 25rem;
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    box-shadow: 0rem 0rem 0.8rem #ccc;
    cursor: pointer;
    float: left;
}
.seckill-item-img {
    width: 16rem;
    height: 16rem;
    margin: 0rem auto;
    overflow: hidden;
    border-bottom: 0.1rem solid #ccc;
    img {
        width: 13rem;
        height: 13rem;
        margin-left: 1.5rem;
        margin-top: 1.5rem;
        transition: margin-top 0.3s;
    }
    &:hover {
        img {
            margin-top: 0.6rem;
            transition: margin-top 0.3s;
        }
    }
}
.seckill-item-info {
    padding: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-size: 1.2rem;
    color: $secondary-text-color;
    i {
        &:first-child {
            font-size: 1.4rem;
        }
    }
}
.seckill-price {
    margin-right: 0.5rem;
    font-size: 2.5rem;
    font-weight: bold;
}
.text-danger {
    color: $red-text-color;
}
</style>
