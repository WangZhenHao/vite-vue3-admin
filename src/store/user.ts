import { defineStore } from 'pinia';
import { getMenuList } from '@api/login';
import * as type from '@api/login/type';
import addRouter from '@router/addRouter';

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

  return listSort(arr, 'sort', 'child');
}

function listSort(arr: type.menu[], sortName: keyof type.menu, twoSortName: keyof type.menu = 'child'): type.menu[] {
  let tem = null,
    len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i][twoSortName] && arr[i][twoSortName].length) {
      listSort(arr[i][twoSortName], sortName);
    }
    for (let j = 0; j < len - 1; j++) {
      if (arr[j][sortName] > arr[j + 1][sortName]) {
        tem = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tem;
      }
    }
  }
  return arr;
}

// function test<T>(arr: T[], sortName: keyof T, twoSortName: keyof T) {
//   let tem = null,
//     len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (arr[i][twoSortName] && arr[i][twoSortName].length) {
//       test(arr[i][twoSortName], sortName, twoSortName);
//     }
//     for (let j = 0; j < len - 1; j++) {
//       if (arr[j][sortName] > arr[j + 1][sortName]) {
//         tem = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tem;
//       }
//     }
//   }
//   return arr;
// }

export default defineStore('user', {
  state() {
    return {
      menuList: <type.menu[]>[],
    };
  },
  actions: {
    loginOut() {
      tools.clearLocalStorage();
      this.menuList = [];
    },
    checkLogin() {
      const userInfo = tools.getLocalStorage('userInfo');
      return new Promise((resolve, reject) => {
        if (this.menuList.length) {
          resolve(null);
        } else if (userInfo) {
          this.menuList = toMakeTree(userInfo.list, '0');
          addRouter(userInfo.list);
          resolve(null);
        } else {
          reject();
        }
      });
    },
    login(params: type.getMenuListData) {
      return new Promise((resolve, reject) => {
        getMenuList(params)
          .then((res) => {
            const result = res.result;
            tools.setLocalStorage('userInfo', result);

            this.menuList = toMakeTree(result.list, '0');
            addRouter(result.list);
            resolve(this.menuList);
          })
          .catch(() => {
            reject();
          });
      });
    },
  },
});
