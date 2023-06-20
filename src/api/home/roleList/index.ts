import { ipost, iget } from '@js/axios';
import * as type from './type';

export const getRoleList = function (data: type.getRoleListData) {
    return iget('/data/roleList.json', data);
};
