import pageTable from './components/page-table/index.vue';
import pageLayout from './components/page-layout/index.vue';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        pageTable: typeof pageTable;
        pageLayout: typeof pageLayout;
    }
}
