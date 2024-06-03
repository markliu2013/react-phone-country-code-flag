import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5199
  },
  build: {
    rollupOptions: {
      output: {
        /**
         * https://juejin.cn/post/7135671174893142030
         */
        manualChunks(id, { getModuleInfo, getModuleIds }) {
          console.log(id);
          if (id.includes('svg')) {
            return 'svg';
          }
        }
      }
    }
  }
});
