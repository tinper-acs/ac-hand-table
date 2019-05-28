import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import './demo.scss'



import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";import Demo3 from "./demolist/Demo3";
var DemoArray = [{"example":<Demo1 />,"title":" AcHandTable","code":"/* eslint-disable no-return-assign */\n/**\n *\n * @title AcHandTable\n * @description 基础表格展示\n *\n */\n\nimport React, { Component } from 'react';\n\n// 引入 AcHandTable 组件\nimport AcHandTable from '../../src/index';\nimport '../../src/index.less';\n\nconst data = [\n  {\n    id: 1,\n    name: {\n      firstName: '张',\n      lastName: '小贝',\n    },\n    level: 19,\n    date: '2018-07-02',\n  },\n  {\n    id: 2,\n    name: {\n      firstName: '李',\n      lastName: '小贝',\n    },\n    level: 10,\n    date: '2018-07-02',\n  },\n  {\n    id: 3,\n    name: {\n      firstName: '王',\n      lastName: '小维',\n    },\n    level: 20,\n    date: '2018-07-02',\n  },\n  {\n    id: 4,\n    name: {\n      firstName: '孙',\n      lastName: '大熊',\n    },\n    level: 20,\n    date: '2018-07-02',\n  },\n];\n\n\nclass Demo extends Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      handData: data,\n    };\n  }\n\n\n  columns = [\n    { data: 'name.firstName' }, // 对象文本类型\n    { data: 'name.lastName' },\n    {\n      data: 'level',\n      type: 'numeric', // 数字类型\n    },\n    {\n      data: 'date',\n      type: 'date', // 日期类型\n    },\n  ];\n\n\n  render() {\n    const { handData } = this.state;\n    return (\n      <div>\n        <AcHandTable\n          id=\"example\" // 组件id\n          onRef={ref => this.child = ref} // 设置ref属性 调用子组件方法\n          colHeaders={['姓', '名', '等级', '日期']} // 表格表头\n          data={handData} // 表体数据\n          columns={this.columns} // 列属性设置\n        />\n\n      </div>\n\n    );\n  }\n}\n\n\n","desc":" 基础表格展示"},{"example":<Demo2 />,"title":" AcHandTable","code":"/**\n *\n * @title AcHandTable\n * @description 设置行样式、表格添加行、删除多选选中行、获取验证通过后数据、获取多选选中的数据、获取被修改后的数据、获取被格式化的数据、获取新增加的数据和获取删除的数据\n *\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\n// 引入 AcHandTable 组件\nimport AcHandTable from '../../src/index';\n\nimport 'bee-button/build/Button.css';\n\nconst data = [\n  {\n    id: 1,\n    name: '张三',\n    gender: '1',\n    date: '2018-07-02',\n    money: 10000,\n  },\n  {\n    id: 2,\n    name: '李四',\n    gender: '0',\n    date: '2018-07-02',\n    money: 10000,\n  },\n  {\n    id: 3,\n    name: '王五',\n    gender: '1',\n    date: '2018-07-02',\n    money: 10000,\n  },\n];\n\nclass Demo2 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      delRows: [],\n      handData: data,\n    };\n  }\n\n  columns = [\n    {\n      data: 'name',\n      type: 'text',\n      validator: (value, callback) => {\n        callback(!!value);\n      },\n      allowInvalid: true,\n      strict: true,\n    },\n    {\n      data: 'gender',\n      type: 'select', // 表格类型\n      source: [{\n        value: '男',\n        key: '1',\n      }, {\n        value: '女',\n        key: '0',\n      }],\n    },\n    {\n      data: 'date',\n      type: 'date',\n      dateFormat: 'YYYY-MM-DD', // 日期格式\n      correctFormat: true, //  当前值是否格式化\n      defaultDate: '1900-01-01', // 默认值\n      allowInvalid: true, // 不容许日期为空\n    },\n    {\n      data: 'money',\n      type: 'numeric', // 资薪\n      allowInvalid: true,\n    },\n\n  ];\n\n  // 设置行样式\n  setStyle = (rowIndex) => {\n    let style = { 'background-color': '#fff' };\n    if (rowIndex % 2 === 0) {\n      style = { 'background-color': '#3fc8c1' };\n    }\n    return style;\n  };\n\n  // 表格添加行\n  onInsertRowData = () => {\n    this.child.onInsertRowData();\n  };\n\n  // 删除多选选中的行\n  onDelRowCheck = () => {\n    this.child.onDelRowCheck();\n  };\n\n  // 获取验证通过后数据\n  getData = () => {\n    this.child.getData((data) => {\n      console.log('data', data);\n    });\n  };\n\n  // 获取多选选中的数据\n  getCheckData = () => {\n    const checkboxData = this.child.getCheckbox();\n    console.log('checkboxData', checkboxData);\n  };\n\n  // 获取被修改后的数据\n  getUpdateData = () => {\n    const updateData = this.child.getUpdateData();\n    console.log('updateData', updateData);\n  };\n\n  // 获取被格式化的数据\n  getFormatData = () => {\n    const formatData = this.child.getFormatData();\n    console.log('formatData', formatData);\n  };\n\n  // 获取新增加的数据\n  getAddRowData = () => {\n    const addRowDate = this.child.getAddRowData();\n    console.log('addRowDate', addRowDate);\n  };\n\n  // 获取删除的数据\n  getDelRowData = () => {\n    const delRowData = this.child.getDelRowData();\n    console.log('delRowData', delRowData);\n  };\n\n\n  render() {\n    return (\n      <div className=\"demoPadding\">\n        <div style={{ marginBottom: '15px' }}>\n          <Button colors=\"primary\" onClick={this.onInsertRowData} size=\"sm\"> 增行 </Button>\n          <Button colors=\"danger\" onClick={this.onDelRowCheck} size=\"sm\">删除选中行</Button>\n          <Button colors=\"primary\" onClick={this.getData} size=\"sm\"> 获取验证数据</Button>\n          <Button colors=\"primary\" onClick={this.getCheckData} size=\"sm\"> 获取选中行 </Button>\n          <Button colors=\"primary\" onClick={this.getUpdateData} size=\"sm\">获取修改行 </Button>\n          <Button colors=\"primary\" onClick={this.getAddRowData} size=\"sm\">获取新增加行</Button>\n          <Button colors=\"primary\" onClick={this.getDelRowData} size=\"sm\">获取删除行</Button>\n          <Button colors=\"primary\" onClick={this.getFormatData} size=\"sm\">格式化数据 </Button>\n        </div>\n        <AcHandTable\n          id=\"example2\" // 组件id\n          onRef={(ref) => { // 设置ref属性 调用子组件方法\n            this.child = ref;\n          }}\n          colHeaders={['姓名', '性别', '日期', '资薪']} // 表格表头\n          data={this.state.handData} // 表体数据\n          columns={this.columns} // 列属性设置\n          // 设置行样式\n          rowStyle={this.setStyle}\n\n        />\n\n      </div>\n    );\n  }\n}\n\n\n","desc":" 设置行样式、表格添加行、删除多选选中行、获取验证通过后数据、获取多选选中的数据、获取被修改后的数据、获取被格式化的数据、获取新增加的数据和获取删除的数据"},{"example":<Demo3 />,"title":"Demo3","code":"","desc":""}]


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
