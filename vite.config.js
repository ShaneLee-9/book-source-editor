import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import ElementPlus from 'unplugin-element-plus/vite';

export default defineConfig({
  plugins: [
    vue(),
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
