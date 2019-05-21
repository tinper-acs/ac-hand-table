/**
 *
 * @title AcHandTable
 * @description 表格支持多选，数据格式化，行样式
 *
 */

import React, { Component } from 'react';
import AcHandTable from '../../src/index';

class Demo2 extends Component {

  data = [
    {
      id: 1,
      name: '张三',
      gender: 'male',
      date: '2018-07-02',
    },
    {
      id: 2,
      name: '李四',
      gender: 'male',
      date: '2018-07-02',
    },
    {
      id: 3,
      name: '王五',
      gender: 'female',
      date: '2018-07-02',
    },
  ];

  columns = [
    {
      data: 'name',
      type: 'text',
    },
    {
      data: 'gender',
      type: 'select', // 表格类型
      source: [{
        value: '男',
        key: 'male',
      }, {
        value: '女',
        key: 'female',
      }],
    },
    {
      data: 'date',
      type: 'date',
      dateFormat: 'YYYY-MM-DD', // 日期格式
      correctFormat: true, //  当前值是否格式化
      defaultDate: '1900-01-01', // 默认值
    },

  ];


  getData = () => {
    // 获取数据
    this.child.getData((data) => {
      console.log('data', data);
    });
  };


  render() {
    return (
      <div className="demoPadding">


        <button onClick={this.getData}>数据</button>

        <AcHandTable
          id="example2" // 组件id
          onRef={(ref) => { // 设置ref属性 调用子组件方法
            this.child = ref;
          }}
          colHeaders={['姓名', '性别', '生日']} // 表格表头
          data={this.data} // 表体数据
          columns={this.columns} // 列属性设置
        />

      </div>
    );
  }
}

export default Demo2;
