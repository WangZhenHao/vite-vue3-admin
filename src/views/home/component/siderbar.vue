<template>
  <div
    :class="{'width-200': !silder.isCollapse}"
    class="silder-wrap"
  >
    <el-scrollbar>
      <el-menu
        :collapse="silder.isCollapse"
        active-text-color="#20a0ff"
        background-color="#324157"
        class="el-menu-wrap"
        router
        text-color="#bfcbd9"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <message />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-1">Option 1</el-menu-item>
          <el-menu-item index="1-2">Option 2</el-menu-item>
          <el-menu-item index="1-3">Option 3</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import useSilder from '@store/siderbar';

const silder = useSilder();
</script>
<style scoped lang="scss">
.silder-wrap {
  height: calc(100vh - 70px);
  background: #324157;
  width: 64px;

  &.width-200 {
    width: 200px;
  }
}
.el-menu-wrap:not(.el-menu--collapse) {
  width: 200px;
}
</style>
