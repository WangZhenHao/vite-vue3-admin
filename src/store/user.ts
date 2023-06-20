import { defineStore } from 'pinia';
import { getMenuList } from '@api/login';
import addRouter from '@router/addRouter';

type getMenuListPrams = Parameters<typeof getMenuList>[0];

function toMakeTree(data, pid: string) {
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

function listSort(arr, sortName, twoSortName) {
    let tem = null,
        len = arr.length;
    for (let i = 0; i < len; i++) {
        const item = arr[i][twoSortName];
        if (item && item.length) {
            listSort(item, sortName);
        }
        for (let j = 0; j < len - 1; j++) {
            if (
                (arr[j][sortName] as string | number) >
                (arr[j + 1][sortName] as string | number)
            ) {
                tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }
    return arr;
}

export default defineStore('user', {
    state() {
        return {
            menuList: <type.menu[]>[],
        };
    },
    actions: {
        loginOut() {
            $tools.clearLocalStorage();
            this.menuList = [];
        },
        checkLogin() {
            const userInfo = $tools.getLocalStorage('userInfo');
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
        login(params: getMenuListPrams) {
            return new Promise((resolve, reject) => {
                getMenuList(params)
                    .then((res) => {
                        const result = res.result;
                        $tools.setLocalStorage('userInfo', result);
                        // console.log(result.)
                        // this.menuList = toMakeTree(result.list, "0");
                        // addRouter(result.list);
                        // resolve(this.menuList);
                    })
                    .catch(() => {
                        reject();
                    });
            });
        },
    },
});
