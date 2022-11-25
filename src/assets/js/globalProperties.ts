/*
 * @Descriptions:添加vue全局方法
 * @Autho: WangZhenHao
 * @Date: 2022-11-25 14:57:12
 * @LastEditTime: 2022-11-25 15:31:12
 

 相当于一个vue2的过滤器，处理一些字段
  
 过滤价格：
 <div>{{ $filter.filterMoeny('12.154') }}</div>
 */

import type { App } from 'vue';

function globalProperties(app: App) {
  app.config.globalProperties.$filters = {
    filterMoeny(money: string, num = 2) {
      if (money) {
        return parseFloat(money).toFixed(num);
      }

      return money;
    },
  };
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: {
      //   filterTime: (time: number, format?: string) => string;
      filterMoeny: (money: string, num?: number) => string;
    };
  }
}

export default globalProperties;
