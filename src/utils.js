/* eslint-disable no-restricted-syntax */

// 数组深克隆
export function deepClone(data) {
  return JSON.parse(JSON.stringify(data));
}


// select 下拉key 转换 value
export function changeSelectKey2Value(key, array) {
  for (const item of array) {
    if (item.key && item.key === key) {
      return item.value;
    }
  }
  return key;
};

// select 下拉 value 转换 key
export function changeSelectValue2Key(value, array) {
  for (const item of array) {
    if (item.value && item.value === value) {
      return item.key;
    }
  }
  return value;
};
