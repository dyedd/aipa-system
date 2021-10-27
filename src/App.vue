<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useStore } from "vuex"
const store = useStore()
store.dispatch("isLogin")
store.dispatch("loadPanelSort")
</script>

<template>
    <router-view></router-view>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
}
@font-face {
    font-family: "Inter";
    src: url("./assets/fonts/inter.woff2") format("woff2"),
        url("./assets/fonts/inter.woff") format("woff");
    font-weight: normal;
    font-style: normal;
}
#app {
    font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f5f5;
}
html,
body,
#app {
    min-height: 100vh;
}
.el-header {
    padding: 0 10rem !important;
}
</style>
