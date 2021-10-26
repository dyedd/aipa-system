<script setup>
import { hasMoreItems } from "../../../utils/items.js"
const props = defineProps({
    pageLike: Object,
})
const emits = defineEmits(["navigate"])
</script>

<template>
    <div class="navigator">
        <el-button
            size="small"
            :disabled="pageLike.page == 0"
            @click="emits('navigate', -1)"
            >上一页</el-button
        >
        <el-button
            size="small"
            :disabled="pageLike.value !== undefined && !hasMoreItems(pageLike)"
            @click="emits('navigate', 1)"
            >下一页</el-button
        >
    </div>
</template>

<style lang="scss" scoped></style>
