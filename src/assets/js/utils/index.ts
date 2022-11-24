/**
 * 日期时间换成Unix时间戳
 * data  	时间戳    必填
 * @param {[type]} data [description]
 */
export function dateToTimestamp(data: string) {
  return Date.parse(data);
}
/**
 * Unix时间戳转成时间
 * @param {[type]} format     格式: 	 			必填
 * 如: YY/MM/DD hh:mm:ss
 *     YY年MM月DD日 hh时mm分ss秒
 *     Y-M-D h:m:s
 * @param {[type]} timestamp '时间戳: 1525147931'	可填(默认当前时间)
 */
export function timestampToDate(timestamp: string, format: string) {
  if (!timestamp) {
    return timestamp;
  }

  // var date = timestamp ? new Date(parseInt(timestamp) * 1000) : new Date(+new Date());
  const date = new Date(parseInt(timestamp) * 1000);
  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

  const str = format.replace(/y+|m+|d+|h+|s+/gi, function (w) {
    if (w == 'yy' || w == 'YY' || w == 'y' || w == 'Y') {
      return year.toString().substring(2);
    } else if (w == 'yyyy' || w == 'YYYY') {
      return year;
    } else if (w == 'MM') {
      return month >= 10 ? month : '0' + month;
    } else if (w == 'M') {
      return month;
    } else if (w == 'DD' || w == 'dd') {
      return day >= 10 ? day : '0' + day;
    } else if (w == 'D' || w == 'd') {
      return day;
    } else if (w == 'HH' || w == 'hh') {
      return hour >= 10 ? hour : '0' + hour;
    } else if (w == 'H' || w == 'h') {
      return hour;
    } else if (w == 'mm') {
      return minute >= 10 ? minute : '0' + minute;
    } else if (w == 'm') {
      return minute;
    } else if (w == 'ss' || w == 's') {
      return second >= 10 ? second : '0' + second;
    }
  });
  return str;
}

/**
     * 函数节流
     * @return {[type]} [description]
      var fn = Tools.throttle(function(res) {
        console.log(this)
      }, 1000)
      window.onresize = function() {
        fn.call({name: 'wzh'}, 1);
      }
    */
export function throttle(fn: Function, interval: number) {
  const _self = fn;
  let timer: any = null;
  let firstTime = true;
  const _interval = interval || 500;

  return function () {
    const agr = arguments;
    const me = this;
    if (firstTime) {
      _self.apply(me, agr);
      firstTime = false;
    }
    if (timer) {
      return false;
    }
    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
      _self.apply(me, agr);
    }, _interval);
  };
}

/**
    * 函数防抖
      var fn = Tools.debounce(function(res) {
        console.log(this, res)
      }, 1000)
      window.onresize = function() {
        fn.call({name: 'wzh'}, 1);
      }
    */
export function debounce(fn: Function, wait: number) {
  let timer: any = null;
  return function () {
    const context = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}

export function getLocalStorage(key: string) {
  const json = JSON.parse(localStorage.getItem(key));
  if (json) {
    if (json.expires) {
      const timestamp = parseInt(+new Date() / 1000);
      if (timestamp > json.expires) {
        clearLocalStorage(key);
        return null;
      }
    }
    return json[key];
  } else {
    return null;
  }
}
/**
 * 设置本地缓存(可设置过期时间)
 * @param {[type]} key   	键           必填
 * @param {[type]} value 	值		     必填
 * @param {[type]} expires  保存多少秒   可填(秒)
 */
export function setLocalStorage(key: string, value: any, expires: number) {
  const json = {};
  json[key] = value;
  if (expires) {
    const timestamp = parseInt(+new Date() / 1000) + expires;
    json['expires'] = timestamp;
  }

  localStorage.setItem(key, JSON.stringify(json));
}
/**
 * 清除本地缓存
 * @param {[type]} key 	键		可填(默认清除所有)
 * @return {[type]} [description]
 */
export function clearLocalStorage(key) {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
}
