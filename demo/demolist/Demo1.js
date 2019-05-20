/**
 *
 * @title AcHandTable
 * @description 表格支持多选，数据格式化，行样式
 *
 */

import React, { Component } from 'react';
import AcHandTable from '../../dist/index';
import '../../dist/index.css';

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
    level: 'EEE',
    date: '2018-07-02',
  },
];


class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      handData: data,
    };
  }


  columns = [
    { data: 'name.firstName' }, // 对象文本类型
    {
      data: 'name.lastName',
      validator: (value, callback) => {
        callback(!!value);
      },
      allowInvalid: true,
      strict: true,
    },
    {
      data: 'level',
      type: 'numeric', // 数字类型
      allowInvalid: true,
    },
    {
      data: 'date',
      type: 'date', // 日期类型
      dateFormat: 'YYYY-MM-DD', // 日期格式
      correctFormat: true, // 当前值是否格式化
      defaultDate: '1900-01-01', // 默认值
      allowInvalid: true, // 不容许日期为空
    },
  ];

  getData = () => {
    // 获取数据
    this.child.getData((data) => {
      console.log('data', data);
    });
  };

  getUpdate = () => {
    this.setState({ handData: data });
  };

  getCheckbox = () => {
    const data = this.child.getCheckbox();
    console.log('data', data);
  };


  render() {
    const { handData } = this.state;
    return (
      <div>

        <button onClick={this.getData}>数据</button>
        <button onClick={this.getUpdate}>更新</button>
        <button onClick={this.getCheckbox}>多选</button>
        <AcHandTable
          id="example" // 组件id
          onRef={(ref) => { // 设置ref属性 调用子组件方法
            this.child = ref;
          }}
          colHeaders={['姓', '名', '等级', '日期']} // 表格表头
          data={handData} // 表体数据
          columns={this.columns} // 列属性设置
        />

      </div>

    );
  }
}

export default Demo;
