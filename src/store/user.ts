import { defineStore } from 'pinia';
import { userLoginIn } from '@api/login';
import addRouter from '@router/addRouter';
import { toMakeTree } from '@js/utils/createTree';

type userLoginInPrams = Parameters<typeof userLoginIn>[0];
type menuList = Awaited<ReturnType<typeof userLoginIn>>['result']['list'][0];

// interface typeTree {
//     parentId?: string;
//     id: string;
//     child?: any[];
//     sort?: any;
// }
// function toMakeTree<T extends typeTree>(data: T[], pid: string): T[] {
//     let arr = [];
//     pid = pid || '0';
//     for (let item of data) {
//         if (item.parentId === pid) {
//             let child = toMakeTree(data, item.id);
//             if (child.length > 0) {
//                 item['child'] = child;
//             }
//             arr.push(item);
//         }
//     }

//     return listSort(arr, 'sort', 'child');
// }

// function listSort<T>(arr: T[], sortName: keyof T, childName: keyof T): T[] {
//     let tem = null,
//         len = arr.length;
//     for (let i = 0; i < len; i++) {
//         const item = arr[i][childName] as T[];
//         if (item && item.length) {
//             listSort(item, sortName, childName);
//         }
//         for (let j = 0; j < len - 1; j++) {
//             if (arr[j][sortName] > arr[j + 1][sortName]) {
//                 tem = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tem;
//             }
//         }
//     }
//     return arr;
// }

export default defineStore('user', {
    state() {
        return {
            menuList: <menuList[]>[],
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
                    this.menuList = toMakeTree<menuList>(userInfo.list, '0');
                    addRouter(userInfo.list);
                    resolve(null);
                } else {
                    reject();
                }
            });
        },
        login(params: userLoginInPrams) {
            return new Promise((resolve, reject) => {
                userLoginIn(params)
                    .then((res) => {
                        const result = res.result;
                        $tools.setLocalStorage('userInfo', result);

                        this.menuList = toMakeTree<menuList>(result.list, '0');
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
