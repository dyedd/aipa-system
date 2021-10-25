<script setup>
import { useRoute, useRouter } from "vue-router"
const route = useRoute()
const itemId = route.params.id
</script>

<template>Hello I'am {{ itemId }}</template>

<style lang="scss" scoped></style>
