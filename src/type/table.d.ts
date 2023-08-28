// import type { ColumnProps } from '@/components/global/m-table/index.d.ts';
// import type { VNode, h } from 'vue';

// 如果import引入，会被认为是一个本地模块，而不是全局模块，使用import()语法可以解决
declare namespace $component {
    export type column =
        import('@/components/global/m-table/index.d.ts').ColumnProps;
    export type h = import('vue').h;
}
