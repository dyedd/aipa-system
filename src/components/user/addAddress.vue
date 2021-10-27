<script setup>
import { useStore } from "vuex"
import { ref, reactive } from "vue"
import { ElMessage } from "element-plus"
import "element-plus/es/components/message/style/css"
const store = useStore()
let modal = ref(false)
let formData = reactive({
    name: "",
    address: "",
    phone: "",
    postalcode: "",
    province: "天津市",
    city: "天津市",
    area: "滨海新区",
})
let form = ref(null)
const checkphone = (rule, value, callback) => {
    if (value === "") {
        callback("手机号不能为空")
    } else if (!value.test(/^1[3|4|5|7|8][0-9]{9}$/)) {
        callback(new Error("手机号不对"))
    } else {
        callback()
    }
}
const ruleInline = {
    name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
    address: [{ required: true, message: "请输入地址", trigger: "blur" }],
    postalcode: [
        { required: true, message: "请输入邮政编码", trigger: "blur" },
    ],
    phone: [{ required: true, validator: checkphone, trigger: "blur" }],
}
const add = () => {
    form.value.validate(valid => {
        if (valid) {
            store.commit("ADD_USER_ADDRESS", formData)
            ElMessage({
                message: "添加成功",
                type: "success",
            })
        }
    })
}
</script>
<template>
    <div class="add-container">
        <el-form :model="formData" :ref="form" :rules="ruleInline">
            <el-form-item label="收货人" prop="name">
                <el-input
                    v-model="formData.name"
                    size="large"
                    autocomplete="off"
                ></el-input>
            </el-form-item>
            <el-form-item label="收件地区">
                <el-col :span="8">
                    <el-form-item prop="address">
                        <el-input
                            v-model="formData.province"
                            size="large"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="address">
                        <el-input
                            v-model="formData.city"
                            size="large"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="address">
                        <el-input
                            v-model="formData.area"
                            size="large"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="收件地址" prop="address">
                <el-input
                    v-model="formData.address"
                    size="large"
                    autocomplete="off"
                ></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
                <el-input
                    v-model="formData.phone"
                    size="large"
                    autocomplete="off"
                ></el-input>
            </el-form-item>
            <el-form-item label="邮政编码" prop="postalcode">
                <el-input
                    v-model="formData.postalcode"
                    size="large"
                    autocomplete="off"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="add">添加地址</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style lang="scss" scoped>
.add-container {
    margin: 1.5rem auto;
    width: 60%;
    min-width: 60rem;
}
</style>
