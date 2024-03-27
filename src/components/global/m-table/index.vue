<template>
    <!-- <el-table border v-bind="$attrs">
        <el-table-column
            v-for="(item, index) in columns"
            v-bind="item"
            :key="index"
        >
            <template v-if="item.slot" #default="scope">
                <slot :name="item.slot" v-bind="scope"></slot>
            </template>
            <template v-else-if="item.render" #default="scope">
                <component :is="item.render(fn, scope)"></component>
            </template>
        </el-table-column>
    </el-table> -->
    <!-- <el-table border v-bind="$attrs">
        <m-table-column :columns="columns"></m-table-column>
    </el-table> -->
    <el-table border v-bind="$attrs">
        <template v-for="(item, index) in columns">
            <el-table-column v-bind="item">
                <template v-if="item.slot" #default="scope">
                    <slot :name="item.slot" v-bind="scope"></slot>
                </template>
                <template v-else-if="item.render" #default="scope">
                    <component :is="item.render(fn, scope)"></component>
                </template>
                <template v-if="item.children && item.children.length">
                    <template></template>
                    <m-table-column :columns="item.children"></m-table-column>
                </template>
            </el-table-column>
        </template>
    </el-table>
</template>
<script lang="ts" setup>
import mTableColumn from './m-table-column.vue';
import { onMounted, useSlots, h } from 'vue';
import type { TableProps } from 'element-plus/lib/components/table';
import type { ColumnProps } from './index.d.ts';

interface typeProps extends Partial<TableProps<any>> {
    columns: ColumnProps[];
}

const fn = h;
const props = withDefaults(defineProps<typeProps>(), {
    columns: () => [],
});

onMounted(() => {
    // console.log(props.data);
    // console.log(useSlots());
});
</script>
