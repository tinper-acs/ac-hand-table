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
    num: 19,
    date: '2018-07-02',
  },
  {
    id: 2,
    name: {
      firstName: '李',
      lastName: '小贝',
    },
    num: 10,
    price: 500000,
    date: '2018-07-02',
  },
  {
    id: 3,
    name: {
      firstName: '王',
      lastName: '小维',
    },
    num: 20,
    date: '2018-07-02',
  },
  {
    id: 4,
    name: {
      firstName: '孙',
      lastName: '大熊',
    },
    num: 8,
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
