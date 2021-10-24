<script setup>
import { ref } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import * as echarts from "echarts"
const echart = ref()
onMounted(() => {
    let myChart = echarts.init(echart.value)
    const option = {
        grid: {
            top: "15%",
            x: 50,
        },
        xAxis: {
            type: "category",
            data: ["A", "B", "C", "A", "B", "C", "A", "B", "C", "A", "B", "C"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: [120, 200, 150, 120, 200, 150, 120, 200, 150],
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
