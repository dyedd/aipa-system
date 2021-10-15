import { defineConfig, searchForWorkspaceRoot } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/styles/element/index.scss" as *;`,
            },
        },
    },
    plugins: [
        vue(),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    fs: {
        allow: [searchForWorkspaceRoot(process.cwd())],
    },
})
