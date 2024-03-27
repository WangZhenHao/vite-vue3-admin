<template>
    <div class="text-cyan-800 font-bold">我的概况</div>
    <m-table :data="tableData" :columns="columns">
        <template #action>
            <div>
                <el-button>编辑</el-button>
            </div>
        </template>
        <template #city>
            <div>
                <el-button>city</el-button>
            </div>
        </template>
    </m-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
// type a = $component.h;
const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
]);
const selectHanlde = (detail: any) => {
    console.log(detail);
};
const columns = ref([
    {
        type: 'selection',
    },
    {
        prop: 'date',
        label: '日期',
    },
    {
        prop: 'state',
        label: '州',
        children: [
            {
                prop: 'name',
                label: '姓名',
            },
            {
                prop: 'city',
                label: '城市',
                // slot: 'city',
            },
        ],
    },
    {
        prop: 'action',
        label: '操作',
        fixed: 'right',
        width: '200',
        align: 'center',
        slot: 'action',
    },
    {
        label: '额外',
        fixed: 'right',
        width: '200',
        align: 'center',
        // slot: 'other',
        render(h: any, scope: any) {
            return h('span', '哈哈哈哈');
        },
    },
]);
</script>
