import type { App } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import pageLayout from '@/components/page-layout/index.vue';
import pageTable from '@/components/page-table/index.vue';

function globalComponents(app: App) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component);
    }

    app.component('pageLayout', pageLayout);
    app.component('pageTable', pageTable);
}
export default globalComponents;
