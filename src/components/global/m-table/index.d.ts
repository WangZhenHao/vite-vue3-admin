import type { VNode, h } from 'vue';
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';

// declare type CI<T> = {
//     column: TableColumnCtx<T>;
//     $index: number;
// };

export interface typeScrope {}

export interface ColumnProps extends Partial<TableColumnCtx<any>> {
    slot?: string;
    render?: (fn: typeof h, scrope: any) => VNode;
}

export type renderFn = typeof h;
