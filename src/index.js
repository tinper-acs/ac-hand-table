/* eslint-disable import/first,prefer-const,no-shadow,guard-for-in,no-param-reassign,no-restricted-syntax,prefer-rest-params,no-return-assign,react/prop-types,valid-typeof,quotes,react/destructuring-assignment,padded-blocks,react/no-unused-state,prefer-template */
/**
 * Created by ranyanchuan on 2018/3/11.
 */
import React from 'react';
import Handsontable from 'handsontable';

import RefMultipleTable from './RefMultipleTable.js';

import {
  getCheckboxActive,
  getCheckDelArray,
  getDelRows,
  getUpdateActive,
  getAddRowActive,
  changeSelectValue2Key,
  customRenderData,
} from './utils';

import 'handsontable/languages/zh-CN';
import 'handsontable/languages/en-US';
import 'handsontable/languages/zh-TW';
import 'handsontable/dist/handsontable.full.css';
import './index.less';

class AcHandTable extends React.Component {

  state = {

    data: this.props.data,
    delDataList: [],
    refMultipleTable: {}, // 表格参照
    currentRow: 0, // 选中当前参照行
    currentCol: 0, // 选中当前参照例
    currentKey: '', // 选中当前参照key

  };


  hot = null;

  componentDidMount() {
    // 在父组件上绑定子组件方法
    if (this.props.onRef) {
      this.props.onRef(this);
    }
    this.init();
  }


  componentWillReceiveProps(nextProps) {

    const { columns } = nextProps;// 表体数据
    // 处理下拉值 将[{key:'',value:''}] 转换成 [""], dealSelectData
    let { data } = customRenderData(nextProps.data, columns, this.coverRenderer);
    this.setState({ data });
    // 更新数据
    this.hot.loadData(data);

  }


  init = () => {

    // 对 this.props 处理，添加默认值、checkbox等
    const tempObj = this.dealData();
    let { id, colHeaders } = tempObj;

    // 将 信息交有 handsontable 组件处理
    const container = document.getElementById(id);
    this.onHandsonTable(container, tempObj);

    // 添加 mousedown
    Handsontable.dom.addEvent(container, 'mousedown', (event) => {
      if (event.target.nodeName === 'INPUT' && event.target.className === 'multiSelectChecker') {
        event.stopPropagation();
      }
    });

    // 添加 mouseup 全选
    Handsontable.dom.addEvent(container, 'mouseup', (event) => {
      // 多选操作
      if (event.target.nodeName === 'INPUT' && event.target.className === 'multiSelectChecker') {
        let checked = !event.target.checked;
        event.stopPropagation();
        if (checked) {
          colHeaders[0] = `<input type='checkbox' class='multiSelectChecker' checked />`;
          this.state.data.map(item => item.checkbox_status = true);
        } else {
          colHeaders[0] = `<input type='checkbox' class='multiSelectChecker' />`;
          this.state.data.map(item => item.checkbox_status = false);
        }
        this.hot.render();
      }
    });

  };


  // 初始化tabel
  onHandsonTable = (container, data) => {
    const _this = this;
    this.hot = new Handsontable(container, {
      ...data,
      afterChange(changes, source) { // 表格被修改后执行
        if (source === 'edit' && (changes[0][2] !== changes[0][3])) { // 表格被修改
          const { data } = _this.state;
          data[changes[0][0]].update_status = true;
          _this.setState({ data });
        }
        console.log('xxxx', changes, source);

      },

      // 用于拖拽 解决参照
      beforeAutofill(start, end, text) {
        const { columns } = _this.props;
        const { data } = _this.state;
        const { row, col } = start;
        const column = columns[col];
        const { isRef, data: key } = column;
        if (isRef) {

          const { row: endRow } = end;

          const totalRow = endRow > row ? row - 1 : row + 1; // 原始数据目标行
          // 获取原始数据
          const code = data[totalRow][key + '_code'];
          const value = data[totalRow][key];

          for (let i = row; i <= endRow; i++) {
            data[i][key + '_code'] = code;
            data[i][key] = value;
          }
          _this.setState({ data });
        }


      },

      // afterCreateRow: function (index, amount) {  // 添加行后执行
      //     console.log("index, amount", index, amount)
      //     const {data} = _this.state;
      //     data[index].add_status = true;
      //     _this.setState({data});
      // },

      // todo 页面render 依旧保留上一次的数据
      beforeRemoveRow(index, amount, physicalRows, source) {
        const { rowKey } = _this.props;
        const delDataList = getDelRows(_this.state, physicalRows, rowKey);
        _this.setState({ delDataList });
      },
    });
  };


  coverRenderer = (instance, td, row, col, prop, value, cellProperties) => {

    const _this = this;

    const { columns } = _this.props;
    Handsontable.dom.empty(td); // 清空td

    let createDiv = document.createElement('div');
    createDiv.innerHTML = value || '\&nbsp;\&nbsp';
    createDiv.style.width = '100%';

    // 添加 mousedown 事件
    Handsontable.dom.addEvent(createDiv, 'mousedown', (e) => {
      e.preventDefault(); // prevent selection quirk
    });

    // 添加 mouseup 事件
    Handsontable.dom.addEvent(createDiv, 'dblclick', (e) => {
      e.preventDefault(); // prevent selection quirk
      let { refMultipleTable } = columns[col];
      refMultipleTable.showModal = true;
      _this.setState({
        refMultipleTable,
        currentRow: row,
        currentCol: col,
        currentKey: prop,
      });
    });
    td.appendChild(createDiv);
    return td;
  };


  // 数据转换
  dealData = () => {

    let {
      colHeaders, rowStyle,
      multiSelect = true, // 行多选框
      dropdownMenu = true, // 表头下拉
    } = this.props;

    // 1.处理下拉值 将[{key:'',value:''}] 转换成 [""],
    // 2.处理表格参照,

    let { data, columns } = customRenderData(this.state.data, this.props.columns, this.coverRenderer);

    // 添加 多选框
    if (multiSelect && colHeaders && Array.isArray(colHeaders) && colHeaders.length > 0) {
      const checkedHeader = `<input type='checkbox' class='multiSelectChecker' />`;
      let className = 'htCenter htMiddle ';
      if (dropdownMenu) {
        className += 'menuCheckbox';
      }
      const checkboxCell = {
        data: 'checkbox_status',
        type: 'checkbox',
        className,
      };
      colHeaders.unshift(checkedHeader);
      columns.unshift(checkboxCell);
    }


    // 添加行样式
    if (columns && columns.length > 0 && rowStyle) {
      for (const column of columns) {
        const { renderer, type } = column;
        // 添加样式
        if (!renderer) {
          column.renderer = function (instance, td, row, col, prop, value) {
            switch (type) {
              case 'date':
                Handsontable.renderers.DateRenderer.apply(this, arguments);
                break;
              case 'numeric':
                Handsontable.renderers.NumericRenderer.apply(this, arguments);
                break;
              case 'checkbox':
                Handsontable.renderers.CheckboxRenderer.apply(this, arguments);
                break;
              case 'time':
                Handsontable.renderers.TimeRenderer.apply(this, arguments);
                break;
              case 'base':
                Handsontable.renderers.BaseRenderer.apply(this, arguments);
                break;
              case 'autocomplete':
                Handsontable.renderers.AutocompleteRenderer.apply(this, arguments);
                break;
              case 'password':
                Handsontable.renderers.PasswordRenderer.apply(this, arguments);
                break;
              case 'dropdown':
                Handsontable.renderers.DropdownRenderer.apply(this, arguments);
                break;
              default:
                Handsontable.renderers.TextRenderer.apply(this, arguments);
            }

            const styles = rowStyle(row + 1, col, prop);
            if (styles) {
              // 修改行样式
              for (const style in styles) {
                td.style[style] = styles[style];
              }
            }
          };
        }
      }
    }


    return {

      licenseKey: 'non-commercial-and-evaluation', // 添加 License key
      manualColumnResize: true, // 添加列拖拽
      multiColumnSorting: true, // 表头排序，升或降序
      rowHeaders: true, // 显示行头序号,
      language: 'zh-CN', // 表格语言
      stretchH: 'last', // 最后列宽
      contextMenu: true, // 行表头上下文菜单
      manualColumnFreeze: true, // 是否开启固定列
      copyPaste: true, // 是否可以复制粘贴
      customBorders: true, // 是否开启边框设置
      copyable: true, // 是否开启键盘复制
      allowInsertColumn: false, // 是否开启插入列
      allowInsertRow: true, // 是否开启插入行
      allowEmpty: false,
      multiSelect: true, // 行多选框
      dropdownMenu: true, // 表头下拉


      ...this.props,

      columns,
      data,
      fillHandle: 'vertical', // 默认只能横向 为了解决参照问题

    };
  };


  // 将修改后的数据返回
  getData = (callback) => {
    this.hot.validateCells((valid) => {
      let result = null;
      if (valid) {
        const { columns } = this.props;
        result = changeSelectValue2Key(this.state.data, columns); // 回写下拉框值
      }
      callback(result);
    });
  };


  // 插入行数据
  onInsertRowData = (number = 0) => {
    this.hot.alter('insert_row', number);
  };


  // 获取多选选中的数据
  getCheckbox = () => {
    // 获取选中的数据
    const result = getCheckboxActive(this.state.data);
    const { columns } = this.props;
    return changeSelectValue2Key(result, columns); // 回写下拉框值
  };

  // 返回格式化后数据
  getFormatData = () => {
    const { columns } = this.props;
    return changeSelectValue2Key(this.state.data, columns); // 回写下拉框值
  };

  // 返回被修改过的数据
  getUpdateData = () => {
    const { columns, rowKey } = this.props;
    const result = getUpdateActive(this.state.data, rowKey);
    return changeSelectValue2Key(result, columns); // 回写下拉框值
  };


  // 返回被删除的数据
  getDelRowData = () => {
    const { delDataList } = this.state;
    const { columns } = this.props;
    return changeSelectValue2Key(delDataList, columns); // 回写下拉框值
  };


  // 添加行数据方法
  getAddRowData = () => {
    const { columns, rowKey } = this.props;
    const result = getAddRowActive(this.state.data, rowKey);
    return changeSelectValue2Key(result, columns); // 回写下拉框值
  };

  // 删除选中行方法
  onDelRowCheck = () => {
    this.hot.alter('remove_row', getCheckDelArray(this.state.data));
  };

  onSaveRef = (item) => {
    const _this = this;
    const { name, refpk } = item[0];
    let { currentRow, currentCol, currentKey, data } = _this.state;
    data[currentRow][currentKey] = name;
    data[currentRow][currentKey + '_code'] = refpk;

    _this.setState({
      data,
      refMultipleTable: {},
    });
    // 重新加载数据
    this.hot.loadData(data);

  };


  render() {
    const { id } = this.props;
    const { refMultipleTable } = this.state;
    return (
      <div>
        <div id={id}/>
        <RefMultipleTable {...refMultipleTable} onSaveRef={this.onSaveRef}/>
      </div>
    );
  }
}

export default AcHandTable;
