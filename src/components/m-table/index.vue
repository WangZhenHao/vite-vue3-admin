<template>
    <el-table v-bind="$attr" :data="tableData">
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
import { onMounted, useSlots, computed } from 'vue';
const slots = useSlots();

const props = defineProps({
    columns: {
        type: Array,
        default() {
            return [];
        },
    },
    tableData: {
        type: Array,
        default() {
            return [];
        },
    },
});
// const _tableData = computed(() => {
//     const arr = [];
//     props.tableData.forEach((item, index) => {
//         arr.push({
//             ...item,
//             __index: index,
//         });
//     });
//     return arr;
// });
onMounted(() => {
    // console.log(props.columns);
    console.log(slots);
});
</script>
