import type { VNode } from 'vue';
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';

declare type CI<T> = {
    column: TableColumnCtx<T>;
    $index: number;
};

export interface ColumnProps extends Partial<TableColumnCtx<any>> {
    slot?: string;
    // render?: (h, params) => a
}
