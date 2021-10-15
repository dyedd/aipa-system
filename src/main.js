import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/iconfont"
import Icon from "@/components/Icon.vue"

const app = createApp(App)
app.component("Icon", Icon)
app.use(router).mount("#app")
