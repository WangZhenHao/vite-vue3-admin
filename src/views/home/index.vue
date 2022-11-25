<template>
  <el-button type="primary">测试</el-button>
  {{ msg }}
  {{ $filters.filterMoeny('10.02') }}
  <div
    :class="{'a': true, 'b': false, 'c': true}"
    class="clas"
    data="1"
  >sfdsdf</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

console.log('a');
function test() {
  const json = { a: 1, b: 2 };
  console.log(json);
}

test();
const msg = ref(1);
</script>