// export interface getMenuList {
//   (data: {}): Promise<{}>;
// }

export interface getMenuListData {
    username: string;
    password: string;
}

export interface menu {
    id: string;
    parentId: string;
    sort: string;
    path: string;
    name: string;
    icon?: string;
    child?: menu[];
}
