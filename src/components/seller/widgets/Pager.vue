<script setup>
import { ref } from "@vue/reactivity"
const props = defineProps({
    fontSize: String,
    pageLike: Object,
})

const style = ref({
    "--font-size": props.fontSize,
})
</script>

<template>
    <div class="page-panel" :style="style">
        共
        <span class="page-number">{{ pageLike.pageCounts }}</span>
        页，现在是第
        <span class="page-number">{{ pageLike.page + 1 }}</span> 页
    </div>
</template>

<style lang="scss" scoped>
.page-panel {
    &,
    .page-number {
        font-size: var(--font-size);
    }
    .page-number {
        color: $secondary-color;
    }
}
</style>
