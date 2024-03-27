<template>
    <el-table-column
        v-for="(item, index) in columns"
        v-bind="item"
        :key="index"
    >
        <template v-if="item.children && item.children.length">
            <!-- test -->
            <m-table-column
                :columns="item.children"
                :slot-list="slotList"
            ></m-table-column>
        </template>
        <template v-if="item.slot" #default="scope">
            <slot :name="item.slot"></slot>
        </template>
        <template v-else-if="item.render" #default="scope">
            <component :is="item.render(fn, scope)"></component>
        </template>
    </el-table-column>
</template>
<script lang="ts">
export default {
    name: 'm-table-column',
};
</script>
<script setup lang="ts">
import { h, onMounted, useSlots } from 'vue';
import type { ColumnProps } from './index.d.ts';
const props = withDefaults(
    defineProps<{
        // children?: ColumnProps[];
        columns: ColumnProps[];
        slotList?: {
            [key: string]: any;
        };
    }>(),
    {}
);

const fn = h;

onMounted(() => {
    console.log(props.slotList);
});
</script>
