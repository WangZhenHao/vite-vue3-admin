<template>
  <el-button @click="getMenuListHanlde">点击获取</el-button>
  <a @click="getMenuListHanlde">tet</a>
  {{ msg.address }}
</template>
<script lang="ts" setup>
import { getMenuList } from '@api/login';
import * as typeLogin from '@api/login/type';
import { ref, reactive } from 'vue';

let msg = reactive<typeLogin.getMenuListRes>({
  id: '',
  address: '',
});
const getMenuListHanlde = () => {
  getMenuList({ username: 'w', password: '12' }).then((res) => {
    msg = res.result;
  });
};
</script>