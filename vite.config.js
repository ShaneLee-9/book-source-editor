import vue from '@vitejs/plugin-vue';
import { EsLinter, linterPlugin } from 'vite-plugin-linter';
import { defineConfig } from 'vite';
import ElementPlus from 'unplugin-element-plus/vite';

export default defineConfig({
  plugins: [
    vue(),
    linterPlugin({
      linters: [new EsLinter()],
    }),
    ElementPlus({
      useSource: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/element.scss" as *;',
      },
    },
  },
});
