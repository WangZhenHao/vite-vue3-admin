<template>
    <div>
        <m-table :data="tableData" :columns="columns">
            <template #action="scope">
                <el-button>编辑</el-button>
                {{ scope.row.name }}
            </template>
        </m-table>
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
        width: '12',
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
]);

function init() {
    getRoleList().then((res) => {
        tableData.value = res.result;
    });
}

init();
</script>
