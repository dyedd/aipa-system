<script setup>
import Navigator from "./Navigator.vue"
import Pager from "./Pager.vue"

const props = defineProps({
    fontSize: String,
    pageLike: Object,
})

const emits = defineEmits(["navigate"])
</script>

<template>
    <div class="paged-navigator">
        <Pager :page-like="pageLike" :font-size="fontSize" />
        <Navigator
            class="navigator"
            :page-like="pageLike"
            @navigate="emits('navigate', $event)"
        />
    </div>
</template>

<style lang="scss" scoped>
.paged-navigator {
    display: flex;
    flex-direction: column;
    align-items: center;

    .navigator {
        margin-top: 0.5rem;
    }
}
</style>
