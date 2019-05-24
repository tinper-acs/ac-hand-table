/**
 *
 * @title AcHandTable
 * @description 表格支持多选，数据格式化，行样式
 *
 */

import React, { Component } from 'react';
import AcHandTable from '../../src/index';


const data = [
  {
    id: 1,
    name: '张三',
    gender: '1',
    date: '2018-07-02',
  },
  {
    id: 2,
    name: '李四',
    gender: '0',
    date: '2018-07-02',
  },
  {
    id: 3,
    name: '王五',
    gender: '1',
    date: '2018-07-02',
  },
];

class Demo2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      delRows: [],
      handData: data,
    };
  }

  columns = [
    {
      data: 'name',
      type: 'text',
    },
    {
      data: 'gender',
      type: 'select', // 表格类型
      source: [{
        value: '是',
        key: '1',
      }, {
        value: '否',
        key: '0',
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

  add = () => {
    const temp = {
      id: 5,
      name: '张三xxx',
      gender: '1',
      date: '2018-07-02',
    };
    const { handData } = this.state;
    handData.push(temp);
    this.setState({ handData });


  };


  getData = () => {
    // 获取数据
    this.child.getData((data) => {
      console.log('data', data);
    });
  };


  getCheck=()=>{
    const data = this.child.getCheckbox();
    console.log('data', data);
  }


  
  render() {
    return (
      <div className="demoPadding">

        <button onClick={this.getData}>提交</button>
        <button onClick={this.getCheck}>选中</button>
        <button onClick={this.add}>添加</button>

        <AcHandTable
          id="example2" // 组件id
          onRef={(ref) => { // 设置ref属性 调用子组件方法
            this.child = ref;
          }}
          colHeaders={['姓名', '性别', '生日']} // 表格表头
          data={this.state.handData} // 表体数据
          columns={this.columns} // 列属性设置
        />

      </div>
    );
  }
}

export default Demo2;
