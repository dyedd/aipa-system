<script setup>
const props = defineProps({
    spanText: {
        type: String,
        required: true,
    },
    hText: {
        type: String,
        required: true,
    },
})
</script>
<template>
    <div class="section-heading">
        <h2>
            <span>{{ props.spanText }}</span>
            {{ props.hText }}
        </h2>
    </div>
</template>
<style lang="scss" scoped>
.section-heading {
    width: 100%;
    margin: 2rem 0 3rem;
    overflow: hidden;
    background-color: #fff;
    & h2 {
        color: #4a4a4a;
        display: inline-block;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 2.2rem;
        margin: 0;
        padding: 1.2rem 1.5rem;
        position: relative;
        text-transform: uppercase;
    }
    & span {
        color: #39bf3e;
        font-size: 1.6rem;
    }
}
</style>
