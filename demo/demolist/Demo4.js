/* eslint-disable no-return-assign */
/**
 *
 * @title tinper 组件
 * @description 在表格中添加 tinper 相关组件，例如日期组件，时间组件，
 *
 */

import React, { Component } from 'react';
import DatePicker from 'tinper-bee/lib/Datepicker';

import moment from 'moment';


// 引入 AcHandTable 组件
import AcHandTable from '../../src/index';
import '../../src/index.less';
import './index.less';

const formatRule = 'YYYY-MM-DD hh:mm:ss'; // 日期格式


const data = [
  {
    id: 1,
    checkbox: true,
    date: '2018-07-03 07:20:30',
    time: '09:20:30',
    number: 10,
  },
  {
    id: 2,
    checkbox: true,
    level: 10,
    date: '2018-07-03 08:20:30',
    time: '09:20:30',
    number: 10,

  },
  {
    id: 3,
    checkbox: true,
    date: '2018-07-03 09:20:30',
    time: '09:20:30',
    number: 10,
  },
];


class Demo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handData: data,
      showDate: false, // 日期是否展示
      showTime: false, // 时间是否展示
      offsetTop: 0,
      offsetLeft: 0,
      rowData: {}, // 选中行数据
      rowNum: 0, // 选中
      rowColKey: '', //
    };
  }


  columns = [
    {
      data: 'checkbox',
      type: 'checkbox', // checkbox
      textTooltip: true,
      className: 'htCenter', // 水平居中
    },
    {
      data: 'date',
      type: 'text', // 日期类型

      validator: (value, callback) => {
        callback(!!value);
      },
      dblClick: (rowData, rowNum, value, td, event) => {
        const offsetLeft = `${event.clientX}px`;
        const offsetTop = `${event.clientY}px`;
        this.setState({
          showDate: true,
          offsetTop,
          offsetLeft,
          rowData,
          rowNum,
          rowColKey: 'date',
        }); // 强制关闭日期
      },
      refConfig: {
        isThreeBar: true, // 是否出现三道杠
      },
    },
    {
      data: 'time',
      type: 'text', // 日期类型

      validator: (value, callback) => {
        callback(!!value);
      },
      dblClick: (rowData, rowNum, value, td, event) => {
        console.log('xxxx');
      },
      refConfig: {
        isThreeBar: true, // 是否出现三道杠
      },
      renderer: (instance, td, row, col, prop, value, cellProperties) => {
        // 插入内容
        const { number } = data[row];
        td.innerHTML = `嘻嘻嘻嘻  ${number}`;
        return td;
      },
    },
    {
      data: 'number',
      type: 'numeric', // 资薪
    }

  ];


  onChangeDate = (dateMoment, dataString) => {
    const { rowData, rowNum, rowColKey } = this.state;
    rowData[rowColKey] = moment(dateMoment)
      .format(formatRule);
    this.child.onUpdateRowData(rowNum, rowData);
  };


  render() {
    const {
      handData, showDate, offsetTop, offsetLeft,
    } = this.state;


    return (
      <div style={{ marginBottom: '300px' }}>

        <div>
          <AcHandTable
            id="example4" // 组件id
            onRef={ref => this.child = ref} // 设置ref属性 调用子组件方法
            colHeaders={['多选框', 'tinper日期', '时间']} // 表格表头
            data={handData} // 表体数据
            columns={this.columns} // 列属性设置
            // colWidths={[null, 50, 100, null, 120, null]}
            manualRowMove // 行移动
            fillHandle={{
              autoInsertRow: false,
              direction: 'vertical',
            }}
          />
        </div>


        {/* 日期组件 */}
        <div className="ac-tinper">
          <DatePicker
            open={showDate}
            format={formatRule}
            onChange={this.onChangeDate}
            showTime
            defaultValue={moment()}
            placeholder="选择日期"
            style={{
              left: offsetLeft,
              top: offsetTop,
              position: 'absolute',
            }}
          />
        </div>


      </div>

    );
  }
}

export default Demo4;
