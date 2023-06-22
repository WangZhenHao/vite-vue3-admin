<template>
    <div>啊水水</div>
</template>
<script setup lang="ts">
import { getMenuList } from '@api/login/index';
// import { ref } from 'vue';
// const list = ref()

function createInit() {
    getMenuList().then((res) => {
        console.log(res);
    });
}

createInit();
</script>
