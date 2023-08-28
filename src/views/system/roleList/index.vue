<template>
    <div>
        <m-table :data="tableData" :columns="columns"></m-table>
    </div>
</template>
<script lang="tsx" setup>
// import { $component } from '@/type/table';
import { getRoleList } from '@api/system/roleList';
import { ref } from 'vue';

type typeList = Awaited<ReturnType<typeof getRoleList>>['result'];
const tableData = ref<typeList>([]);

const columns = ref<$component.column[]>([
    {
        prop: 'id',
        label: 'id',
    },
    {
        prop: 'name',
        label: '名称',
    },
    {
        prop: 'code',
        label: '角色代码',
    },
    {
        prop: 'description',
        label: '描述',
    },
]);

function init() {
    getRoleList().then((res) => {
        tableData.value = res.result;
    });
}

init();
</script>
