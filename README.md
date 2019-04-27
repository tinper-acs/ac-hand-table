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
|:--|:---:|:--:|---:|
|id|组件唯一id|string|-|
|data|表格数据数据|array|[]|
|columns|列的配置表，具体配置见下表|array|[]|
|language|表格语言|`zh-CN` `en-US` `zh-TW`|'zh-CN'|
|rowHeaders|是否显示行头序号|boolean|true|
|colWidths|列宽|number `100`或 string `100px`或 array `[100,200]`或 func `(index)=>{}`|-|
|multiSelect|是否含有多选框|boolean|true|
|manualColumnResize|是否列宽可以拖动|boolean|true|
|manualColumnMove|是否列可以交换|boolean|true|
|manualRowResize|是否行高可以拖动|boolean|true|
|manualRowMove|是否行可以交换|boolean|true|
|multiColumnSorting|是否列可以排序|boolean|true|



### Column
|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|data|列的键,支持'date.xx'|string|-|
|data|表格数据数据|array|[]|
|type|数据类型 `text` `numeric` `date` `time` `checkbox`  `select` `dropdown` `autocomplete` `password` |string|true|
|readOnly|是否数据仅可读|boolean|false|
|editor|是否数据可以编辑|boolean|true|
|strict|是否输入到单元格的值区分大小写|boolean|false|
|placeholder|单元格占位文字|string|''|
|tableClassName|表格样式类名|string|''|
|dateFormat|日期格式|string|''|
|correctFormat|当前日期是否格式化|boolean|true|
|defaultDate|默认日期|string|''|




|multiColumnSorting|打开多列排序|boolean 或 object|undefined|

### multiColumnSorting
|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|data|列的键,支持'date.xx'|string|-|
|data|表格数据数据|array|[]|



#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-acs/ac-hand-table
$ cd ac-hand-table
$ npm install
$ npm run dev
```

