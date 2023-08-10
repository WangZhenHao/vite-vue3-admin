<template>
    <div>
        <m-table :data="tableData" :columns="columns"></m-table>
    </div>
</template>
<script lang="ts" setup>
import { getRoleList } from '@api/system/roleList';
import { ref } from 'vue';

type typeList = Awaited<ReturnType<typeof getRoleList>>['result'];
const tableData = ref<typeList>([]);
const columns = ref([
    {
        prop: 'code',
        label: '测试',
        align: 'center',
    },
    {
        prop: 'code',
        label: '角色代码',
    },
    {
        prop: 'id',
        label: 'id',
    },
    {
        prop: 'description',
        label: '描述',
    },
    {
        prop: 'action',
        label: '操作',
        render: (h: any, scope: any) => {
            return h('div', null, '测试');
        },
    },
]);

function init() {
    getRoleList().then((res) => {
        tableData.value = res.result;
    });
}

init();
</script>
