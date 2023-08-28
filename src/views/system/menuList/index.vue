<template>
    <m-table :data="tableData" :columns="columns"></m-table>
</template>
<script setup lang="ts">
// import { $component } from '@/type/table';
import { getMenuList } from '@api/login/index';
import { ref } from 'vue';

// const list = ref()
type typeGetMenuList = Awaited<ReturnType<typeof getMenuList>>['result'];
const tableData = ref<typeGetMenuList>([]);
const columns = ref<$component.column[]>([
    {
        label: 'id',
        prop: 'id',
        align: 'center',
    },
    {
        label: '菜单名称',
        prop: 'name',
        align: 'center',
    },
    {
        label: '路径',
        prop: 'path',
        align: 'center',
        render(h: $component.h, parmas: any) {
            console.log(parmas);
            return h('span', parmas.row.path ? parmas.row.path : '--');
        },
    },
    {
        label: '图标',
        prop: 'icon',
        align: 'center',
        render(h: $component.h, parmas: any) {
            return h('span', parmas.row.icon ? parmas.row.icon : '--');
        },
    },
    {
        label: '排序值',
        prop: 'sort',
        align: 'center',
    },
]);

function createInit() {
    getMenuList().then((res) => {
        tableData.value = res.result;
    });
}

createInit();
</script>
