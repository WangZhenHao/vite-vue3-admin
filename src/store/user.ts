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

  return arr;
}

export default defineStore('user', {
  state() {
    return {
      menuList: [],
    };
  },
  //   getters: {
  //     getUserInfo(state) {
  //       const userInfo = tools.getLocalStorage('userInfo');
  //       if (state.menuList) {
  //         return state.menuList;
  //       } else if (userInfo) {
  //         state.menuList = userInfo.list;
  //         return state.menuList;
  //       } else {
  //         return null;
  //       }
  //     },
  //   },
  actions: {
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
        // debugger;
        // const userInfo = tools.getLocalStorage('userInfo');

        // if (userInfo) {
        //   this.menuList = toMakeTree(userInfo.list, '0');
        //   addRouter(userInfo.list);
        //   resolve(this.menuList);
        // } else {
        //   getMenuList(params)
        //     .then((res) => {
        //       const result = res.result;
        //       this.menuList = toMakeTree(result.list, '0');
        //       tools.setLocalStorage('userInfo', result);
        //       addRouter(userInfo.list);
        //       resolve(this.menuList);
        //     })
        //     .catch(() => {
        //       reject();
        //     });
        // }
      });
    },
  },
});
