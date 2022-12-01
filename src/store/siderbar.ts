import { defineStore } from 'pinia';

export default defineStore('useSidebarStore', {
  state: () => {
    return {
      isCollapse: false,
    };
  },
  actions: {
    switchCollapce() {
      this.isCollapse = !this.isCollapse;
    },
  },
});
