<script setup>
import { useStore } from "vuex"
import { ref, reactive } from "vue"
import { ElMessage } from "element-plus"
import "element-plus/es/components/message/style/css"
const store = useStore()
store.dispatch("loadAddress")
const address = store.state.address
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
const edit = index => {
    modal.value = true
    formData.province = address[index].province
    formData.city = address[index].city
    formData.area = address[index].area
    formData.address = address[index].address
    formData.name = address[index].name
    formData.phone = address[index].phone
    formData.postalcode = address[index].postalcode
}
const editAction = () => {
    modal.value = false
    ElMessage({
        message: "修改成功",
        type: "success",
    })
}
</script>
<template>
    <div class="address-box" v-for="(item, index) in address" :key="index">
        <div class="address-header">
            <span>{{ item.name }}</span>
            <div class="address-action">
                <span @click="edit(index)">
                    <Icon name="bianji" color="#39bf3e"></Icon>修改
                </span>
                <span>
                    <el-popconfirm
                        confirm-button-text="是的"
                        cancel-button-text="不了"
                        icon="el-icon-info"
                        icon-color="red"
                        title="确定删除吗？"
                    >
                        <template #reference>
                            <Icon name="shanchu" color="#39bf3e"></Icon>删除
                        </template>
                    </el-popconfirm>
                </span>
            </div>
        </div>
        <div class="address-content">
            <p>
                <span class="address-content-title">收 货 人 :</span>
                {{ item.name }}
            </p>
            <p>
                <span class="address-content-title">收货地区:</span>
                {{ item.province }} {{ item.city }} {{ item.area }}
            </p>
            <p>
                <span class="address-content-title">收货地址:</span>
                {{ item.address }}
            </p>
            <p>
                <span class="address-content-title">邮政编码:</span>
                {{ item.postalcode }}
            </p>
        </div>
        <el-dialog v-model="modal" title="修改">
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
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="modal.value = false">取消</el-button>
                    <el-button type="primary" @click="editAction"
                        >确定</el-button
                    >
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<style lang="scss" scoped>
.address-box {
    padding: 1.5rem;
    margin: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0rem 0rem 0.5rem #ccc;
}
.address-header {
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    color: #232323;
    font-size: 1.8rem;
}
.address-content {
    font-size: 1.4rem;
}
.address-content-title {
    color: #999;
}
.address-action span {
    margin-left: 1.5rem;
    font-size: 1.4rem;
    color: $primary-color;
    cursor: pointer;
}
</style>
