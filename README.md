## ac-hand-table
ac-hand-table 是基于 `handsontable` 的适用于 React 框架的电子表格，它提供了数据绑定、数据验证、行过滤、列排序、表格多选、表格样式、表头交互、表头拖拽、行高拖拽、行交换等操作

## 安装

使用 npm 安装最新版本

```
npm install ac-hand-table
```

## 使用方法
```js
import AcHandTable from 'ac-hand-table';
import 'ac-hand-table/dist/index.css';


const data = [
  {
    id: 1,
    name: {
      firstName: '张',
      lastName: '小贝',
    },
    level: 19,
    date: '2018-07-02',
  },
  {
    id: 2,
    name: {
      firstName: '李',
      lastName: '小贝',
    },
    level: 10,
    date: '2018-07-02',
  },
  {
    id: 3,
    name: {
      firstName: '王',
      lastName: '小维',
    },
    level: 20,
    date: '2018-07-02',
  },
  {
    id: 4,
    name: {
      firstName: '孙',
      lastName: '大熊',
    },
    level: 8,
    date: '2018-07-02',
  },
];


class Demo extends Component {

  columns = [
    { data: 'name.firstName' }, // 对象文本类型
    { data: 'name.lastName' },
    {
      data: 'level',
      type: 'numeric', // 数字类型
    },
    {
      data: 'date',
      type: 'date', // 日期类型
      dateFormat: 'YYYY-MM-DD', // 日期格式
      correctFormat: true, // 当前值是否格式化
      defaultDate: '1900-01-01', // 默认值
    },
  ];

  // 获取多选框选中数据
   getCheckbox = () => {
    const data=this.child.getCheckbox();
    console.log("data",data)
  };

  // 获取验证通过后数据
   getData = () => {
    this.child.getData((data) => {
      console.log('data', data);
    });
  };


  render() {
    return (
      <AcHandTable
        id="example" // 组件id
        onRef={(ref) => { // 设置ref属性 调用子组件方法
          this.child = ref;
        }}
        colHeaders={['姓', '名', '等级', '日期']} // 表格表头
        data={data} // 表体数据
        columns={this.columns} // 列属性设置
      />
    );
  }
}

export default Demo;
```

## API
### AcHandTable
|参数|说明|类型|默认值|
|:--|:---|:--|:--|
|id|组件唯一id|string|-|
|data|表格数据数据|array|[]|
|columns|列的配置表，具体配置见下表|array|[]|
|language|表格语言|'zh-CN'或 'en-US'或 'zh-TW'|'zh-CN'|
|rowHeaders|表头信息|`boolean`或 `array`或 `function` (index)=>{}|true|
|colWidths|列宽|`number` 100或 `string` '100px'或 `array` [100,200]或 `func` (index)=>{}|-|
|multiSelect|是否含有多选框|boolean|true|
|manualColumnResize|是否列宽可以拖动|boolean|true|
|manualColumnMove|是否列可以交换|boolean|true|
|manualRowResize|是否行高可以拖动|boolean|true|
|manualRowMove|是否行可以交换|boolean|true|
|fixedColumnsLeft|列左固定|number|-|
|fixedColumnsRight|列右固定|number|-|
|fixedRowsBottom|行头固定|number|-|
|fixedRowsTop|行头固定|number|-|
|manualColumnFreeze|是否开启固定列|boolean|true|
|copyPaste|是否可以复制粘贴|boolean|true|
|customBorders|是否开启边框设置|boolean|true|
|copyable|是否开启键盘复制|boolean|true|
|allowInsertColumn|是否开启插入列|boolean|true|
|allowInsertRow|是否开启插入行|boolean|true|
|multiColumnSorting|是否列可以排序|boolean|true|
|dropdownMenu|表上下文下拉菜单|`boolean` 或 `array` ["具有一定意义的字符串，见下表 dropdownMenu contextMenu"] |false|
|contextMenu|行上下文下拉菜单|`boolean` 或 `array` [ "具有一定意义的字符串，见下表 dropdownMenu contextMenu"] |false|
|filters|表头下拉菜单中是否启动过滤器|boolean|false|
|stretchH|表宽度不等于所有列宽的计算总和时，列宽设置|'none'或 'all' 或'last'|'none'|
|rowStyle|行设置样式|func|-|
|activeHeaderClassName|选中列标题样式|strig|-|
|onRef|设置ref属性调用子组件方法|onRef={ref => this.child = ref}|-|


### dropdownMenu contextMenu
|键|说明|额外条件|
|:--|:---|:--|
|row_above|在选中行上方插入行|-|
|row_below|在选中行下方插入行|-|
|col_left|插入列左侧操作|-|
|col_right|插入列右侧操作|-|
|---------|	分隔器	|-|
|remove_row|删除行动作	|-|
|remove_col|删除列操作|-|
|clear_column|清除列值操作	|-|
|undo|撤消操作|undoRedo已开启|-|
|redo|重做动作|undoRedo已开启|
|make_read_only|进行只读操作|-|
|alignment|	对齐操作|-|
|cut|剪切操作|copyPaste打开|
|copy|复制操作|copyPaste打开|
|freeze_column|锁定列操作|	manualColumnFreeze已开启|
|unfreeze_column|解锁列操作|	manualColumnFreeze已开启|
|borders|自定义边框操作|	customBorders已开启|
|allowEmpty|是否日期可以值为空|boolean|true|

### Column
|参数|说明|类型|默认值|
|:--|:---|:--|:--|
|data|列的键,支持'date.xx'|string|-|
|type|数据类型 `text` `numeric` `date` `time` `checkbox`  `select` `dropdown` `autocomplete` `password` |string|true|
|readOnly|是否数据仅可读|boolean|false|
|editor|是否数据可以编辑|boolean|true|
|strict|是否输入到单元格的值区分大小写|boolean|false|
|placeholder|单元格占位文字|string|-|
|tableClassName|表格样式类名|string|-|
|dateFormat|日期格式|string|-|
|correctFormat|当前日期是否格式化|boolean|true|
|defaultDate|默认日期|string|-|
|source|数据类型 'autocomplete' 或 'dropdown' 数据源|`array` `func` (query,callback)=>{}|''|
|numericFormat|数字类型格式化|object|-|
|multiColumnSorting|打开多列排序|boolean 或 object|false|
|allowInvalid|数据校验失败是否可以操作其他表格|boolean|true|
|allowEmpty|是否日期可以值为空|boolean|true|
|validator|自定义验证方法|`func` (value,callback)=>{}|-|


### multiColumnSorting
|参数|说明|类型|默认值|
|:--|:---|:--|:--|
|initialConfig|某些列初始排序状态|object|-|
|indicator|是否显示排序顺序指示符(小箭头)|boolean|true|
|sortEmptyCells|是否空单元格应该参与排序|boolean|true|
|headerAction|是否单击标题应该对表进行排序|boolean|true|
|compareFunctionFactory|自定义比较函数|(sortOrder, columnMeta)=>{}|-|


### numericFormat
|参数|说明|类型|默认值|
|:--|:---|:--|:--|
|pattern|数字模式 [具体参考](http://numbrojs.com/old-format.html)|string|-|
|culture|货币处理 [具体参考](http://numbrojs.com/languages.html#supported-languages)|string|-|

### 获取表格里的数据
```js
 getData = () => {
    // 获取数据
    this.child.getData((data) => {
      console.log('data', data);
    });
  };
```

### 获取多选框选中
```js
 getCheckbox = () => {
    // 获取数据
    const data=this.child.getCheckbox();
    console.log("data",data)
  };
```
#### 日期国际化
```js
i18n: {
      previousMonth: 'Previous Month',
      nextMonth: 'Next Month',
      months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      weekdays: ['日', '一', '二', '三', '四', '五', '六'],
      weekdaysShort: ['日', '一', '二', '三', '四', '五', '六']
        },
```

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-acs/ac-hand-table
$ cd ac-hand-table
$ npm install
$ npm run dev
```

