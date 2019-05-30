/**
 *
 * @title AcHandTable
 * @description 设置行样式、表格添加行、删除多选选中行、获取验证通过后数据、获取多选选中的数据、获取被修改后的数据、获取被格式化的数据、获取新增加的数据和获取删除的数据
 *
 */

import React, { Component } from 'react';
import { FormControl, Button } from 'tinper-bee';

// 引入 AcHandTable 组件
import AcHandTable from '../../src/index';


const data = [
  {
    id: 1,
    name: '张三',
    gender: '1',
    date: '2018-07-02',
    money: 10000,
    staff: '李白',
    staff_code: '',


  },
  {
    id: 2,
    name: '李四',
    gender: 0,
    date: '2018-07-02',
    money: 10000,
    staff_code: '',
    staff: '李白',
  },
  {
    id: 3,
    name: '王五',
    gender: null,
    date: '2018-07-02',
    money: 10000,
    staff: '李白',
    staff_code: '',

  },
];


const columnsData = [
  {
    key: 'code',
    dataIndex: 'code',
    title: '人员编码',
  }, {
    key: 'name',
    dataIndex: 'name',
    title: '人员名称',
  }
];
const tableData = [
  {
    rownum_: 1,
    code: '001',
    name: '人员1',
    mobile: '15011430230',
    refcode: '001',
    refpk: 'cc791b77-bd18-49ab-b3ec-ee83cd40012a',
    id: 'cc791b77-bd18-49ab-b3ec-ee83cd40012a',
    refname: '人员1',
    email: '11@11.com',
    key: 'cc791b77-bd18-49ab-b3ec-ee83cd40012a',
  }, {
    rownum_: 2,
    code: '002',
    name: '人员2',
    mobile: '15011323234',
    refcode: '002',
    refpk: 'de2d4d09-51ec-4108-8def-d6a6c5393c3b',
    id: 'de2d4d09-51ec-4108-8def-d6a6c5393c3b',
    refname: '人员2',
    email: '22@11.com',
    key: 'de2d4d09-51ec-4108-8def-d6a6c5393c3b',
  }, {
    rownum_: 3,
    code: '003',
    name: '人员3',
    mobile: '15011430232',
    refcode: '003',
    refpk: '004989bb-a705-45ce-88f3-662f87ee6e52',
    id: '004989bb-a705-45ce-88f3-662f87ee6e52',
    refname: '人员3',
    email: '33@33.com',
    key: '004989bb-a705-45ce-88f3-662f87ee6e52',
  }, {
    rownum_: 4,
    code: '004',
    name: '人员4',
    mobile: '15011430234',
    refcode: '004',
    refpk: '3570cbde-0d43-49ce-ad53-ab27ee6ee7dd',
    id: '3570cbde-0d43-49ce-ad53-ab27ee6ee7dd',
    refname: '人员4',
    email: '33@34.com',
    key: '3570cbde-0d43-49ce-ad53-ab27ee6ee7dd',
  }, {
    rownum_: 5,
    code: '005',
    name: '人员5',
    mobile: '15011430235',
    refcode: '005',
    refpk: '5e3a85ec-5e14-4734-8b3a-1e6168426c89',
    id: '5e3a85ec-5e14-4734-8b3a-1e6168426c89',
    refname: '人员5',
    email: '55@26.com',
    key: '5e3a85ec-5e14-4734-8b3a-1e6168426c89',
  }, {
    rownum_: 6,
    code: '006',
    name: '人员6',
    mobile: '15011323232',
    refcode: '006',
    refpk: '112621b9-b7ae-41b9-9428-61779334c5d6',
    id: '112621b9-b7ae-41b9-9428-61779334c5d6',
    refname: '人员6',
    email: '66@516.com',
    key: '112621b9-b7ae-41b9-9428-61779334c5d6',
  }, {
    rownum_: 7,
    code: '007',
    name: '人员7',
    mobile: '15011234567',
    refcode: '007',
    refpk: '394bba90-ed0f-4794-a44e-fd9ce6e9257d',
    id: '394bba90-ed0f-4794-a44e-fd9ce6e9257d',
    refname: '人员7',
    email: '55@4.com',
    key: '394bba90-ed0f-4794-a44e-fd9ce6e9257d',
  }, {
    rownum_: 8,
    code: '008',
    name: '人员8',
    mobile: '15011327890',
    refcode: '008',
    refpk: 'a9f4c869-ca0b-4d12-847e-00eca08bfef6',
    id: 'a9f4c869-ca0b-4d12-847e-00eca08bfef6',
    refname: '人员8',
    email: '55@556.com',
    key: 'a9f4c869-ca0b-4d12-847e-00eca08bfef6',
  }, {
    rownum_: 9,
    code: 'bpm01',
    name: '张一',
    mobile: '18777777777',
    refcode: 'bpm01',
    refpk: '0dc47840-873a-4ed3-8ae7-c2335a76b385',
    id: '0dc47840-873a-4ed3-8ae7-c2335a76b385',
    refname: '张一',
    email: 'bpm01@qq.com',
    key: '0dc47840-873a-4ed3-8ae7-c2335a76b385',
  }, {
    rownum_: 10,
    code: 'bpm02',
    name: '张二',
    mobile: '18788888888',
    refcode: 'bpm02',
    refpk: 'c97b59e2-9fa3-44d7-93b0-1be52f7aa550',
    id: 'c97b59e2-9fa3-44d7-93b0-1be52f7aa550',
    refname: '张二',
    email: 'bpm02@qq.com',
    key: 'c97b59e2-9fa3-44d7-93b0-1be52f7aa550',
  }];


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
        value: '男',
        key: '1',
      }, {
        value: '女',
        key: 0,
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
    {
      data: 'staff',
      type: 'refMultipleTable', // 表格
      refMultipleTable: {
        columnsData,
        tableData,
      }
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

    const { handData } = this.state;

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
          colHeaders={['姓名', '性别', '日期', '资薪', '表格参照-人员']} // 表格表头
          data={handData} // 表体数据
          columns={this.columns} // 列属性设置
          // 设置行样式
          rowStyle={this.setStyle}
          rowKey="id" // 数组对象中唯一id 默认值为'id'
        />

      </div>
    );
  }
}

export default Demo2;
