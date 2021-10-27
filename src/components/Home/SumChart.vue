<script setup>
import { ref, computed } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import * as echarts from "echarts"
const echart = ref()
const nowDate = ref(new Date())
const dateArr = computed(() => {
    let arr = [`${nowDate.value.getDate()}`]
    for (let i = 0; i < 6; i++) {
        nowDate.value.setTime(nowDate.value.getTime() - 24 * 60 * 60 * 1000)
        arr.push(`${nowDate.value.getDate()}`)
    }
    return arr
})
// console.log(dateArr.value)
onMounted(() => {
    let myChart = echarts.init(echart.value)
    const option = {
        grid: {
            top: "15%",
            x: 50,
        },
        xAxis: {
            type: "category",
            data: dateArr.value,
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: Array.from(
                    { length: 7 },
                    v => Math.floor(Math.random() * (300 - 60)) + 60,
                ),
                type: "line",
                color: "#39bf3e",
            },
        ],
    }
    option && myChart.setOption(option)
    window.onresize = () => {
        echarts.init(echart.value).resize()
    }
})
</script>
<template>
    <div class="chart" ref="echart" style="width: 25rem; height: 180px"></div>
</template>
<style scoped>
.chart {
    width: 100%;
}
</style>
