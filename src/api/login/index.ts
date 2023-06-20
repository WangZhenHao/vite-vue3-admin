import { ipost, iget } from '@js/axios';

export const getMenuList = function (data, option) {
    return iget('/data/user/getUserList,json.json', data, option);
} as typeof $api.user.getUserList;

// const typea = $api.user.getUserList
