/**
 *
 * @title AcHandTable
 * @description 设置行样式、表格添加行、删除多选选中行、获取验证通过后数据、获取多选选中的数据、获取被修改后的数据、获取被格式化的数据、获取新增加的数据和获取删除的数据
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
// 引入 AcHandTable 组件
import AcHandTable from '../../src/index';

import 'bee-button/build/Button.css';

const data = [
  {
    id: 1,
    name: '张三',
    gender: '1',
    date: '2018-07-02',
    money: 10000,
  },
  {
    id: 2,
    name: '李四',
    gender: '0',
    date: '2018-07-02',
    money: 10000,
  },
  {
    id: 3,
    name: '王五',
    gender: '1',
    date: '2018-07-02',
    money: 10000,
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
      validator: (value, callback) => {
        callback(!!value);
      },
      allowInvalid: true,
      strict: true,
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
      allowInvalid: true, // 不容许日期为空
    },
    {
      data: 'money',
      type: 'numeric', // 资薪
      allowInvalid: true,
    },

  ];

  // 设置行样式
  setStyle = (rowIndex) => {
    let style = { 'background-color': '#fff' };
    if (rowIndex % 2 === 0) {
      style = { 'background-color': '#3fc8c1' };
    }
    return style;
  };

  // 表格添加行
  onInsertRowData = () => {
    this.child.onInsertRowData();
  };

  // 删除多选选中的行
  onDelRowCheck = () => {
    this.child.onDelRowCheck();
  };

  // 获取验证通过后数据
  getData = () => {
    this.child.getData((data) => {
      console.log('data', data);
    });
  };

  // 获取多选选中的数据
  getCheckData = () => {
    const checkboxData = this.child.getCheckbox();
    console.log('checkboxData', checkboxData);
  };

  // 获取被修改后的数据
  getUpdateData = () => {
    const updateData = this.child.getUpdateData();
    console.log('updateData', updateData);
  };

  // 获取被格式化的数据
  getFormatData = () => {
    const formatData = this.child.getFormatData();
    console.log('formatData', formatData);
  };

  // 获取新增加的数据
  getAddRowData = () => {
    const addRowDate = this.child.getAddRowData();
    console.log('addRowDate', addRowDate);
  };

  // 获取删除的数据
  getDelRowData = () => {
    const delRowData = this.child.getDelRowData();
    console.log('delRowData', delRowData);
  };


  render() {
    return (
      <div className="demoPadding">
        <div style={{ marginBottom: '15px' }}>
          <Button colors="primary" onClick={this.onInsertRowData} size="sm"> 增行 </Button>
          <Button colors="danger" onClick={this.onDelRowCheck} size="sm">删除选中行</Button>
          <Button colors="primary" onClick={this.getData} size="sm"> 获取验证数据</Button>
          <Button colors="primary" onClick={this.getCheckData} size="sm"> 获取选中行 </Button>
          <Button colors="primary" onClick={this.getUpdateData} size="sm">获取修改行 </Button>
          <Button colors="primary" onClick={this.getAddRowData} size="sm">获取新增加行</Button>
          <Button colors="primary" onClick={this.getDelRowData} size="sm">获取删除行</Button>
          <Button colors="primary" onClick={this.getFormatData} size="sm">格式化数据 </Button>
        </div>
        <AcHandTable
          id="example2" // 组件id
          onRef={(ref) => { // 设置ref属性 调用子组件方法
            this.child = ref;
          }}
          colHeaders={['姓名', '性别', '日期', '资薪']} // 表格表头
          data={this.state.handData} // 表体数据
          columns={this.columns} // 列属性设置
          // 设置行样式
          rowStyle={this.setStyle}

        />

      </div>
    );
  }
}

export default Demo2;
