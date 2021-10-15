<script setup>
import { computed, reactive, ref } from "@vue/reactivity"

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "#000",
    },
    size: {
        type: String,
        default: "2rem",
    },
    pointer: {
        type: Boolean,
        default: false,
    },
    align: {
        type: String,
        default: "middle",
    },
})
const iconName = computed(() => {
    return `#icon-${props.name}`
})
</script>
<template>
    <svg
        class="svg-icon"
        aria-hidden="true"
        :style="{
            verticalAlign: align,
            color: color,
            width: size,
            height: size,
            cursor: pointer ? 'pointer' : 'default',
        }"
    >
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<style>
.svg-icon {
    fill: currentColor;
    overflow: hidden;
}
</style>
