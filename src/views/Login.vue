<script setup>
import { reactive, ref } from "@vue/reactivity"
import logo from "../assets/logo.png"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus"
import "element-plus/es/components/message/style/css"
const store = useStore()
const router = useRouter()
let login_rules = {
    username: [
        {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
        },
    ],
    passwd: [
        {
            required: true,
            message: "请输入密码",
            trigger: "blur",
        },
    ],
}
const checkpass = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("请再输入一次密码！"))
    } else if (value !== register.passwd) {
        callback(new Error("两次密码不一样!"))
    } else {
        callback()
    }
}
let reg_rules = {
    username: [
        {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
        },
    ],
    passwd: [
        {
            required: true,
            message: "请输入密码",
            trigger: "blur",
        },
    ],
    passwd2: [{ validator: checkpass, trigger: "blur" }],
}
let login = reactive({
    username: "",
    passwd: "",
})
let register = reactive({
    username: "",
    passwd: "",
    passwd2: "",
})
let checkpasswd = ref()
let checkauto = ref()
const tab = ref(true)
const handleTab = () => {
    tab.value = !tab.value
}
const login_form = ref(null)
const reg_form = ref(null)
const onSubmit = () => {
    if (tab.value) {
        login_form.value.validate(valid => {
            if (valid) {
                const flag = store.dispatch("login", {
                    username: login.username,
                })
                if (flag) {
                    router.push("/")
                    ElMessage({
                        message: "登录成功",
                        type: "success",
                    })
                } else {
                    ElMessage({
                        message: "用户名或者密码错误",
                        type: "warning",
                    })
                }
            } else {
                console.log("error submit!!")
                return false
            }
        })
    } else {
        reg_form.value.validate(valid => {
            if (valid) {
                const flag = store.dispatch("register", {
                    username: register.username,
                    passwd: register.passwd,
                })
                store.dispatch("autoLogin", {
                    username: register.username,
                    passwd: register.passwd,
                })
                if (flag) {
                    router.push("/")
                    ElMessage({
                        message: "注册成功!",
                        type: "success",
                    })
                } else {
                    ElMessage({
                        message: "注册失败",
                        type: "warning",
                    })
                }
            } else {
                console.log("error submit!!")
                return false
            }
        })
    }
}
</script>
<template>
    <div class="login_wrapper">
        <el-image
            :src="logo"
            :fit="contain"
            style="width: 20rem; margin-bottom: 2rem"
        ></el-image>
        <template v-if="tab">
            <el-card class="box-card">
                <h2>请登录</h2>
                <el-form
                    ref="login_form"
                    label-position="top"
                    label-width="100px"
                    :model="login"
                    size="medium"
                    :rules="login_rules"
                >
                    <el-form-item prop="username">
                        <el-input
                            v-model="login.username"
                            placeholder="用户名"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="passwd">
                        <el-input
                            v-model="login.passwd"
                            placeholder="密码"
                            show-password
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="onSubmit"
                            >登录</el-button
                        >
                        <el-checkbox
                            v-model="checkpasswd"
                            label="记住密码"
                            size="mini"
                        ></el-checkbox>
                        <el-checkbox
                            v-model="checkauto"
                            label="自动登录"
                            size="mini"
                        ></el-checkbox>
                    </el-form-item>
                    <el-divider></el-divider>
                    <el-link
                        :underline="false"
                        type="success"
                        @click="handleTab"
                        >切换到没有账号？注册新账号</el-link
                    >
                </el-form>
            </el-card>
        </template>
        <template v-else>
            <el-card class="box-card">
                <h2>请注册</h2>
                <el-form
                    ref="reg_form"
                    :rules="reg_rules"
                    label-position="top"
                    label-width="100px"
                    :model="register"
                    size="medium"
                >
                    <el-form-item prop="username">
                        <el-input
                            v-model="register.username"
                            placeholder="用户名"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="passwd">
                        <el-input
                            v-model="register.passwd"
                            show-password
                            placeholder="密码"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="passwd2">
                        <el-input
                            v-model="register.passwd2"
                            show-password
                            placeholder="重复密码"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="onSubmit"
                            >注册</el-button
                        >
                    </el-form-item>
                    <el-divider></el-divider>
                    <el-link
                        :underline="false"
                        type="success"
                        @click="handleTab"
                        >切换到已经有账号了？直接登录</el-link
                    >
                </el-form>
            </el-card>
        </template>
    </div>
</template>
<style lang="scss" scoped>
.login_wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background: #f0f2f5;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/login_bg.svg");
    background-repeat: no-repeat;
    background-position: center 11rem;
    background-size: 100%;
}
.box-card {
    width: 40rem;
    min-height: 56rem;
    padding: 3.2rem 4rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 1rem;
    text-align: center;
    h2 {
        margin-bottom: 2.4rem;
        color: rgb(94, 108, 132);
        font-size: 2.5rem;
        font-weight: 500;
    }
}
.el-button {
    width: 100%;
    margin-bottom: 1rem;
}
</style>
