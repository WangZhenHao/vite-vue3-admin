import { defineStore } from 'pinia';
import { getMenuList } from '@api/login';
import * as type from '@api/login/type';

function toMakeTree(data: type.menu[], pid: string) {
  let arr = [];
  pid = pid || '0';
  for (let item of data) {
    if (item.parentId === pid) {
      let child = toMakeTree(data, item.id);
      if (child.length > 0) {
        item['child'] = child;
      }
      arr.push(item);
    }
  }

  return arr;
}

export default defineStore('user', {
  state() {
    return {
      menuList: [],
    };
  },
  actions: {
    login(params: type.getMenuListData) {
      return new Promise((resolve, reject) => {
        getMenuList(params)
          .then((res) => {
            const result = res.result;
            this.menuList = toMakeTree(result.list, '0');
            resolve(this.menuList);
          })
          .catch(() => {
            reject();
          });
      });
    },
  },
});
