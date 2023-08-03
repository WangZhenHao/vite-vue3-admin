<template>
    <el-table v-bind="$attrs">
        <el-table-column
            v-for="(item, index) in columns"
            v-bind="item"
            :key="index"
        >
            <template v-if="item.slot" #default="scope">
                <slot :name="item.slot" v-bind="scope"></slot>
            </template>
        </el-table-column>
    </el-table>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import type { TableProps } from 'element-plus/lib/components/table';
import type { ColumnProps } from './index.d.ts';

interface typeProps extends TableProps<any> {
    columns: ColumnProps[];
}

const props = withDefaults(defineProps<typeProps>(), {
    columns: () => [],
    data: () => [],
    flexible: false,
    tableLayout: 'fixed',
    border: true,
});

onMounted(() => {
    console.log(props.data);
    // console.log(slots);
});
</script>
