<template>
    <el-table-column v-bind="$attrs">
        <!-- <template v-if="item.slot" #default="scope">
            <slot :name="item.slot" v-bind="scope"></slot>
        </template>
        <template v-else-if="item.render" #default="scope">
            <component :is="item.render(fn, scope)"></component>
        </template> -->
        <!-- <template v-if="$attrs.children">
            <m-table-column
                v-for="(sub, index) in $attrs.children"
                v-bind="sub"
            ></m-table-column>
        </template> -->
    </el-table-column>
</template>
<script lang="ts">
export default {
    name: 'm-table-column',
};
</script>
<script setup lang="ts">
import { h } from 'vue';
import type { ColumnProps } from './index.d.ts';
// withDefaults(
//     defineProps<{
//         // children?: ColumnProps[];
//         columns: ColumnProps[];
//     }>(),
//     {}
// );

const fn = h;
</script>
