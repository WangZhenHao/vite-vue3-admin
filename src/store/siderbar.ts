import { defineStore } from 'pinia';
import { RouteLocationNormalized } from 'vue-router';

interface ListItem {
  name: string;
  fullPath: string;
  title: string;
}

export default defineStore('useSidebarStore', {
  state: () => {
    return {
      isCollapse: false,
      tabs: <ListItem[]>[],
    };
  },
  actions: {
    switchCollapce() {
      this.isCollapse = !this.isCollapse;
    },
    addTabs(page: RouteLocationNormalized) {
      if (page.name && page.meta.title) {
        const index: number = this.tabs.findIndex((item: ListItem) => item.name === page.name);

        const newTab: ListItem = {
          name: page.name as string,
          fullPath: page.fullPath,
          title: page.meta.title as string,
        };

        if (index === -1) {
          this.tabs.unshift(newTab);
        } else if (this.tabs[index].fullPath !== page.fullPath) {
          this.tabs.splice(index, 1, newTab);
        }
      }
    },
    removeTabs(index: number) {
      // const index = this.tabs.findIndex((item: ListItem) => item.fullPath === page.fullPath);

      this.tabs.splice(index, 1);
    },
  },
});
