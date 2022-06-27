import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
  ],
  build: {
    watch: {
      include: ["src/*.*"],
    },
    outDir: "./dist",
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: Object.keys(require("./package.json").peerDependencies),
    },
  },
})
