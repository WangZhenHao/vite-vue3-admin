import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

function resolve(src: string) {
  return path.join(__dirname, src);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@views': resolve('./src/views'),
      '@img': resolve('./src/assets/img'),
      '@js': resolve('./src/assets/js'),
      '@store': resolve('./src/store'),
      '@css': resolve('./src/assets/css'),
      '@api': resolve('./src/api'),
      '@router': resolve('./src/router'),
    },
    extensions: ['.js', '.jsx'],
  },
  server: {
    host: '0.0.0.0',
    port: 3100,
    // proxy: {
    // 	'/api': {
    // 	target: 'https://xxx.com',
    // 	  changeOrigin: true,
    // 	  rewrite: (path) => path.replace(/^\/api/, '')
    // 	},
    // }
  },
});
