import type { ColumnProps } from '@/components/global/m-table/index.d.ts';
import type { VNode, h } from 'vue';

declare namespace $component {
    // interface column extends ColumnProps {}
    export type column = ColumnProps;
    export type h = h;
}
