import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

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
    dts({
      include: [
        'core/*.ts',
        'core/*.d.ts',
        'core/*.tsx',
        'core/*.vue',
      ],
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
