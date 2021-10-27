<script setup>
import { ref, computed } from "vue"
import { useStore } from "vuex"
import Header from "../components/Header.vue"
import Topbar from "../components/Topbar.vue"
const store = useStore()
store.dispatch("loadShoppingCart")
store.dispatch("loadAddress")
let tableData = store.state.shoppingCart
let address = store.state.address
let goodsCheckList = ref([])
let checkAddress = ref({
    name: "未选择",
    address: "",
})
let remarks = ref("")
let totalPrice = computed(() => {
    let price = 0
    goodsCheckList.value.forEach(item => {
        price += item.price * item.count
    })
    return price
})
// console.log(totalPrice.value)
const changeAddress = data => {
    address.forEach(item => {
        if (item.addressId === data) {
            checkAddress.value.name = item.name
            checkAddress.value.address = `${item.name} ${item.province} ${item.city} ${item.address} ${item.phone} ${item.postalcode}`
        }
    })
}
const select = (selection, row) => {
    goodsCheckList.value = selection
}
</script>
<template>
    <div>
        <Topbar></Topbar>
        <Header></Header>
        <div class="goods-list-container">
            <el-alert
                title="小提示"
                type="warning"
                show-icon
                description="请点击商品前的选择框，选择购物车中的商品，点击付款即可。"
            ></el-alert>
            <el-table
                :data="tableData"
                style="width: 100%"
                border
                ref="selection"
                size="large"
                @selection-change="select"
                empty-text="您的购物车没有商品，请先添加商品到购物车再点击购买"
            >
                <el-table-column type="selection" width="55" />
                <el-table-column label="图片">
                    <template #default="scope">
                        <img :src="scope.row.img" style="width: 5rem" alt />
                    </template>
                </el-table-column>
                <el-table-column label="标题" prop="title" />
                <el-table-column label="套餐" prop="package" />
                <el-table-column label="数量" prop="count" />
                <el-table-column label="价格" prop="price" />
            </el-table>
            <div class="address-container">
                <h3>收货人信息</h3>
                <div class="address-box">
                    <div class="address-check">
                        <div class="address-check-name">
                            <span>
                                <i class="el-icon-info"></i>
                                {{ checkAddress.name }}
                            </span>
                        </div>
                        <div class="address-detail">
                            <p>{{ checkAddress.address }}</p>
                        </div>
                    </div>
                    <el-collapse accordion>
                        <el-collapse-item name="选择地址">
                            <template #title>
                                <span class="adress">选择地址</span>
                            </template>
                            <p slot="content">
                                <el-radio-group
                                    vertical
                                    size="large"
                                    @change="changeAddress"
                                >
                                    <el-radio
                                        :label="item.addressId"
                                        v-for="(item, index) in address"
                                        :key="index"
                                    >
                                        <span
                                            >{{ item.name }}
                                            {{ item.province }} {{ item.city }}
                                            {{ item.address }} {{ item.phone }}
                                            {{ item.postalcode }}</span
                                        >
                                    </el-radio>
                                </el-radio-group>
                            </p>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
            <div class="remarks-container">
                <h3>备注</h3>
                <el-input
                    v-model="remarks"
                    size="large"
                    placeholder="在这里填写备注信息"
                    class="remarks-input"
                ></el-input>
            </div>
            <div class="invoices-container">
                <h3>发票信息</h3>
                <p>该商品不支持开发票</p>
            </div>
            <div class="pay-container">
                <div class="pay-box">
                    <p>
                        <span>提交订单应付总额：</span>
                        <span class="money">
                            ￥{{ totalPrice.toFixed(2) }}
                        </span>
                    </p>
                    <div class="pay-btn">
                        <router-link to="/pay">
                            <el-button type="error" size="large"
                                >支付订单</el-button
                            >
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.goods-list-container {
    width: 120rem;
    margin: 0 auto;
}
.adress {
    margin-left: 2rem;
}
.el-alert {
    margin: 2rem 0;
}
.address-container {
    margin-top: 1.5rem;
}
.address-box {
    margin-top: 1.5rem;
    padding: 1.5rem;
    border: 0.1rem #ccc dotted;
}
.address-check {
    margin: 1.5rem 0;
    height: 3.6rem;
    display: flex;
    align-items: center;
}
.address-check-name {
    width: 12rem;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #ccc;
}
.address-check-name span {
    width: 12rem;
    height: 3.6rem;
    font-size: 1.4rem;
    line-height: 3.6rem;
    text-align: center;
    color: #fff;
    background-color: #f90013;
}
.address-detail {
    padding-left: 1.5rem;
    font-size: 1.4rem;
    color: #999999;
}
.remarks-container {
    margin: 1.5rem 0;
}
.remarks-input {
    margin-top: 1.5rem;
}
.invoices-container p {
    font-size: 1.2rem;
    line-height: 3rem;
    color: #999;
}
.pay-container {
    margin: 1.5rem;
    display: flex;
    justify-content: flex-end;
}
.pay-box {
    font-size: 1.8rem;
    font-weight: bolder;
    color: #495060;
}
.money {
    font-size: 2.6rem;
    color: #f90013;
}
.pay-btn {
    margin: 1.5rem 0;
    display: flex;
    justify-content: flex-end;
}
</style>
<style>
.el-collapse-item__content {
    padding: 0 2rem;
}
</style>
