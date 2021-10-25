<template>
    <footer>
        <div class="footer-top">
            <el-row class="footer-warpper">
                <el-col :xs="12" :sm="3" :md="2" :lg="2">
                    <div class="single-footer">
                        <h2>My Account</h2>
                        <ul>
                            <li>
                                <a href="my-account.html">My Account</a>
                            </li>
                            <li>
                                <a href="#">Log in</a>
                            </li>
                            <li>
                                <a href="cart.html">My Cart</a>
                            </li>
                            <li>
                                <a href="wishlist.html">My Wishlist</a>
                            </li>
                            <li>
                                <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                                <a href="#">Userinfor</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :xs="12" :sm="3" :md="2" :lg="2">
                    <div class="single-footer">
                        <h2>Support</h2>
                        <ul>
                            <li>
                                <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Delivery</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Sale products</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col
                    :xs="12"
                    :sm="4"
                    :md="2"
                    :lg="2"
                    hidden-sm-and-down
                    hidden-xs-only
                >
                    <div class="single-footer">
                        <h2>Information</h2>
                        <ul>
                            <li>
                                <a href="#">Sitemap</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Your Account</a>
                            </li>
                            <li>
                                <a href="#">Advanced</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="contact-us.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col
                    :xs="12"
                    :sm="6"
                    :md="2"
                    :lg="2"
                    hidden-sm-and-down
                    hidden-xs-only
                >
                    <div class="single-footer">
                        <h2>Customer</h2>
                        <ul>
                            <li>
                                <a href="#">roduct Recall</a>
                            </li>
                            <li>
                                <a href="#">Gift Vouchers</a>
                            </li>
                            <li>
                                <a href="#">Exchanges</a>
                            </li>
                            <li>
                                <a href="#">Shipping</a>
                            </li>
                            <li>
                                <a href="#">Gift Vouchers</a>
                            </li>
                            <li>
                                <a href="#">Help &amp; FAQs</a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :xs="12" :sm="6" :md="4" :lg="4">
                    <div class="single-footer">
                        <h2>Contact Us</h2>
                        <div class="address-info">
                            <p>
                                <strong>Address:</strong>
                                <span
                                    >123 Main Street, Anytown, CA 12345
                                    USA.</span
                                >
                            </p>
                            <p>
                                <strong>Phone:</strong>
                                <span>8801973 - 833 508</span>
                            </p>
                            <p>
                                <strong>Fax:</strong>
                                <span>(800) 123 456 789</span>
                            </p>
                            <p>
                                <strong>Email:</strong>
                                <span>
                                    <a href="mailto:admin@bootexperts.com"
                                        >admin@bootexperts.com</a
                                    >
                                </span>
                            </p>
                        </div>
                        <div class="banner-footer">
                            <img src="img/add/menuadd.jpg" alt="GreenTech" />
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </footer>
</template>
<style scoped lang="scss">
footer {
    background: #e7e7e7 none repeat scroll 0 0;
    padding-top: 2rem;
}
.single-footer {
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
                content: "➕";
                font-size: 1.2rem;
                padding-right: 8 px;
            }
        }
    }
}
</style>
