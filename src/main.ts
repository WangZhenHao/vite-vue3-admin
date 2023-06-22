import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';

import 'element-plus/dist/index.css';
import '@css/common.css';
import '@css/resetElment.css';
import './style.css';
import globalProperties from '@js/globalProperties';
import '@js/globalFn';
import globalComponents from '@js/globalComponents';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(createPinia());
app.mount('#app');
globalProperties(app);
globalComponents(app);
// console.log(import.meta.env);
