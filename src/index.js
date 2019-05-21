/* eslint-disable import/first,prefer-const,no-shadow,guard-for-in,no-param-reassign,no-restricted-syntax,prefer-rest-params,no-return-assign,react/prop-types,valid-typeof */
/**
 * Created by ranyanchuan on 2018/3/11.
 */
import React from 'react';
import Handsontable from 'handsontable';


import { deepClone, changeSelectKey2Value, changeSelectValue2Key } from './utils';

import 'handsontable/languages/zh-CN';
import 'handsontable/languages/en-US';
import 'handsontable/languages/zh-TW';
import 'handsontable/dist/handsontable.full.css';
import './index.less';

class AcHandTable extends React.Component {
  state = {};

  hot = null;

  componentDidMount() {
    // 在父组件上绑定子组件方法
    if (this.props.onRef) {
      this.props.onRef(this);
    }
    this.init();
  }

  componentWillReceiveProps(nextProps) {
    // 更新数据
    const { data } = nextProps;
    if (data && data !== this.props.data) {
      this.hot.loadData(nextProps.data);
    }
  }

  init = () => {
    const _this = this;
    let {
      id, data, colHeaders, rowStyle,
    } = this.props;


    const container = document.getElementById(id);

    // 数据处理满足 handsontable 格式
    const tempObj = this.dealData(this.props);
    this.onHandsonTable(container, tempObj);

    // 添加 mousedown
    Handsontable.dom.addEvent(container, 'mousedown', (event) => {
      if (event.target.nodeName === 'INPUT' && event.target.className === 'multiSelectChecker') {
        event.stopPropagation();
      }
    });

    // 添加 mouseup
    Handsontable.dom.addEvent(container, 'mouseup', (event) => {
      // 多选操作
      if (event.target.nodeName === 'INPUT' && event.target.className === 'multiSelectChecker') {
        let checked = !event.target.checked;
        // hot2.render();
        event.stopPropagation();
        if (checked) {
          colHeaders[0] = '<input type=\'checkbox\' class=\'multiSelectChecker\' checked />';
          data.map(item => item.checkbox_status = true);
        } else {
          colHeaders[0] = '<input type=\'checkbox\' class=\'multiSelectChecker\' />';
          data.map(item => item.checkbox_status = false);
        }
        _this.hot.render();
      }
    });
  };

  // 初始化tabel
  onHandsonTable = (container, data) => {
    this.hot = new Handsontable(container, {
      ...data,
    });
  };

  // 数据转换
  dealData = () => {
    let {
      colHeaders, columns, data, rowStyle, licenseKey,
      multiSelect = true, // 行多选框
      manualColumnResize = true, // 添加列拖拽
      multiColumnSorting = true, // 表头排序，升或降序
      rowHeaders = true, // 显示行头序号,
      language = 'zh-CN', // 表格语言
      stretchH = 'last', // 最后列宽
      dropdownMenu = true, // 表头下拉
      contextMenu = true, // 行表头上下文菜单
      manualColumnFreeze = true, // 是否开启固定列
      copyPaste = true, // 是否可以复制粘贴
      customBorders = true, // 是否开启边框设置
      copyable = true, // 是否开启键盘复制
      allowInsertColumn = false, // 是否开启插入列
      allowInsertRow = true, // 是否开启插入行
    } = this.props;


    // 处理下拉值 将[{key:'',value:''}] 转换成 [""],
    if (columns && columns.length > 0) {
      for (const [index, column] of columns.entries()) {
        const { type, source, data: columnData } = column;

        let sourceArray = [];

        if (type === 'select' && Array.isArray(source) && source.length > 0 && (typeof source[0]) === 'object') {
          // 更新source 数据
          sourceArray = source.map(item => item.value);
          // 更新data 数据
          data.map((item) => {
            item[columnData] = changeSelectKey2Value(item[columnData], source);
            return item;
          });
          this.setState({ [columnData]: source });
        }
        // 修改select 属性
        columns[index].selectOptions = sourceArray.length > 0 ? sourceArray : source;
        delete columns[index].type;
        columns[index].editor = 'select';
      }
    }


    // 添加 多选框
    if (multiSelect && colHeaders && Array.isArray(colHeaders) && colHeaders.length > 0) {
      const checkedHeader = '<input type=\'checkbox\' class=\'multiSelectChecker\' />';
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
        const { renderer, data, type } = column;
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
      ...this.props,
      licenseKey: licenseKey || 'non-commercial-and-evaluation', // 添加 License key
      manualColumnResize,
      multiColumnSorting,
      rowHeaders,
      language,
      stretchH,
      dropdownMenu,
      contextMenu,
      manualColumnFreeze,
      copyPaste,
      customBorders,
      copyable,
      allowInsertColumn,
      allowInsertRow,
      columns,
      allowEmpty: false,
    };
  };


  // 将修改后的数据返回
  getData = (callback) => {
    this.hot.validateCells((valid) => {
      let result = null;
      if (valid) {
        const { data } = this.props;
        const cloneData = deepClone(data);

        // 将选择框中的 value 转换为 key
        result = cloneData.map((item) => {
          for (const key in item) {
            const stateValue = this.state[key];
            if (stateValue) {
              item[key] = changeSelectValue2Key(item[key], stateValue);
            }
          }
          return item;
        });
      }
      callback(result);
    });
  };


  // 获取选中的数据
  getCheckbox = () => {
    let result = [];
    let { data } = this.props;
    if (data && Array.isArray(data)) {
      for (const item of data) {
        if (item.checkbox_status) {
          result.push(item);
        }
      }
    }
    return result;
  };


  render() {
    const { id } = this.props;
    return (
      <div id={id}/>
    );
  }
}

export default AcHandTable;
