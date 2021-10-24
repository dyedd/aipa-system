<script setup></script>
<template>
    <el-container>
        <el-header>
            <el-row justify="space-between">
                <el-col :span="6">
                    <p class="welcome-mes">欢迎来到利民宝 ！</p>
                </el-col>
                <el-col :span="6" class="right-info">
                    <el-button type="text">
                        <Icon
                            name="User"
                            color="#fff"
                            size="1.6rem"
                            align="-.3rem"
                        /><span class="right-info-item">登录</span>
                    </el-button>
                    <el-button type="text"
                        ><span class="right-info-item">注册</span></el-button
                    >
                    <el-button type="text">
                        <Icon
                            name="cart"
                            color="#fff"
                            size="1.6rem"
                            style="margin-left: 0.25rem"
                        /><span class="right-info-item">购物车 (0)</span>
                    </el-button>
                </el-col>
            </el-row>
        </el-header>
    </el-container>
</template>
<style lang="scss" scoped>
.el-container {
    width: 100%;
    background-color: #000;
}
.el-header {
    height: 3.6rem;
    line-height: 3.6rem;
    width: 120rem;
    margin: 0 auto;
    padding: 0 !important;
}
.welcome-mes {
    font-size: 1.2rem;
    color: #fff;
}
.right-info {
    line-height: 3.6rem;
    height: 3.6rem;
}
.right-info-item {
    color: #fff;
    border-right: 0.1rem solid #fff;
    padding: 0 1rem;
}
.right-info > button:last-child {
    .right-info-item {
        padding: 0 0.5rem !important;
        border: none;
    }
}
.el-button {
    min-height: 3.6rem !important;
    padding: 0;
}
.el-button + .el-button {
    margin-left: 0 !important;
}
</style>
