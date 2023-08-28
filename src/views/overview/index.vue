<template>
    <div class="text-cyan-800 font-bold">我的概况</div>
    <m-table :data="tableData" :columns="columns">
        <template #action="scope">
            <el-button>编辑</el-button>
            {{ scope.row.name }}
        </template>
        <template #other>
            <span>哈哈哈</span>
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
        width: '500',
    },
    {
        prop: 'name',
        label: '姓名',
        width: '200',
    },
    {
        prop: 'state',
        label: '州',
        width: '200',
    },
    {
        prop: 'city',
        label: '城市',
        width: '200',
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
        slot: 'other',
    },
]);
</script>
