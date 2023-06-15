<template>
  <div class="page-layout">
    <div
      class="page-layout_header"
      v-if="$slots.header"
    >
      <div class="header-block">
        <slot name="header"></slot>
      </div>

      <!-- <div class="rightbtn">
                <slot name="rightbtn"></slot>
      </div>-->
    </div>
    <div
      class="page-layout_table"
      v-if="$slots.table"
    >
      <slot name="table"></slot>
    </div>
    <!-- <div v-if="$slots.default" class="page-layout_main">
            <slot></slot>
    </div>-->
    <div
      class="page-layout_footer"
      v-if="$slots.footer"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'pageLayout',
});
/**
 
 page-layout组件

   说明：
    header插槽和table插槽，header内容自适应，table的内容撑起全部屏幕，只有一个滚动条

    遇到特殊情况可以计算高度去适配；如：<page-layout style="height: calc(100% - 40px - 15px); padding-top: 0;">xxxx</page-layout>


   用法：
    <page-layout>
        <template #header>
            <el-form :inline="true">
                <u-search-item>
                    <u-date-range-picker v-model:start="startDate" />
                </u-search-item>
            </el-form>
        </template>
        <template #table>
            <table-page v-bind="consumeDetail"></table-page>
        </template>
    </page-layout>


 */
// export default {
//   name: 'PageLayout',
// };
</script>

<style lang="scss" scoped>
.page-layout {
  background: #fff;
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  flex-basis: auto;
  box-sizing: border-box;
  padding: 0 10px 0;
  border-radius: 6px;

  .page-layout_header {
    display: flex;
    .header-block {
      padding-top: 24px;
      flex: 1;
    }

    // .rightbtn {
    //     padding: 24px 0;
    //     display: flex;
    //     align-items: flex-end;
    //     justify-content: flex-end;
    // }
  }

  .page-layout_table,
  .page-layout_main {
    // margin-top: 10px;
    // display: flex;
    overflow: hidden;
    // flex-direction: column;
    flex: 1;
  }
  // ::v-deep .tabel-page-container .tabel-body-wrap {
  //     height: calc(100% - 96px);
  //     overflow: hidden;
  // }
  .page-layout_footer {
    height: 28px;
    padding-bottom: 6px;
    padding-top: 6px;
  }
}
</style>
