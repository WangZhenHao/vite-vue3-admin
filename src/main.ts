import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';

import 'element-plus/dist/index.css';
import '@css/common.css';
import '@css/resetElment.css';
import globalProperties from '@js/globalProperties';
import '@js/globalFn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(createPinia());
app.mount('#app');
globalProperties(app);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

console.log(import.meta.env);
