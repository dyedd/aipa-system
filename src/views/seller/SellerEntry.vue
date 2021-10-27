<script setup>
import { ref } from "@vue/reactivity"
import { ElMessage } from "element-plus"
import "element-plus/es/components/message/style/css"
import { useStore } from "vuex"
import { login, register } from "../../utils/sellerInfo.js"
const store = useStore()
const props = defineProps({
    registerState: Boolean,
})
const emits = defineEmits(["toLogin", "toRegister", "confirmed"])
const registerInfo = ref({
    username: "",
    location: "",
    name: "",
    description: "",
    password: "",
})
const loginInfo = ref({
    username: "",
    password: "",
})
function handleLogin() {
    emits("confirmed")
    login(loginInfo.value)
        .then(res => {
            ElMessage({
                message: "登陆成功",
                type: "success",
            })
            store.commit("SELLER_LOGIN", res)
        })
        .catch(err => {
            ElMessage({
                message: `登陆失败 ${err}`,
                type: "error",
            })
        })
}
function handleRegister() {
    emits("confirmed")
    register(registerInfo.value)
        .then(res => {
            ElMessage({
                message: "注册成功",
                type: "success",
            })
            store.commit("SELLER_LOGIN", res)
        })
        .catch(err => {
            ElMessage({
                message: `注册失败 ${err}`,
                type: "error",
            })
        })
}
</script>

<template>
    <div class="entry-contaienr">
        <div class="entry-panel">
            <div class="login" v-if="!registerState">
                <div class="form-container">
                    <el-form :model="loginInfo" label-width="120px">
                        <el-form-item label="用户名">
                            <el-input v-model="loginInfo.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="loginInfo.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="handleLogin()"
                                >确认</el-button
                            >
                            <el-button @click="emits('toRegister')"
                                >转去注册</el-button
                            >
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="register" v-if="registerState">
                <div class="form-container">
                    <el-form :model="registerInfo" label-width="120px">
                        <el-form-item label="用户名">
                            <el-input
                                v-model="registerInfo.username"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="店铺名称">
                            <el-input v-model="registerInfo.name"></el-input>
                        </el-form-item>
                        <el-form-item label="店铺地址">
                            <el-input
                                v-model="registerInfo.location"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="店铺描述">
                            <el-input
                                v-model="registerInfo.description"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="账号密码">
                            <el-input
                                v-model="registerInfo.password"
                                type="password"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                        <el-form-item class="operations">
                            <el-button type="primary" @click="handleRegister()"
                                >确认</el-button
                            >
                            <el-button @click="emits('toLogin')"
                                >转去登陆</el-button
                            >
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../components/seller/style/common.scss";
.entry-contaienr {
    .entry-panel {
        .login,
        .register {
            width: 60rem;
            .form-container {
            }
        }
    }
}
</style>
