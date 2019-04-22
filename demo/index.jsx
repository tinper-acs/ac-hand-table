import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import './demo.scss'



import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";
var DemoArray = [{"example":<Demo1 />,"title":" AcHandTable","code":"/**\n *\n * @title AcHandTable\n * @description 表格支持多选，数据格式化，行样式\n *\n */\n\nimport React, { Component } from 'react';\nimport AcHandTable from '../../src/index';\n\nclass Demo1 extends Component {\n  data = [\n    {\n      id: 1,\n      year: '',\n      name: { firstName: '张', lastName: '小贝' },\n      color: 'yellow',\n      num: 19,\n      price: 500000,\n      date: '2018-07-02',\n      handsontable: 'xxxx',\n\n    },\n    {\n      id: 2,\n      year: 2018,\n      name: { firstName: '李', lastName: '小贝' },\n      color: 'green',\n      num: 10,\n      price: 500000,\n      date: '2018-07-02',\n      handsontable: 'handsontable',\n\n    },\n    {\n      id: 3,\n      year: 2017,\n      name: { firstName: '王', lastName: '小维' },\n      color: 'black',\n      num: 20,\n      price: 500000,\n      date: '2018-07-02',\n      handsontable: 'handsontable',\n\n    },\n    {\n      id: 4,\n      year: 2016,\n      name: { firstName: '孙', lastName: '大熊' },\n      color: 'purple',\n      num: 8,\n      price: 500000,\n      date: '2018-07-02',\n      handsontable: 'handsontable',\n    },\n  ];\n\n\n  manufacturerData = [\n    { name: 'BMW', country: 'Germany', owner: 'Bayerische Motoren Werke AG' },\n    { name: 'Chrysler', country: 'USA', owner: 'Chrysler Group LLC' },\n    { name: 'Nissan', country: 'Japan', owner: 'Nissan Motor Company Ltd' },\n    { name: 'Suzuki', country: 'Japan', owner: 'Suzuki Motor Corporation' },\n    { name: 'Toyota', country: 'Japan', owner: 'Toyota Motor Corporation' },\n    { name: 'Volvo', country: 'Sweden', owner: 'Zhejiang Geely Holding Group' },\n  ];\n\n  config = {\n    data: this.data,\n    colHeaders: ['年份', '姓', '名', '颜色', '价格', '数量', '日期', 'handsontable', '自定义'],\n    language: 'zh-CN',\n    currentRowClassName: 'currentRow',\n    allowInsertRow: false,\n    activeHeaderClassName: 'currentRow',\n\n    // 行样式\n    rowStyle(row) {\n      if (row % 2 === 0) {\n        return { backgroundColor: '#CEC' };\n      }\n    },\n\n    columns: [\n      {\n        data: 'year',\n        type: 'dropdown', // 下拉菜单\n        source: [2019, 2018, 2017, 2016, 2015, 2014],\n        strict: false,\n        placeholder: 'Empty Cell',\n        tableClassName: 'currentRow',\n      },\n      {\n        data: 'name.firstName',\n        type: 'text', // 表格类型\n        readOnly: true, // 只读\n        editor: false, // 不可编辑\n        strict: false,\n        multiColumnSorting: { // 不用排序\n          indicator: false,\n          headerAction: false,\n        },\n      },\n\n      {\n        data: 'name.lastName',\n        type: 'text', // 表格类型\n        strict: false,\n      },\n\n      {\n        data: 'color',\n        type: 'autocomplete',\n        source: ['yellow', 'red', 'green', 'blue', 'gray', 'black', 'white', 'purple', 'lime', 'olive', 'cyan'],\n        strict: false,\n      },\n      {\n        type: 'numeric',\n        data: 'price',\n        numericFormat: { // 价格格式\n          pattern: '$ 0,0.00',\n          culture: 'en-US',\n        },\n      },\n      {\n        data: 'num',\n        type: 'numeric', // 数字类型\n      },\n      {\n        data: 'date',\n        type: 'date',\n        dateFormat: 'YYYY-MM-DD', // 日期格式\n        correctFormat: true, //  当前值是否格式化\n        defaultDate: '1900-01-01', // 默认值\n      },\n      {\n        type: 'handsontable',\n        data: 'handsontable',\n        handsontable: {\n          colHeaders: ['Marque', 'Country', 'Parent company'],\n          autoColumnSize: true,\n          data: this.manufacturerData,\n          getValue() {\n            const selection = this.getSelectedLast();\n            // Get always manufacture name of clicked row\n            return this.getSourceDataAtRow(selection[0]).name;\n          },\n        },\n      },\n    ],\n\n    // 使用自定义列头\n    rowHeaders: true, // false/数组 //当值为true时显示行头，当值为数组时，行头为数组的值\n    filters: true, // 表头过滤\n    manualColumnResize: true, // 表格表头是否可以拖动 false时禁止拖动\n    manualRowResize: true, // 当值为true时，允许拖动，当为false时禁止拖动\n    manualColumnMove: true, // false 当值为true时，列可拖拽移动到指定列\n    manualRowMove: true, // false 当值为true时，行可拖拽至指定行\n    // dropdownMenu: ['filter_by_condition', 'filter_action_bar'],\n    multiColumnSorting: true, // 表头排序，升或降序\n\n    dropdownMenu: true, // https://handsontable.com/docs/7.0.2/demo-dropdown-menu.html\n  };\n\n  // 表头固定，隐藏 https://handsontable.com/docs/7.0.2/frameworks-wrapper-for-react-simple-examples.html\n  // 多表头 https://handsontable.com/docs/7.0.2/demo-nested-headers.html\n  // 多表头隐藏 https://handsontable.com/docs/7.0.2/demo-collapsing-columns.html\n  // 固定row https://handsontable.com/docs/7.0.2/demo-fixing-bottom.html\n  // 固定例 https://handsontable.com/docs/7.0.2/demo-freezing.html\n  // 多余宽自适应 https://handsontable.com/docs/7.0.2/demo-stretching.html\n  // 表格宽自适应内容  https://handsontable.com/docs/7.0.2/demo-header-tooltips.html\n  // 自定义宽和高  https://handsontable.com/docs/7.0.2/demo-resizing.html\n  // fix 宽和高  https://handsontable.com/docs/7.0.2/demo-fixing.html\n  // 自定义表格内容，表头排序, https://handsontable.com/docs/7.0.2/demo-sorting.html\n  // 表头过滤 https://handsontable.com/docs/7.0.2/demo-filtering.html\n  // 表格验证 https://handsontable.com/docs/7.0.2/demo-data-validation.html\n  // 合并单元格 https://handsontable.com/docs/7.0.2/demo-merged-cells.html\n  // 自定义表头 https://handsontable.com/docs/7.0.2/demo-custom-renderers.html\n  // 行过滤  https://handsontable.com/docs/7.0.2/demo-filtering.html\n  // 字体颜色 https://handsontable.com/docs/7.0.2/demo-conditional-formatting.html\n\n  goData = () => {\n    const updateData = this.child.getData();\n    console.log('updateData', updateData);\n  };\n\n\n  render() {\n    return (\n      <div className=\"demoPadding\">\n        <AcHandTable\n          {...this.config}\n          id=\"example\"\n                // 设置ref属性\n          onRef={(ref) => {\n            this.child = ref;\n          }}\n          // 多选框选中\n          multiSelect\n        />\n      </div>\n    );\n  }\n}\n\n\n","desc":" 表格支持多选，数据格式化，行样式"},{"example":<Demo2 />,"title":" AcHandTable","code":"/**\n *\n * @title AcHandTable\n * @description 表格支持多选，数据格式化，行样式\n *\n */\n\nimport React, { Component } from 'react';\nimport AcHandTable from '../../src/index';\n\nclass Demo2 extends Component {\n  data = [\n    {\n      id: 1,\n      year: '',\n      name: { firstName: '张', lastName: '小贝' },\n      color: 'yellow',\n      num: 19,\n      price: 500000,\n      date: '2018-07-02',\n      handsontable: 'xxxx',\n\n    },\n    {\n      id: 2,\n      year: 2018,\n      name: { firstName: '李', lastName: '小贝' },\n      color: 'green',\n      num: 10,\n      price: 500000,\n      date: '2018-07-02',\n      handsontable: 'handsontable',\n\n    },\n    {\n      id: 3,\n      year: 2017,\n      name: { firstName: '王', lastName: '小维' },\n      color: 'black',\n      num: 20,\n      price: 500000,\n      date: '2018-07-02',\n      handsontable: 'handsontable',\n\n    },\n    {\n      id: 4,\n      year: 2016,\n      name: { firstName: '孙', lastName: '大熊' },\n      color: 'purple',\n      num: 8,\n      price: 500000,\n      date: '2018-07-02',\n      handsontable: 'handsontable',\n    },\n  ];\n\n\n  manufacturerData = [\n    { name: 'BMW', country: 'Germany', owner: 'Bayerische Motoren Werke AG' },\n    { name: 'Chrysler', country: 'USA', owner: 'Chrysler Group LLC' },\n    { name: 'Nissan', country: 'Japan', owner: 'Nissan Motor Company Ltd' },\n    { name: 'Suzuki', country: 'Japan', owner: 'Suzuki Motor Corporation' },\n    { name: 'Toyota', country: 'Japan', owner: 'Toyota Motor Corporation' },\n    { name: 'Volvo', country: 'Sweden', owner: 'Zhejiang Geely Holding Group' },\n  ];\n\n  config = {\n    data: this.data,\n    colHeaders: ['年份', '姓', '名', '颜色', '价格', '数量', '日期', 'handsontable', '自定义'],\n    language: 'zh-CN',\n    currentRowClassName: 'currentRow',\n    allowInsertRow: false,\n    activeHeaderClassName: 'currentRow',\n\n    // 行样式\n    rowStyle(row) {\n      if (row % 2 === 0) {\n        return { backgroundColor: '#CEC' };\n      }\n    },\n\n    columns: [\n      {\n        data: 'year',\n        type: 'dropdown', // 下拉菜单\n        source: [2019, 2018, 2017, 2016, 2015, 2014],\n        strict: false,\n        placeholder: 'Empty Cell',\n        tableClassName: 'currentRow',\n      },\n      {\n        data: 'name.firstName',\n        type: 'text', // 表格类型\n        readOnly: true, // 只读\n        editor: false, // 不可编辑\n        strict: false,\n        multiColumnSorting: { // 不用排序\n          indicator: false,\n          headerAction: false,\n        },\n      },\n\n      {\n        data: 'name.lastName',\n        type: 'text', // 表格类型\n        strict: false,\n      },\n\n      {\n        data: 'color',\n        type: 'autocomplete',\n        source: ['yellow', 'red', 'green', 'blue', 'gray', 'black', 'white', 'purple', 'lime', 'olive', 'cyan'],\n        strict: false,\n      },\n      {\n        type: 'numeric',\n        data: 'price',\n        numericFormat: { // 价格格式\n          pattern: '$ 0,0.00',\n          culture: 'en-US',\n        },\n      },\n      {\n        data: 'num',\n        type: 'numeric', // 数字类型\n      },\n      {\n        data: 'date',\n        type: 'date',\n        dateFormat: 'YYYY-MM-DD', // 日期格式\n        correctFormat: true, //  当前值是否格式化\n        defaultDate: '1900-01-01', // 默认值\n      },\n      {\n        type: 'handsontable',\n        data: 'handsontable',\n        handsontable: {\n          colHeaders: ['Marque', 'Country', 'Parent company'],\n          autoColumnSize: true,\n          data: this.manufacturerData,\n          getValue() {\n            const selection = this.getSelectedLast();\n            // Get always manufacture name of clicked row\n            return this.getSourceDataAtRow(selection[0]).name;\n          },\n        },\n      },\n    ],\n\n    // 使用自定义列头\n    rowHeaders: true, // false/数组 //当值为true时显示行头，当值为数组时，行头为数组的值\n    filters: true, // 表头过滤\n    manualColumnResize: true, // 表格表头是否可以拖动 false时禁止拖动\n    manualRowResize: true, // 当值为true时，允许拖动，当为false时禁止拖动\n    manualColumnMove: true, // false 当值为true时，列可拖拽移动到指定列\n    manualRowMove: true, // false 当值为true时，行可拖拽至指定行\n    // dropdownMenu: ['filter_by_condition', 'filter_action_bar'],\n    multiColumnSorting: true, // 表头排序，升或降序\n\n    dropdownMenu: true, // https://handsontable.com/docs/7.0.2/demo-dropdown-menu.html\n  };\n\n  // 表头固定，隐藏 https://handsontable.com/docs/7.0.2/frameworks-wrapper-for-react-simple-examples.html\n  // 多表头 https://handsontable.com/docs/7.0.2/demo-nested-headers.html\n  // 多表头隐藏 https://handsontable.com/docs/7.0.2/demo-collapsing-columns.html\n  // 固定row https://handsontable.com/docs/7.0.2/demo-fixing-bottom.html\n  // 固定例 https://handsontable.com/docs/7.0.2/demo-freezing.html\n  // 多余宽自适应 https://handsontable.com/docs/7.0.2/demo-stretching.html\n  // 表格宽自适应内容  https://handsontable.com/docs/7.0.2/demo-header-tooltips.html\n  // 自定义宽和高  https://handsontable.com/docs/7.0.2/demo-resizing.html\n  // fix 宽和高  https://handsontable.com/docs/7.0.2/demo-fixing.html\n  // 自定义表格内容，表头排序, https://handsontable.com/docs/7.0.2/demo-sorting.html\n  // 表头过滤 https://handsontable.com/docs/7.0.2/demo-filtering.html\n  // 表格验证 https://handsontable.com/docs/7.0.2/demo-data-validation.html\n  // 合并单元格 https://handsontable.com/docs/7.0.2/demo-merged-cells.html\n  // 自定义表头 https://handsontable.com/docs/7.0.2/demo-custom-renderers.html\n  // 行过滤  https://handsontable.com/docs/7.0.2/demo-filtering.html\n  // 字体颜色 https://handsontable.com/docs/7.0.2/demo-conditional-formatting.html\n\n  goData = () => {\n    const updateData = this.child.getData();\n    console.log('updateData', updateData);\n  };\n\n\n  render() {\n    return (\n      <div className=\"demoPadding\">\n        <div>dddddddd</div>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 表格支持多选，数据格式化，行样式"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
