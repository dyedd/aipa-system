<template>
    <div class="item-class">
        <div class="item-class-head item-class-eat-head">
            <span class="item-class-title">热门商品</span>
            <ul>
                <li v-for="(item, index) in 6" :key="index">
                    <a href="#">休闲零食</a>
                </li>
            </ul>
        </div>
        <div class="item-class-content" v-for="(i, index) in 2" :key="index">
            <div class="item-content-top">
                <div class="item-big-img">
                    <img
                        src="https://powerdos.github.io/Mall-Vue/static/img/index/eat/item-eat-1-1.jpg"
                        alt
                    />
                </div>
                <div class="item-four-img">
                    <div
                        class="item-four-detail"
                        v-for="(subItem, index) in 4"
                        :key="index"
                    >
                        <div class="item-four-detail-text">
                            <p class="pt_bi_tit pt_bi_tit-eat">粮油调味</p>
                            <p class="pt_bi_promo">买2免1</p>
                        </div>
                        <div class="item-four-detail-img">
                            <a>
                                <img
                                    src="https://powerdos.github.io/Mall-Vue/static/img/index/eat/item-eat-1-2.jpg"
                                    alt
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-content-bottom">
                <div
                    class="item-content-bottom-img"
                    v-for="(subImg, index) in 3"
                    :key="index"
                >
                    <a>
                        <img
                            src="https://powerdos.github.io/Mall-Vue/static/img/index/eat/item-eat-1-6.jpg"
                        />
                    </a>
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
    background-color: #fff;
}
.item-class-head {
    width: 100%;
    height: 5rem;
    background-color: #fff;
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
        background-color: #39bf3e;
        border: 0.1rem solid #39bf3e;
        text-decoration: none;
        color: #fff;
        &:hover {
            border: 0.1rem solid #fff;
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
    color: #000;
    margin-left: 1.5rem;
}
.item-class-content {
    width: 50%;
    cursor: pointer;
    border-right: 0.1rem solid #ccc;
    float: left;
    &:nth-child(odd) {
        border: none;
    }
}
.item-content-top {
    width: 100%;
    height: 26rem;
}
.item-big-img {
    width: 16.6rem;
    height: 26rem;
    overflow: hidden;
    float: left;
    img {
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
    width: 42.3rem;
    margin-left: 0.9rem;
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
    color: #4488a7;
}
.pt_bi_tit-eat {
    color: #009688;
}
.pt_bi_promo {
    color: #00695c;
}
.item-content-bottom {
    width: 100%;
    margin-top: 0.8rem;
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
