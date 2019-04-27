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

table相关API参考[这里](http://bee.tinper.org/bee-table#bee-table),下面是Grid扩充的API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|paginationObj|表格分页，具体参考[分页API](http://bee.tinper.org/bee-pagination#bee-pagination)|Object|{activePage: 1, total: 0,items:1}
|rowHeaders|是否显示行头序号|boolean|true|
|multiSelect|是否含有多选框，multiSelect={false}时为每行不含有Checkbox|Object|{}|
|showFilterMenu|是否显示行过滤菜单|boolean|false|
|columnFilterAble|是否显示列过滤功能|boolean|true|
|sheetName【excel】| 设置导出excel 的sheet的名称 | string | -- |
|sheetIsRowFilter【excel】| 是否要设置数据的行高 | boolean | false |
|sheetHeader【excel】| 设置导出excel 的Head的高度 | Object | eg:{{height:30, //设置高度ifshow:false //是否显示}} |
|resetColumns|重置columns|function|this.refs.grid.resetColumns(columns)|
|exportData|要导出的数据源|array	|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-acs/ac-hand-table
$ cd ac-hand-table
$ npm install
$ npm run dev
```

