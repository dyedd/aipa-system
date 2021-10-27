<script setup>
import { ref } from "vue"
const tableData = [
    {
        date: "2016-05-03",
        goods_id: "1529931938150",
        count: 1,
        img: "static/img/goodsDetail/pack/1.jpg",
        package: "4.7英寸-深邃蓝",
        price: 28,
        title: "苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳",
    },
    {
        date: "2016-05-03",
        goods_id: "1529931938150",
        count: 1,
        img: "static/img/goodsDetail/pack/1.jpg",
        package: "4.7英寸-深邃蓝",
        price: 28,
        title: "苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳",
    },
    {
        date: "2016-05-03",
        goods_id: "1549931938150",
        count: 1,
        img: "static/img/goodsDetail/pack/1.jpg",
        package: "4.7英寸-深邃蓝",
        price: 28,
        title: "苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳",
    },
    {
        date: "2016-05-03",
        goods_id: "1539931938150",
        count: 1,
        img: "static/img/goodsDetail/pack/1.jpg",
        package: "4.7英寸-深邃蓝",
        price: 28,
        title: "苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳",
    },
]
const handleDelete = (index, row) => {
    console.log(index, row)
}
</script>
<template>
    <el-table style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column label="图片" prop="img" />
        <el-table-column label="标题" prop="title" />
        <el-table-column label="套餐" prop="package" />
        <el-table-column label="数量" prop="count" />
        <el-table-column label="价格" prop="price" />
        <el-table-column align="right">
            <template #default="scope">
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                >
            </template>
        </el-table-column>
    </el-table>
</template>
