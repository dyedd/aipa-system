<template>
    <footer>
        <div class="footer-top">
            <el-row class="footer-warpper">
                <el-col :xs="24" :sm="6" :md="4" :lg="4">
                    <div class="single-footer">
                        <h2>我的账号</h2>
                        <ul>
                            <li>
                                <a href="my-account.html">账号主页</a>
                            </li>
                            <li>
                                <a href="#">登录</a>
                            </li>
                            <li>
                                <a href="cart.html">购物车</a>
                            </li>
                            <li>
                                <a href="wishlist.html">我的愿望清单</a>
                            </li>
                            <li>
                                <a href="checkout.html">付款</a>
                            </li>
                            <li>
                                <a href="#">我的信息</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="6" :md="4" :lg="4">
                    <div class="single-footer">
                        <h2>支持</h2>
                        <ul>
                            <li>
                                <a href="about-us.html">关于我们</a>
                            </li>
                            <li>
                                <a href="#">职业</a>
                            </li>
                            <li>
                                <a href="#">交货</a>
                            </li>
                            <li>
                                <a href="#">隐私策略</a>
                            </li>
                            <li>
                                <a href="#">职业</a>
                            </li>
                            <li>
                                <a href="#">销售产品</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="8"
                    :md="4"
                    :lg="4"
                    hidden-sm-and-down
                    hidden-xs-only
                >
                    <div class="single-footer">
                        <h2>信息</h2>
                        <ul>
                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                            <li>
                                <a href="#">隐私策略</a>
                            </li>
                            <li>
                                <a href="#">你的账号</a>
                            </li>
                            <li>
                                <a href="#">更多</a>
                            </li>
                            <li>
                                <a href="#">隐私策略</a>
                            </li>
                            <li>
                                <a href="contact-us.html">联系我们</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="12"
                    :md="4"
                    :lg="4"
                    hidden-sm-and-down
                    hidden-xs-only
                >
                    <div class="single-footer">
                        <h2>客户</h2>
                        <ul>
                            <li>
                                <a href="#">商品召回</a>
                            </li>
                            <li>
                                <a href="#">优惠券</a>
                            </li>
                            <li>
                                <a href="#">交流</a>
                            </li>
                            <li>
                                <a href="#">航运</a>
                            </li>
                            <li>
                                <a href="#">优惠券s</a>
                            </li>
                            <li>
                                <a href="#">Help &amp; FAQs</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="8">
                    <div class="single-footer">
                        <h2>联系我们</h2>
                        <div class="address-info">
                            <p>
                                <strong>地址:</strong>
                                <span>
                                    123 Main Street, Anytown, CA 12345 USA.
                                </span>
                            </p>
                            <p>
                                <strong>电话:</strong>
                                <span>8801973 - 833 508</span>
                            </p>
                            <p>
                                <strong>Fax:</strong>
                                <span>(800) 123 456 789</span>
                            </p>
                            <p>
                                <strong>邮箱:</strong>
                                <span>
                                    <a href="mailto:dye233@88.com"
                                        >dye233@88.com</a
                                    >
                                </span>
                            </p>
                        </div>
                        <div class="banner-footer">
                            <img
                                src="https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/menuadd.jpg"
                                alt="GreenTech"
                            />
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="footer-bottom">
            <el-row class="footer-warpper">
                <el-col :span="24">
                    <el-backtop />
                    <div class="copy-right-area">
                        <p class="copy-right">
                            © Copyright 2021. All Rights Reserved
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </footer>
</template>
<style scoped lang="scss">
ul {
    list-style: none;
    a {
        text-decoration: none;
    }
}
footer {
    background: #e7e7e7 none repeat scroll 0 0;
    padding-top: 2rem;
    margin-top: 2rem;
}
.footer-warpper {
    margin: 0 auto;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 120rem;
}
.single-footer {
    /* padding: 0 2.5rem; */
    h2 {
        color: #3c3c3c;
        font-size: 1.4rem;
        margin: 3.5rem 0 2rem;
        text-transform: uppercase;
        font-weight: 700;
    }
    ul li {
        margin-bottom: 1rem;
        a {
            color: #000;
            line-height: 2rem;
            position: relative;
            text-transform: capitalize;
            display: block;
            font-weight: 400;
            &::before {
                color: #000;
                content: "🞂";
                font-size: 1.2rem;
                padding-right: 8 px;
            }
            &:hover {
                color: #39bf3e;
            }
        }
    }
}
.address-info p {
    line-height: 1.9rem;
    margin-bottom: 0.8rem;
    strong {
        color: #000;
        float: left;
        font-weight: 500;
        min-width: 7rem;
    }
    span {
        color: #000;
        overflow: hidden;
        padding-top: 0.5rem;
        font-weight: 300;
    }
    a {
        color: #000;
        text-decoration: none;
        &:hover {
            color: #39bf3e;
        }
    }
}
.banner-footer {
    border: 0.3rem solid #fff;
    margin-top: 2rem;
    overflow: hidden;
}
.footer-bottom {
    padding: 2rem 0;
}
.copy-right-area {
    text-align: center;
    p.copy-right {
        margin-bottom: 0;
        color: #000;
        font-weight: 300;
    }
}
</style>
