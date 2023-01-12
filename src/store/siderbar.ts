import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';

export default defineStore('useSidebarStore', {
  state: () => {
    return {
      isCollapse: false,
      tabs: [],
    };
  },
  actions: {
    switchCollapce() {
      this.isCollapse = !this.isCollapse;
    },
    addTabs(page: RouteRecordRaw) {},
    removeTabs(page: RouteRecordRaw) {},
  },
});
