/**
 *
 * @title adfadsfasdf
 * @description 表格编辑态和预览态切换111
 *
 */

import React, { Component } from 'react';
import { Button } from 'tinper-bee';


// 引入 AcHandTable 组件

// demo 工程中引入方式
import AcHandTable from '../../src/index';
import '../../src/index.less';
import './index.less';


// 项目中引入方式
// import AcHandTable from 'ac-hand-table';
// import 'ac-hand-table/dist/index.css';

const data = [{
  'ebzl': '121.0000',
  'ybzl': '138.6000',
  'ebsfrs': '0',
  'ybsfrs': '1',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 173.32,
  'ROWNUM_': 1,
  'vhour': '22',
  'createTime': '2019-09-11 10:06:21 628',
  'ebzs': '55',
  'ybzs': '63',
  'lastModified': '2019-09-11 11:14:16 410',
  'id': '93940dae14c94eb48de56b9f24521f53',
  'lgang': '3.625',
  'ts': '2019-09-11 11:14:16 411'
}, {
  'ebzl': '121.0000',
  'ybzl': '138.6000',
  'ebsfrs': '0',
  'ybsfrs': '1',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 173.32,
  'ROWNUM_': 2,
  'gxsfrs': '1',
  'gxzl': '198.0000',
  'vhour': '23',
  'createTime': '2019-09-11 10:06:21 628',
  'ebzs': '55',
  'ybzs': '63',
  'gxzs': 90,
  'lastModified': '2019-09-11 11:14:16 401',
  'id': '90946c67e1724cc6b8e213779b443abb',
  'lgang': '3.625',
  'ts': '2019-09-11 11:14:16 402'
}, {
  'ebzl': '121.0000',
  'ybzl': '138.6000',
  'ebsfrs': '0',
  'ybsfrs': '1',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 173.32,
  'ROWNUM_': 3,
  'gxsfrs': '1',
  'gxzl': '198.0000',
  'vhour': '24',
  'createTime': '2019-09-11 10:06:21 628',
  'ebzs': '55',
  'ybzs': '63',
  'gxzs': 90,
  'lastModified': '2019-09-11 11:14:16 382',
  'id': '08f9e270a32d4c0f829307f135553d56',
  'lgang': '3.625',
  'ts': '2019-09-11 11:14:16 382'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 176.42,
  'ROWNUM_': 4,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '12',
  'createTime': '2019-09-11 10:06:21 627',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 361',
  'id': '431fd1d5b3d2457e980ed46f04d148ed',
  'lgang': '3.125',
  'ts': '2019-09-11 11:14:16 362'
}, {
  'ebzl': '121.0000',
  'ybzl': '138.6000',
  'ebsfrs': '0',
  'ybsfrs': '1',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 173.32,
  'ROWNUM_': 5,
  'vhour': '21',
  'createTime': '2019-09-11 10:06:21 627',
  'ebzs': '55',
  'ybzs': '63',
  'lastModified': '2019-09-11 11:14:16 351',
  'id': 'c20411d657e84c8a9546aec3e3ddb4b0',
  'lgang': '3.625',
  'ts': '2019-09-11 11:14:16 351'
}, {
  'ebzl': '121.0000',
  'ybzl': '70.4000',
  'ebsfrs': '0',
  'ybsfrs': '1',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 173.32,
  'ROWNUM_': 6,
  'vhour': '20',
  'createTime': '2019-09-11 10:06:21 627',
  'ebzs': '55',
  'ybzs': '32',
  'lastModified': '2019-09-11 11:14:16 322',
  'id': '88fe2884829d437fb60c9c7b00f98140',
  'lgang': '3.625',
  'ts': '2019-09-11 11:14:16 323'
}, {
  'ebzl': '121.0000',
  'ebsfrs': '1',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 173.32,
  'ROWNUM_': 7,
  'vhour': '19',
  'createTime': '2019-09-11 10:06:21 627',
  'ebzs': '55',
  'lastModified': '2019-09-11 11:14:16 301',
  'id': '8f4eacf459784acbbc55ff6ee71fce3a',
  'lgang': '3.625',
  'ts': '2019-09-11 11:14:16 302'
}, {
  'ebzl': '121.0000',
  'ebsfrs': '1',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 173.32,
  'ROWNUM_': 8,
  'vhour': '18',
  'createTime': '2019-09-11 10:06:21 627',
  'ebzs': '55',
  'lastModified': '2019-09-11 11:14:16 275',
  'id': 'c2f6459b32704935bfc7a46937cff7fc',
  'lgang': '3.625',
  'ts': '2019-09-11 11:14:16 276'
}, {
  'ebzl': '121.0000',
  'ebsfrs': '1',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 173.32,
  'ROWNUM_': 9,
  'vhour': '17',
  'createTime': '2019-09-11 10:06:21 627',
  'ebzs': '55',
  'lastModified': '2019-09-11 11:14:16 247',
  'id': 'a0da6f44b70044b59040a2e027303b31',
  'lgang': '3.625',
  'ts': '2019-09-11 11:14:16 248'
}, {
  'ebzl': '61.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 176.42,
  'ROWNUM_': 10,
  'vhour': '16',
  'createTime': '2019-09-11 10:06:21 627',
  'ebzs': '28',
  'ybzs': '65',
  'lastModified': '2019-09-11 11:14:16 226',
  'id': 'cff14e2bdf494581a8d6c5053106f77e',
  'lgang': '3.125',
  'ts': '2019-09-11 11:14:16 227'
}, {
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 176.42,
  'ROWNUM_': 11,
  'vhour': '15',
  'createTime': '2019-09-11 10:06:21 627',
  'ybzs': '65',
  'lastModified': '2019-09-11 11:14:16 219',
  'id': '561fc9ad9b1149ac8e88a4b952105911',
  'lgang': '3.125',
  'ts': '2019-09-11 11:14:16 220'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 176.42,
  'ROWNUM_': 12,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '14',
  'createTime': '2019-09-11 10:06:21 627',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 210',
  'id': '50b11ae258b5461e8ef26820eeac1bcd',
  'lgang': '3.125',
  'ts': '2019-09-11 11:14:16 211'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 176.42,
  'ROWNUM_': 13,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '13',
  'createTime': '2019-09-11 10:06:21 627',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 183',
  'id': '58b5bf580cdb46f2bb2f952941738bde',
  'lgang': '3.125',
  'ts': '2019-09-11 11:14:16 183'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 175.06,
  'ROWNUM_': 14,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '2',
  'createTime': '2019-09-11 10:06:21 626',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 165',
  'id': '38aba714a7d143b0aa346a07680a63ea',
  'lgang': '3.5',
  'ts': '2019-09-11 11:14:16 166'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 176.42,
  'ROWNUM_': 15,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '11',
  'createTime': '2019-09-11 10:06:21 626',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 144',
  'id': 'fcaeef05f9fd4a2083b688ee756ce163',
  'lgang': '3.125',
  'ts': '2019-09-11 11:14:16 145'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 176.42,
  'ROWNUM_': 16,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '10',
  'createTime': '2019-09-11 10:06:21 626',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 121',
  'id': '0bbddb95a2e244f18e48daa67b6ef0d2',
  'lgang': '3.125',
  'ts': '2019-09-11 11:14:16 122'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 176.42,
  'ROWNUM_': 17,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '9',
  'createTime': '2019-09-11 10:06:21 626',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 109',
  'id': '5266ba7415474741a8d5c06cd5c96c76',
  'lgang': '3.5',
  'ts': '2019-09-11 11:14:16 109'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 175.06,
  'ROWNUM_': 18,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '8',
  'createTime': '2019-09-11 10:06:21 626',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 093',
  'id': '9faea7c2e3d14ffab6448fbfa22fec41',
  'lgang': '3.5',
  'ts': '2019-09-11 11:14:16 094'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 175.06,
  'ROWNUM_': 19,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '7',
  'createTime': '2019-09-11 10:06:21 626',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 064',
  'id': 'c7b0a47a80e3464c9d24761cdb3afe33',
  'lgang': '3.5',
  'ts': '2019-09-11 11:14:16 065'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 175.06,
  'ROWNUM_': 20,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '6',
  'createTime': '2019-09-11 10:06:21 626',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 050',
  'id': '228e81e878ca4979b616c9f89819d016',
  'lgang': '3.5',
  'ts': '2019-09-11 11:14:16 051'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 175.06,
  'ROWNUM_': 21,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '5',
  'createTime': '2019-09-11 10:06:21 626',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 036',
  'id': 'cffc64cbd6124ba7a67c27815f877c23',
  'lgang': '3.5',
  'ts': '2019-09-11 11:14:16 037'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 175.06,
  'ROWNUM_': 22,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '4',
  'createTime': '2019-09-11 10:06:21 626',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 011',
  'id': 'dfb93ad4dc364990a7a9f3865ebb5a9b',
  'lgang': '3.5',
  'ts': '2019-09-11 11:14:16 012'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 175.06,
  'ROWNUM_': 23,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '3',
  'createTime': '2019-09-11 10:06:21 626',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:16 001',
  'id': 'f1ff5a286058446f866a8feba77c4707',
  'lgang': '3.5',
  'ts': '2019-09-11 11:14:16 001'
}, {
  'ebzl': '160.6000',
  'ybzl': '143.0000',
  'ebsfrs': '1',
  'ybsfrs': '0',
  'vdate': '2019-09-11',
  'gl2': 171.71,
  'gl1': 175.06,
  'ROWNUM_': 24,
  'gxsfrs': '1',
  'gxzl': '200.2000',
  'vhour': '1',
  'createTime': '2019-09-11 10:06:21 625',
  'ebzs': '73',
  'ybzs': '65',
  'gxzs': 91,
  'lastModified': '2019-09-11 11:14:15 988',
  'id': 'b2f6e661850c4366878d393cb94a16ba',
  'lgang': '3.5',
  'ts': '2019-09-11 11:14:15 989'
}];


class Demo7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handData: data,
      status: 'view',
    };
  }

  handData = JSON.parse(JSON.stringify(data));

  columns = [
    {
      data: 'vdate',
      type: 'text',
      readOnly: true, // 只读
      readOnlyCellClassName: 'is-readOnly',
    },
    {

      data: 'vhour',
      type: 'text',
      readOnly: true, // 只读
      readOnlyCellClassName: 'is-readOnly',
    },
    {

      data: 'gl1',
      type: 'text',
      readOnly: true, // 只读
      readOnlyCellClassName: 'is-readOnly',
    },
    {

      data: 'gl2',
      type: 'text',
      readOnly: true, // 只读
      readOnlyCellClassName: 'is-readOnly',
    },
    {

      data: 'ltie',
      type: 'text',
      readOnly: true, // 只读
      readOnlyCellClassName: 'is-readOnly',
    },
    {

      data: 'lgang',
      type: 'text',
      readOnly: true, // 只读
      readOnlyCellClassName: 'is-readOnly',
    },
    {
      data: 'ybpz',
      type: 'select',
      source: [
        {
          value: '请选择',
          key: '',
        },
        {
          value: '一棒A品种',
          key: 'A',
        },
        {
          value: '一棒B品种',
          key: 'B',
        },
      ],
      dropdownMenu: true
      // dblClick: (currentRowData, currentRowNum, value) => {
      //     this.setState({ papRefTable: true, currentRowNum, currentRowData }); // 弹出参照
      // },
      // refConfig: {
      //     isThreeBar: true, // 是否出现三道杠
      //     rowKey: ["orgname", "xxx"] // 约定第一个为显示值，第二个为保存数据库值
      // }
    },
    {

      data: 'ybgg',
      type: 'select',
      source: [
        {
          value: '请选择',
          key: '',
        },
        {
          value: '一棒A规格',
          key: 'A',
        },
        {
          value: '一棒B规格',
          key: 'B',
        },
      ],
      dropdownMenu: true
    },
    {
      data: 'ybsfrs',
      type: 'select',
      source: [
        {
          value: '请选择',
          key: '',
        },
        {
          value: '是',
          key: '1',
        },
        {
          value: '否',
          key: '0',
        },
      ],
      dropdownMenu: true
    },
    {

      data: 'ybzs',
      type: 'text',
    },
    {

      data: 'ybzl',
      type: 'text',
    },
    {

      data: 'ebpz',
      type: 'select',
      source: [
        {
          value: '请选择',
          key: '',
        },
        {
          value: '二棒A品种',
          key: 'A',
        },
        {
          value: '二棒B品种',
          key: 'B',
        },
      ],
      dropdownMenu: true
    },
    {

      data: 'ebgg',
      type: 'select',
      source: [
        {
          value: '请选择',
          key: '',
        },
        {
          value: '二棒A规格',
          key: 'A',
        },
        {
          value: '二棒B规格',
          key: 'B',
        },
      ],
      dropdownMenu: true
    },
    {

      data: 'ebsfrs',
      type: 'select',
      source: [
        {
          value: '请选择',
          key: '',
        },
        {
          value: '是',
          key: '1',
        },
        {
          value: '否',
          key: '0',
        },
      ],
      dropdownMenu: true
    },
    {
      data: 'ebzs',
      type: 'text',
    },
    {

      data: 'ebzl',
      type: 'text',
    },
    {

      data: 'gxpz',
      type: 'text',
    },
    {

      data: 'gxgg',
      type: 'text',
    },
    {

      data: 'gxsfrs',
      type: 'select',
      source: [
        {
          value: '请选择',
          key: '',
        },
        {
          value: '是',
          key: '1',
        },
        {
          value: '否',
          key: '0',
        },
      ],
      dropdownMenu: true
    },
    {

      data: 'gxzs',
      type: 'text',
    },
    {

      data: 'gxzl',
      type: 'text',
    },
    {


      data: 'note',
      type: 'text',
    },

  ];

  render() {
    const { handData, status } = this.state;

    return (
      <div className="demoPadding">

        <AcHandTable
          id="hour-energy" // 组件id
          onRef={(ref) => { // 设置ref属性 调用子组件方法
            this.childTable = ref;
          }}
          colHeaders={['日期', '小时', '1#高炉', '2#高炉', '炼铁', '炼钢', '一棒品种', '一棒规格', '一棒是否热送', '一棒支数', '一棒重量', '二棒品种', '二棒规格', '二棒是否热送', '二棒支数', '二棒重量', '高线品种', '高线规格', '高线是否热送', '高线支数', '高线重量', '备注']} // 表格表头
          data={handData} // 表体数据
          columns={this.columns} // 列属性设置
          // paginationObj={paginationObj}
          colWidths="100%"
          // 设置行样式
          rowKey="id" // 数组对象中唯一id 默认值为'id'
          csvConfig={{
            filename: '日小时产量计划',
            rowHeaders: true,
          }}
          dropdownMenu={false}//排序小三角
          multiSelect={false} // 关闭多选框
          columnHeaderHeight={40} //表头高
          width="100%"
          height="auto"// 表格高度
          contextMenu={false}
        />

      </div>

    );
  }
}

export default Demo7;
