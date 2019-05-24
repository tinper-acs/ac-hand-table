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
export function getSelectValue2Key(value, array) {
  for (const item of array) {
    if (item.value && item.value === value) {
      return item.key;
    }
  }
  return value;
};



export function changeSelectValue2Key(data, columns) {
  // 处理下拉值 将[{key:'',value:''}] 转换成 [""],
  if (columns && columns.length > 0) {
    for (const [index, column] of columns.entries()) {
      const {type, source, data: columnData, editor} = column;

      let sourceArray = [];

      if ((type === 'select' || editor === 'select') && Array.isArray(source) && source.length > 0 && (typeof source[0]) === 'object') {
        // 更新source 数据
        sourceArray = source.map(item => item.value);
        // 更新data 数据
        data.map((item) => {
          item[columnData] = getSelectValue2Key((item[columnData]).toString(), source);
          return item;
        });
      }
    }
  }
  return data;
};
