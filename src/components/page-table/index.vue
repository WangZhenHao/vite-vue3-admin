<template>
    <div>sdfsdfs {{ parmas }}</div>
    <page-table> </page-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface typeAttributes {
    url: string;
    methods: string;
    colums: any[];
}

export default defineComponent({
    name: 'pageTable',
    props: {
        parmas: {
            type: Object,
            default() {
                return {};
            },
        },
        attributes: {
            type: Object as PropType<typeAttributes>,
            default() {
                return {
                    url: '',
                    methods: '',
                    colums: [],
                };
            },
        },
    },
});
</script>
