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
import { onMounted, useSlots, computed } from 'vue';
import type { TableProps } from 'element-plus/lib/components/table';
import type { PropType } from 'vue';
const slots = useSlots();

interface typeProps extends TableProps<any> {
    columns?: any[];
}
const props = defineProps({
    columns: {
        type: Array as PropType<any[]>,
        default() {
            return [];
        },
    },
});
// const props = withDefaults(defineProps<typeProps>(), {
//     columns: () => [],
// });
onMounted(() => {
    // console.log(props.columns);
    console.log(slots);
});
</script>
