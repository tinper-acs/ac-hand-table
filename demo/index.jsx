import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard';
import './demo.scss';


import Demo1 from './demolist/Demo1';
import Demo2 from './demolist/Demo2';
import Demo3 from './demolist/Demo3';

var DemoArray = [{
  'example': <Demo1/>,
  'title': ' 基础表格展示',
  'code': '/* eslint-disable no-return-assign */\n' +
    '/**\n' +
    ' *\n' +
    ' * @title 基础表格展示\n' +
    ' * @description 基础表格展示\n' +
    ' *\n' +
    ' */\n' +
    '\n' +
    'import React, { Component } from \'react\';\n' +
    '\n' +
    '// 引入 AcHandTable 组件\n' +
    'import AcHandTable from \'../../src/index\';\n' +
    'import \'../../src/index.less\';\n' +
    '\n' +
    'const data = [\n' +
    '  {\n' +
    '    id: 1,\n' +
    '    name: {\n' +
    '      firstName: \'张\',\n' +
    '      lastName: \'小贝\',\n' +
    '    },\n' +
    '    level: 19,\n' +
    '    date: \'2018-07-02\',\n' +
    '  },\n' +
    '  {\n' +
    '    id: 2,\n' +
    '    name: {\n' +
    '      firstName: \'李\',\n' +
    '      lastName: \'小贝\',\n' +
    '    },\n' +
    '    level: 10,\n' +
    '    date: \'2018-07-02\',\n' +
    '  },\n' +
    '  {\n' +
    '    id: 3,\n' +
    '    name: {\n' +
    '      firstName: \'王\',\n' +
    '      lastName: \'小维\',\n' +
    '    },\n' +
    '    level: 20,\n' +
    '    date: \'2018-07-02\',\n' +
    '  },\n' +
    '  {\n' +
    '    id: 4,\n' +
    '    name: {\n' +
    '      firstName: \'孙\',\n' +
    '      lastName: \'大熊\',\n' +
    '    },\n' +
    '    level: 20,\n' +
    '    date: \'2018-07-02\',\n' +
    '  },\n' +
    '];\n' +
    '\n' +
    '\n' +
    'class Demo extends Component {\n' +
    '\n' +
    '  constructor(props) {\n' +
    '    super(props);\n' +
    '    this.state = {\n' +
    '      handData: data,\n' +
    '    };\n' +
    '  }\n' +
    '\n' +
    '\n' +
    '  columns = [\n' +
    '    { data: \'name.firstName\' }, // 对象文本类型\n' +
    '    { data: \'name.lastName\' },\n' +
    '    {\n' +
    '      data: \'level\',\n' +
    '      type: \'numeric\', // 数字类型\n' +
    '    },\n' +
    '    {\n' +
    '      data: \'date\',\n' +
    '      type: \'date\', // 日期类型\n' +
    '    },\n' +
    '  ];\n' +
    '\n' +
    '\n' +
    '  render() {\n' +
    '    const { handData } = this.state;\n' +
    '    return (\n' +
    '      <div>\n' +
    '        <AcHandTable\n' +
    '          id="example" // 组件id\n' +
    '          onRef={ref => this.child = ref} // 设置ref属性 调用子组件方法\n' +
    '          colHeaders={[\'姓\', \'名\', \'等级\', \'日期\']} // 表格表头\n' +
    '          data={handData} // 表体数据\n' +
    '          columns={this.columns} // 列属性设置\n' +
    '          manualRowMove={true} // 行移动\n' +
    '        />\n' +
    '\n' +
    '      </div>\n' +
    '\n' +
    '    );\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    'export default Demo;\n',
  'desc': ' 基础表格展示'
}, {
  'example': <Demo2/>,
  'title': ' 表格常用方法',
  'code': '/* eslint-disable import/no-extraneous-dependencies */\n' +
    '/**\n' +
    ' *\n' +
    ' * @title 表格常用方法\n' +
    ' * @description 设置行样式、表格添加行、删除多选选中行、获取验证通过后数据、获取多选选中的数据、获取被修改后的数据、获取被格式化的数据、获取新增加的数据和获取删除的数据\n' +
    ' *\n' +
    ' */\n' +
    '\n' +
    'import React, { Component } from \'react\';\n' +
    'import { Button } from \'tinper-bee\';\n' +
    '\n' +
    '// 引入 AcHandTable 组件\n' +
    'import AcHandTable from \'../../src/index\';\n' +
    'import \'../../src/index.less\';\n' +
    '\n' +
    'const data = [\n' +
    '  {\n' +
    '    id: 1,\n' +
    '    name: \'张三\',\n' +
    '    gender: \'1\',\n' +
    '    date: \'2018-07-02\',\n' +
    '    money: 10000,\n' +
    '    staff: \'李白\',\n' +
    '    staff_code: \'\',\n' +
    '    department: \'\',\n' +
    '    department_staff: \'\',\n' +
    '    department_staff_transfer: \'\',\n' +
    '  },\n' +
    '  {\n' +
    '    id: 2,\n' +
    '    name: \'李四\',\n' +
    '    gender: 0,\n' +
    '    date: \'2018-07-02\',\n' +
    '    money: 10000,\n' +
    '    staff_code: \'\',\n' +
    '    staff: \'李白\',\n' +
    '    department: \'\',\n' +
    '    department_staff: \'\',\n' +
    '    department_staff_transfer: \'\',\n' +
    '\n' +
    '  },\n' +
    '  {\n' +
    '    id: 3,\n' +
    '    name: \'王五\',\n' +
    '    gender: null,\n' +
    '    date: \'2018-07-02\',\n' +
    '    money: 10000,\n' +
    '    staff: \'李白\',\n' +
    '    staff_code: \'\',\n' +
    '    department: \'\',\n' +
    '    department_staff: \'\',\n' +
    '    department_staff_transfer: \'\',\n' +
    '  },\n' +
    '];\n' +
    '\n' +
    '\n' +
    'class Demo2 extends Component {\n' +
    '  constructor(props) {\n' +
    '    super(props);\n' +
    '    this.state = {\n' +
    '      handData: data,\n' +
    '      changeRowNum: 0,\n' +
    '    };\n' +
    '  }\n' +
    '\n' +
    '  columns = [\n' +
    '    {\n' +
    '      data: \'name\',\n' +
    '      type: \'text\',\n' +
    '      validator: (value, callback) => {\n' +
    '        callback(!!value);\n' +
    '      },\n' +
    '      allowInvalid: true,\n' +
    '      strict: true,\n' +
    '      onChangeCell: (rowData, rowNum) => { // 单元格改变回调\n' +
    '        console.log(\'rowData, rowNum\', rowData, rowNum);\n' +
    '        this.setState({ changeRowNum: rowNum });\n' +
    '      },\n' +
    '      onClick: (rowData, rowNum, value) => {\n' +
    '        console.log(\'rowData, rowNum, value\', rowData, rowNum, value);\n' +
    '      }\n' +
    '    },\n' +
    '    {\n' +
    '      data: \'gender\',\n' +
    '      type: \'select\', // 表格类型\n' +
    '      source: [{\n' +
    '        value: \'男\',\n' +
    '        key: \'1\',\n' +
    '      }, {\n' +
    '        value: \'女\',\n' +
    '        key: 0,\n' +
    '      }],\n' +
    '    },\n' +
    '    {\n' +
    '      data: \'date\',\n' +
    '      type: \'date\',\n' +
    '      dateFormat: \'YYYY-MM-DD\', // 日期格式\n' +
    '      correctFormat: true, //  当前值是否格式化\n' +
    '      defaultDate: \'1900-01-01\', // 默认值\n' +
    '      allowInvalid: true, // 不容许日期为空\n' +
    '    },\n' +
    '    {\n' +
    '      data: \'money\',\n' +
    '      type: \'numeric\', // 资薪\n' +
    '      allowInvalid: true,\n' +
    '    },\n' +
    '  ];\n' +
    '\n' +
    '  // 设置行样式\n' +
    '  setStyle = (rowIndex) => {\n' +
    '    let style = { \'background-color\': \'#fff\' };\n' +
    '    if (rowIndex % 2 === 0) {\n' +
    '      style = { \'background-color\': \'#3fc8c1\' };\n' +
    '    }\n' +
    '    return style;\n' +
    '  };\n' +
    '\n' +
    '  // 表格添加行\n' +
    '  onInsertRowData = () => {\n' +
    '    const rowDefaultData = {\n' +
    '      id: 99,\n' +
    '      name: \'张ssss三\',\n' +
    '      gender: \'1\',\n' +
    '      date: \'2018-07-02\',\n' +
    '      money: 10000,\n' +
    '      staff: \'李白\',\n' +
    '      staff_code: \'\',\n' +
    '      department: \'\',\n' +
    '      department_staff: \'\',\n' +
    '      department_staff_transfer: \'\',\n' +
    '    };\n' +
    '    // this.child.onInsertRowData() // 默认从第一行添加\n' +
    '    this.child.onInsertRowData(0, rowDefaultData);\n' +
    '  };\n' +
    '\n' +
    '  // 更新行\n' +
    '  onUpdateRowData = () => {\n' +
    '    const rowDefaultData = {\n' +
    '      id: 99,\n' +
    '      name: \'张ssss三\',\n' +
    '      gender: \'1\',\n' +
    '      date: \'2018-07-02\',\n' +
    '      money: 10000,\n' +
    '      staff: \'李白\',\n' +
    '      staff_code: \'\',\n' +
    '      department: \'\',\n' +
    '      department_staff: \'\',\n' +
    '      department_staff_transfer: \'\',\n' +
    '    };\n' +
    '    this.child.onUpdateRowData(0, rowDefaultData);\n' +
    '  };\n' +
    '\n' +
    '\n' +
    '  // 删除多选选中的行\n' +
    '  onDelRowCheck = () => {\n' +
    '    this.child.onDelRowCheck();\n' +
    '  };\n' +
    '\n' +
    '  // 获取验证通过后数据\n' +
    '  getData = () => {\n' +
    '    this.child.getData((data) => {\n' +
    '      console.log(\'data\', data);\n' +
    '    });\n' +
    '  };\n' +
    '\n' +
    '  // 获取多选选中的数据\n' +
    '  getCheckData = () => {\n' +
    '    const checkboxData = this.child.getCheckbox();\n' +
    '    console.log(\'checkboxData\', checkboxData);\n' +
    '  };\n' +
    '\n' +
    '  // 获取被修改后的数据\n' +
    '  getUpdateData = () => {\n' +
    '    const updateData = this.child.getUpdateData();\n' +
    '    console.log(\'updateData\', updateData);\n' +
    '  };\n' +
    '\n' +
    '  // 获取被格式化的数据\n' +
    '  getFormatData = () => {\n' +
    '    const formatData = this.child.getFormatData();\n' +
    '    console.log(\'formatData\', formatData);\n' +
    '  };\n' +
    '\n' +
    '  // 获取新增加的数据\n' +
    '  getAddRowData = () => {\n' +
    '    const addRowDate = this.child.getAddRowData();\n' +
    '    console.log(\'addRowDate\', addRowDate);\n' +
    '  };\n' +
    '\n' +
    '  // 获取删除的数据\n' +
    '  getDelRowData = () => {\n' +
    '    const delRowData = this.child.getDelRowData();\n' +
    '    console.log(\'delRowData\', delRowData);\n' +
    '  };\n' +
    '\n' +
    '  // 导出csv\n' +
    '  onDownCsv = () => {\n' +
    '    this.child.onExportCSV();\n' +
    '  };\n' +
    '\n' +
    '\n' +
    '  render() {\n' +
    '    const { handData, changeRowNum } = this.state;\n' +
    '\n' +
    '    return (\n' +
    '      <div className="demoPadding">\n' +
    '\n' +
    '        <div style={{ marginBottom: \'15px\' }}>\n' +
    '          <Button colors="primary" onClick={this.onInsertRowData} size="sm"> 增行 </Button>\n' +
    '          <Button colors="primary" onClick={this.onUpdateRowData} size="sm">修改行</Button>\n' +
    '          <Button colors="danger" onClick={this.onDelRowCheck} size="sm">删除选中行</Button>\n' +
    '          <Button colors="primary" onClick={this.getData} size="sm"> 获取验证数据</Button>\n' +
    '          <Button colors="primary" onClick={this.getCheckData} size="sm"> 获取选中行 </Button>\n' +
    '          <Button colors="primary" onClick={this.getUpdateData} size="sm">获取修改行 </Button>\n' +
    '          <Button colors="primary" onClick={this.getAddRowData} size="sm">获取新增加行</Button>\n' +
    '          <Button colors="primary" onClick={this.getDelRowData} size="sm">获取删除行</Button>\n' +
    '          <Button colors="primary" onClick={this.getFormatData} size="sm">格式化数据 </Button>\n' +
    '          <Button colors="primary" onClick={this.onDownCsv} size="sm">导出csv </Button>\n' +
    '        </div>\n' +
    '\n' +
    '        <AcHandTable\n' +
    '          id="example2" // 组件id\n' +
    '          onRef={(ref) => { // 设置ref属性 调用子组件方法\n' +
    '            this.child = ref;\n' +
    '          }}\n' +
    '          colHeaders={[\'姓名\', \'性别\', \'日期\', \'资薪\', \'表格参照-人员\', \'树参照-部门\', \'树表参照-部门人员\', \'树穿梭-人员\']} // 表格表头\n' +
    '          data={handData} // 表体数据\n' +
    '          columns={this.columns} // 列属性设置\n' +
    '          // 设置行样式\n' +
    '          rowStyle={this.setStyle}\n' +
    '          rowKey="id" // 数组对象中唯一id 默认值为\'id\'\n' +
    '          csvConfig={{\n' +
    '            filename: \'导出\',\n' +
    '          }}\n' +
    '        />\n' +
    '\n' +
    '      </div>\n' +
    '    );\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    'export default Demo2;\n',
  'desc': ' 设置行样式、表格添加行、删除多选选中行、获取验证通过后数据、获取多选选中的数据、获取被修改后的数据、获取被格式化的数据、获取新增加的数据和获取删除的数据'
}, {
  'example': <Demo3/>,
  'title': ' 表格参照',
  'code': '/* eslint-disable import/no-extraneous-dependencies,no-multi-spaces */\n' +
    '/**\n' +
    ' *\n' +
    ' * @title 表格参照\n' +
    ' * @description  下拉搜索、表参照、树参照、表格参照、树穿梭参照\n' +
    ' *\n' +
    ' */\n' +
    '\n' +
    'import React, { Component } from \'react\';\n' +
    'import { Button } from \'tinper-bee\';\n' +
    '\n' +
    '// 引入 AcHandTable 组件\n' +
    'import AcHandTable from \'../../src/index\';\n' +
    'import \'../../src/index.less\';\n' +
    '\n' +
    '// 表格数据\n' +
    'const data = [\n' +
    '  {\n' +
    '    id: 1,\n' +
    '    code: \'0000-0001\',\n' +
    '    autocomplete: \'xxxxx\',\n' +
    '    staff: \'杜甫\',\n' +
    '    department: \'用友集团\',\n' +
    '    department_staff: \'张一\',\n' +
    '    department_staff_transfer: \'花43-43-jaja\',\n' +
    '  },\n' +
    '  {\n' +
    '    id: 2,\n' +
    '    code: \'0000-0002\',\n' +
    '    autocomplete: \'xxxxx\',\n' +
    '    staff: \'李白\',\n' +
    '    department: \'用友股份\',\n' +
    '    department_staff: \'\',\n' +
    '    department_staff_transfer: \'\',\n' +
    '\n' +
    '  },\n' +
    '  {\n' +
    '    id: 3,\n' +
    '    code: \'0000-0003\',\n' +
    '    autocomplete: \'xxxxx\',\n' +
    '    staff: \'白居易\',\n' +
    '    department: \'江西分公司\',\n' +
    '    department_staff: \'\',\n' +
    '    department_staff_transfer: \'\',\n' +
    '  },\n' +
    '];\n' +
    '\n' +
    '// 模拟表格\n' +
    'const refTableData = {\n' +
    '  columnsData: [\n' +
    '    {\n' +
    '      key: \'code\',\n' +
    '      dataIndex: \'code\',\n' +
    '      title: \'人员编码\',\n' +
    '    }, {\n' +
    '      key: \'name\',\n' +
    '      dataIndex: \'name\',\n' +
    '      title: \'人员名称\',\n' +
    '    },\n' +
    '  ],\n' +
    '  tableData: [\n' +
    '    {\n' +
    '      rownum_: 1,\n' +
    '      code: \'001\',\n' +
    '      name: \'人员1\',\n' +
    '      mobile: \'15011430230\',\n' +
    '      refcode: \'001\',\n' +
    '      refpk: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '      id: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '      refname: \'人员1\',\n' +
    '      email: \'11@11.com\',\n' +
    '      key: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '    }, {\n' +
    '      rownum_: 2,\n' +
    '      code: \'002\',\n' +
    '      name: \'人员2\',\n' +
    '      mobile: \'15011323234\',\n' +
    '      refcode: \'002\',\n' +
    '      refpk: \'de2d4d09-51ec-4108-8def-d6a6c5393c3b\',\n' +
    '      id: \'de2d4d09-51ec-4108-8def-d6a6c5393c3b\',\n' +
    '      refname: \'人员2\',\n' +
    '      email: \'22@11.com\',\n' +
    '      key: \'de2d4d09-51ec-4108-8def-d6a6c5393c3b\',\n' +
    '    }, {\n' +
    '      rownum_: 3,\n' +
    '      code: \'003\',\n' +
    '      name: \'人员3\',\n' +
    '      mobile: \'15011430232\',\n' +
    '      refcode: \'003\',\n' +
    '      refpk: \'004989bb-a705-45ce-88f3-662f87ee6e52\',\n' +
    '      id: \'004989bb-a705-45ce-88f3-662f87ee6e52\',\n' +
    '      refname: \'人员3\',\n' +
    '      email: \'33@33.com\',\n' +
    '      key: \'004989bb-a705-45ce-88f3-662f87ee6e52\',\n' +
    '    }, {\n' +
    '      rownum_: 4,\n' +
    '      code: \'004\',\n' +
    '      name: \'人员4\',\n' +
    '      mobile: \'15011430234\',\n' +
    '      refcode: \'004\',\n' +
    '      refpk: \'3570cbde-0d43-49ce-ad53-ab27ee6ee7dd\',\n' +
    '      id: \'3570cbde-0d43-49ce-ad53-ab27ee6ee7dd\',\n' +
    '      refname: \'人员4\',\n' +
    '      email: \'33@34.com\',\n' +
    '      key: \'3570cbde-0d43-49ce-ad53-ab27ee6ee7dd\',\n' +
    '    }, {\n' +
    '      rownum_: 5,\n' +
    '      code: \'005\',\n' +
    '      name: \'人员5\',\n' +
    '      mobile: \'15011430235\',\n' +
    '      refcode: \'005\',\n' +
    '      refpk: \'5e3a85ec-5e14-4734-8b3a-1e6168426c89\',\n' +
    '      id: \'5e3a85ec-5e14-4734-8b3a-1e6168426c89\',\n' +
    '      refname: \'人员5\',\n' +
    '      email: \'55@26.com\',\n' +
    '      key: \'5e3a85ec-5e14-4734-8b3a-1e6168426c89\',\n' +
    '    }, {\n' +
    '      rownum_: 6,\n' +
    '      code: \'006\',\n' +
    '      name: \'人员6\',\n' +
    '      mobile: \'15011323232\',\n' +
    '      refcode: \'006\',\n' +
    '      refpk: \'112621b9-b7ae-41b9-9428-61779334c5d6\',\n' +
    '      id: \'112621b9-b7ae-41b9-9428-61779334c5d6\',\n' +
    '      refname: \'人员6\',\n' +
    '      email: \'66@516.com\',\n' +
    '      key: \'112621b9-b7ae-41b9-9428-61779334c5d6\',\n' +
    '    }, {\n' +
    '      rownum_: 7,\n' +
    '      code: \'007\',\n' +
    '      name: \'人员7\',\n' +
    '      mobile: \'15011234567\',\n' +
    '      refcode: \'007\',\n' +
    '      refpk: \'394bba90-ed0f-4794-a44e-fd9ce6e9257d\',\n' +
    '      id: \'394bba90-ed0f-4794-a44e-fd9ce6e9257d\',\n' +
    '      refname: \'人员7\',\n' +
    '      email: \'55@4.com\',\n' +
    '      key: \'394bba90-ed0f-4794-a44e-fd9ce6e9257d\',\n' +
    '    }, {\n' +
    '      rownum_: 8,\n' +
    '      code: \'008\',\n' +
    '      name: \'人员8\',\n' +
    '      mobile: \'15011327890\',\n' +
    '      refcode: \'008\',\n' +
    '      refpk: \'a9f4c869-ca0b-4d12-847e-00eca08bfef6\',\n' +
    '      id: \'a9f4c869-ca0b-4d12-847e-00eca08bfef6\',\n' +
    '      refname: \'人员8\',\n' +
    '      email: \'55@556.com\',\n' +
    '      key: \'a9f4c869-ca0b-4d12-847e-00eca08bfef6\',\n' +
    '    }, {\n' +
    '      rownum_: 9,\n' +
    '      code: \'bpm01\',\n' +
    '      name: \'张一\',\n' +
    '      mobile: \'18777777777\',\n' +
    '      refcode: \'bpm01\',\n' +
    '      refpk: \'0dc47840-873a-4ed3-8ae7-c2335a76b385\',\n' +
    '      id: \'0dc47840-873a-4ed3-8ae7-c2335a76b385\',\n' +
    '      refname: \'张一\',\n' +
    '      email: \'bpm01@qq.com\',\n' +
    '      key: \'0dc47840-873a-4ed3-8ae7-c2335a76b385\',\n' +
    '    }, {\n' +
    '      rownum_: 10,\n' +
    '      code: \'bpm02\',\n' +
    '      name: \'张二\',\n' +
    '      mobile: \'18788888888\',\n' +
    '      refcode: \'bpm02\',\n' +
    '      refpk: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '      id: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '      refname: \'张二\',\n' +
    '      email: \'bpm02@qq.com\',\n' +
    '      key: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '    }],\n' +
    '};\n' +
    '\n' +
    '// 模拟树参照\n' +
    'const refTreeData = [\n' +
    '  {\n' +
    '    code: \'org1\',\n' +
    '    children: [\n' +
    '      {\n' +
    '        code: \'bj\',\n' +
    '        entityType: \'mainEntity\',\n' +
    '        name: \'北京总部-简\',\n' +
    '        pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        refcode: \'bj\',\n' +
    '        refpk: \'5305416e-e7b4-4051-90bd-12d12942295b\',\n' +
    '        id: \'5305416e-e7b4-4051-90bd-12d12942295b\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'北京总部-简\',\n' +
    '      },\n' +
    '      {\n' +
    '        code: \'xd\',\n' +
    '        entityType: \'mainEntity\',\n' +
    '        name: \'新道-简\',\n' +
    '        pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        refcode: \'xd\',\n' +
    '        refpk: \'b691afff-ea83-4a3f-affa-beb2be9cba52\',\n' +
    '        id: \'b691afff-ea83-4a3f-affa-beb2be9cba52\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'新道-简\',\n' +
    '      },\n' +
    '      {\n' +
    '        code: \'yy3\',\n' +
    '        entityType: \'mainEntity\',\n' +
    '        name: \'test3\',\n' +
    '        pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        refcode: \'yy3\',\n' +
    '        refpk: \'e75694d9-7c00-4e9e-9573-d29465ae79a9\',\n' +
    '        id: \'e75694d9-7c00-4e9e-9573-d29465ae79a9\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'test3\',\n' +
    '      }, {\n' +
    '        code: \'yy1\',\n' +
    '        entityType: \'mainEntity\',\n' +
    '        name: \'test1\',\n' +
    '        pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        refcode: \'yy1\',\n' +
    '        refpk: \'fd32ceeb-57a8-4f44-816e-fa660f5715ab\',\n' +
    '        id: \'fd32ceeb-57a8-4f44-816e-fa660f5715ab\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'test1\',\n' +
    '      }, {\n' +
    '        code: \'dept2\',\n' +
    '        children: [{\n' +
    '          code: \'cs\',\n' +
    '          entityType: \'subEntity\',\n' +
    '          organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '          name: \'测试部-简\',\n' +
    '          pid: \'0ebbb6d8-250a-4d1d-a019-7ae951629a2c\',\n' +
    '          refcode: \'cs\',\n' +
    '          refpk: \'cc43a66a-438d-4106-937f-bec44406f771\',\n' +
    '          id: \'cc43a66a-438d-4106-937f-bec44406f771\',\n' +
    '          isLeaf: \'true\',\n' +
    '          refname: \'测试部-简\',\n' +
    '        }, {\n' +
    '          code: \'qd\',\n' +
    '          entityType: \'subEntity\',\n' +
    '          organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '          name: \'前端部-简\',\n' +
    '          pid: \'0ebbb6d8-250a-4d1d-a019-7ae951629a2c\',\n' +
    '          refcode: \'qd\',\n' +
    '          refpk: \'73a10edd-aae8-4f31-af25-1f48f0a3b344\',\n' +
    '          id: \'73a10edd-aae8-4f31-af25-1f48f0a3b344\',\n' +
    '          isLeaf: \'true\',\n' +
    '          refname: \'前端部-简\',\n' +
    '        }],\n' +
    '        entityType: \'subEntity\',\n' +
    '        organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        name: \'生产处\',\n' +
    '        refcode: \'dept2\',\n' +
    '        refpk: \'0ebbb6d8-250a-4d1d-a019-7ae951629a2c\',\n' +
    '        id: \'0ebbb6d8-250a-4d1d-a019-7ae951629a2c\',\n' +
    '        refname: \'生产处\',\n' +
    '      }, {\n' +
    '        code: \'dept1\',\n' +
    '        children: [{\n' +
    '          code: \'dept1_2\',\n' +
    '          entityType: \'subEntity\',\n' +
    '          organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '          name: \'财务二科\',\n' +
    '          pid: \'95b60f35-ed0b-454e-b948-fb45ae30b911\',\n' +
    '          refcode: \'dept1_2\',\n' +
    '          refpk: \'55b7fff1-6579-4ca9-92b7-3271d288b9f3\',\n' +
    '          id: \'55b7fff1-6579-4ca9-92b7-3271d288b9f3\',\n' +
    '          isLeaf: \'true\',\n' +
    '          refname: \'财务二科\',\n' +
    '        }, {\n' +
    '          code: \'dept1_1\',\n' +
    '          entityType: \'subEntity\',\n' +
    '          organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '          name: \'财务一科\',\n' +
    '          pid: \'95b60f35-ed0b-454e-b948-fb45ae30b911\',\n' +
    '          refcode: \'dept1_1\',\n' +
    '          refpk: \'9711d912-3184-4063-90c5-1facc727813c\',\n' +
    '          id: \'9711d912-3184-4063-90c5-1facc727813c\',\n' +
    '          isLeaf: \'true\',\n' +
    '          refname: \'财务一科\',\n' +
    '        }],\n' +
    '        entityType: \'subEntity\',\n' +
    '        organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        name: \'财务处\',\n' +
    '        refcode: \'dept1\',\n' +
    '        refpk: \'95b60f35-ed0b-454e-b948-fb45ae30b911\',\n' +
    '        id: \'95b60f35-ed0b-454e-b948-fb45ae30b911\',\n' +
    '        refname: \'财务处\',\n' +
    '      }],\n' +
    '    entityType: \'mainEntity\',\n' +
    '    name: \'用友集团\',\n' +
    '    refcode: \'org1\',\n' +
    '    refpk: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '    id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '    refname: \'用友集团\',\n' +
    '  },\n' +
    '];\n' +
    '\n' +
    '// 模拟树表数据\n' +
    'const refTreeTableData = {\n' +
    '  columnsData: [\n' +
    '    {\n' +
    '      key: \'code\',\n' +
    '      dataIndex: \'code\',\n' +
    '      title: \'组织编码\',\n' +
    '    }, {\n' +
    '      key: \'name\',\n' +
    '      dataIndex: \'name\',\n' +
    '      title: \'组织名称\',\n' +
    '    },\n' +
    '  ],\n' +
    '  tableData: [\n' +
    '    {\n' +
    '      rownum_: 1,\n' +
    '      code: \'001\',\n' +
    '      name: \'人员1\',\n' +
    '      mobile: \'15011430230\',\n' +
    '      refcode: \'001\',\n' +
    '      refpk: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '      id: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '      refname: \'人员1\',\n' +
    '      email: \'11@11.com\',\n' +
    '      key: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '    }, {\n' +
    '      rownum_: 2,\n' +
    '      code: \'002\',\n' +
    '      name: \'人员2\',\n' +
    '      mobile: \'15011323234\',\n' +
    '      refcode: \'002\',\n' +
    '      refpk: \'de2d4d09-51ec-4108-8def-d6a6c5393c3b\',\n' +
    '      id: \'de2d4d09-51ec-4108-8def-d6a6c5393c3b\',\n' +
    '      refname: \'人员2\',\n' +
    '      email: \'22@11.com\',\n' +
    '      key: \'de2d4d09-51ec-4108-8def-d6a6c5393c3b\',\n' +
    '    }, {\n' +
    '      rownum_: 3,\n' +
    '      code: \'003\',\n' +
    '      name: \'人员3\',\n' +
    '      mobile: \'15011430232\',\n' +
    '      refcode: \'003\',\n' +
    '      refpk: \'004989bb-a705-45ce-88f3-662f87ee6e52\',\n' +
    '      id: \'004989bb-a705-45ce-88f3-662f87ee6e52\',\n' +
    '      refname: \'人员3\',\n' +
    '      email: \'33@33.com\',\n' +
    '      key: \'004989bb-a705-45ce-88f3-662f87ee6e52\',\n' +
    '    }, {\n' +
    '      rownum_: 4,\n' +
    '      code: \'004\',\n' +
    '      name: \'人员4\',\n' +
    '      mobile: \'15011430234\',\n' +
    '      refcode: \'004\',\n' +
    '      refpk: \'3570cbde-0d43-49ce-ad53-ab27ee6ee7dd\',\n' +
    '      id: \'3570cbde-0d43-49ce-ad53-ab27ee6ee7dd\',\n' +
    '      refname: \'人员4\',\n' +
    '      email: \'33@34.com\',\n' +
    '      key: \'3570cbde-0d43-49ce-ad53-ab27ee6ee7dd\',\n' +
    '    }, {\n' +
    '      rownum_: 5,\n' +
    '      code: \'005\',\n' +
    '      name: \'人员5\',\n' +
    '      mobile: \'15011430235\',\n' +
    '      refcode: \'005\',\n' +
    '      refpk: \'5e3a85ec-5e14-4734-8b3a-1e6168426c89\',\n' +
    '      id: \'5e3a85ec-5e14-4734-8b3a-1e6168426c89\',\n' +
    '      refname: \'人员5\',\n' +
    '      email: \'55@26.com\',\n' +
    '      key: \'5e3a85ec-5e14-4734-8b3a-1e6168426c89\',\n' +
    '    }, {\n' +
    '      rownum_: 6,\n' +
    '      code: \'006\',\n' +
    '      name: \'人员6\',\n' +
    '      mobile: \'15011323232\',\n' +
    '      refcode: \'006\',\n' +
    '      refpk: \'112621b9-b7ae-41b9-9428-61779334c5d6\',\n' +
    '      id: \'112621b9-b7ae-41b9-9428-61779334c5d6\',\n' +
    '      refname: \'人员6\',\n' +
    '      email: \'66@516.com\',\n' +
    '      key: \'112621b9-b7ae-41b9-9428-61779334c5d6\',\n' +
    '    }, {\n' +
    '      rownum_: 7,\n' +
    '      code: \'007\',\n' +
    '      name: \'人员7\',\n' +
    '      mobile: \'15011234567\',\n' +
    '      refcode: \'007\',\n' +
    '      refpk: \'394bba90-ed0f-4794-a44e-fd9ce6e9257d\',\n' +
    '      id: \'394bba90-ed0f-4794-a44e-fd9ce6e9257d\',\n' +
    '      refname: \'人员7\',\n' +
    '      email: \'55@4.com\',\n' +
    '      key: \'394bba90-ed0f-4794-a44e-fd9ce6e9257d\',\n' +
    '    }, {\n' +
    '      rownum_: 8,\n' +
    '      code: \'008\',\n' +
    '      name: \'人员8\',\n' +
    '      mobile: \'15011327890\',\n' +
    '      refcode: \'008\',\n' +
    '      refpk: \'a9f4c869-ca0b-4d12-847e-00eca08bfef6\',\n' +
    '      id: \'a9f4c869-ca0b-4d12-847e-00eca08bfef6\',\n' +
    '      refname: \'人员8\',\n' +
    '      email: \'55@556.com\',\n' +
    '      key: \'a9f4c869-ca0b-4d12-847e-00eca08bfef6\',\n' +
    '    }, {\n' +
    '      rownum_: 9,\n' +
    '      code: \'bpm01\',\n' +
    '      name: \'张一\',\n' +
    '      mobile: \'18777777777\',\n' +
    '      refcode: \'bpm01\',\n' +
    '      refpk: \'0dc47840-873a-4ed3-8ae7-c2335a76b385\',\n' +
    '      id: \'0dc47840-873a-4ed3-8ae7-c2335a76b385\',\n' +
    '      refname: \'张一\',\n' +
    '      email: \'bpm01@qq.com\',\n' +
    '      key: \'0dc47840-873a-4ed3-8ae7-c2335a76b385\',\n' +
    '    }, {\n' +
    '      rownum_: 10,\n' +
    '      code: \'bpm02\',\n' +
    '      name: \'张二\',\n' +
    '      mobile: \'18788888888\',\n' +
    '      refcode: \'bpm02\',\n' +
    '      refpk: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '      id: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '      refname: \'张二\',\n' +
    '      email: \'bpm02@qq.com\',\n' +
    '      key: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '    }],\n' +
    '  treeData: [{\n' +
    '    code: \'org1\',\n' +
    '    children: [{\n' +
    '      code: \'bj\',\n' +
    '      entityType: \'mainEntity\',\n' +
    '      name: \'北京总部-简\',\n' +
    '      pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '      refcode: \'bj\',\n' +
    '      refpk: \'5305416e-e7b4-4051-90bd-12d12942295b\',\n' +
    '      id: \'5305416e-e7b4-4051-90bd-12d12942295b\',\n' +
    '      isLeaf: \'true\',\n' +
    '      refname: \'北京总部-简\',\n' +
    '    }, {\n' +
    '      code: \'xd\',\n' +
    '      entityType: \'mainEntity\',\n' +
    '      name: \'新道-简\',\n' +
    '      pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '      refcode: \'xd\',\n' +
    '      refpk: \'b691afff-ea83-4a3f-affa-beb2be9cba52\',\n' +
    '      id: \'b691afff-ea83-4a3f-affa-beb2be9cba52\',\n' +
    '      isLeaf: \'true\',\n' +
    '      refname: \'新道-简\',\n' +
    '    }, {\n' +
    '      code: \'yy3\',\n' +
    '      entityType: \'mainEntity\',\n' +
    '      name: \'test3\',\n' +
    '      pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '      refcode: \'yy3\',\n' +
    '      refpk: \'e75694d9-7c00-4e9e-9573-d29465ae79a9\',\n' +
    '      id: \'e75694d9-7c00-4e9e-9573-d29465ae79a9\',\n' +
    '      isLeaf: \'true\',\n' +
    '      refname: \'test3\',\n' +
    '    }, {\n' +
    '      code: \'yy1\',\n' +
    '      entityType: \'mainEntity\',\n' +
    '      name: \'test1\',\n' +
    '      pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '      refcode: \'yy1\',\n' +
    '      refpk: \'fd32ceeb-57a8-4f44-816e-fa660f5715ab\',\n' +
    '      id: \'fd32ceeb-57a8-4f44-816e-fa660f5715ab\',\n' +
    '      isLeaf: \'true\',\n' +
    '      refname: \'test1\',\n' +
    '    }, {\n' +
    '      code: \'dept2\',\n' +
    '      children: [{\n' +
    '        code: \'cs\',\n' +
    '        entityType: \'subEntity\',\n' +
    '        organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        name: \'测试部-简\',\n' +
    '        pid: \'0ebbb6d8-250a-4d1d-a019-7ae951629a2c\',\n' +
    '        refcode: \'cs\',\n' +
    '        refpk: \'cc43a66a-438d-4106-937f-bec44406f771\',\n' +
    '        id: \'cc43a66a-438d-4106-937f-bec44406f771\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'测试部-简\',\n' +
    '      }, {\n' +
    '        code: \'qd\',\n' +
    '        entityType: \'subEntity\',\n' +
    '        organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        name: \'前端部-简\',\n' +
    '        pid: \'0ebbb6d8-250a-4d1d-a019-7ae951629a2c\',\n' +
    '        refcode: \'qd\',\n' +
    '        refpk: \'73a10edd-aae8-4f31-af25-1f48f0a3b344\',\n' +
    '        id: \'73a10edd-aae8-4f31-af25-1f48f0a3b344\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'前端部-简\',\n' +
    '      }],\n' +
    '      entityType: \'subEntity\',\n' +
    '      organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '      name: \'生产处\',\n' +
    '      refcode: \'dept2\',\n' +
    '      refpk: \'0ebbb6d8-250a-4d1d-a019-7ae951629a2c\',\n' +
    '      id: \'0ebbb6d8-250a-4d1d-a019-7ae951629a2c\',\n' +
    '      refname: \'生产处\',\n' +
    '    }, {\n' +
    '      code: \'dept1\',\n' +
    '      children: [{\n' +
    '        code: \'dept1_2\',\n' +
    '        entityType: \'subEntity\',\n' +
    '        organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        name: \'财务二科\',\n' +
    '        pid: \'95b60f35-ed0b-454e-b948-fb45ae30b911\',\n' +
    '        refcode: \'dept1_2\',\n' +
    '        refpk: \'55b7fff1-6579-4ca9-92b7-3271d288b9f3\',\n' +
    '        id: \'55b7fff1-6579-4ca9-92b7-3271d288b9f3\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'财务二科\',\n' +
    '      }, {\n' +
    '        code: \'dept1_1\',\n' +
    '        entityType: \'subEntity\',\n' +
    '        organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        name: \'财务一科\',\n' +
    '        pid: \'95b60f35-ed0b-454e-b948-fb45ae30b911\',\n' +
    '        refcode: \'dept1_1\',\n' +
    '        refpk: \'9711d912-3184-4063-90c5-1facc727813c\',\n' +
    '        id: \'9711d912-3184-4063-90c5-1facc727813c\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'财务一科\',\n' +
    '      }],\n' +
    '      entityType: \'subEntity\',\n' +
    '      organization_id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '      name: \'财务处\',\n' +
    '      refcode: \'dept1\',\n' +
    '      refpk: \'95b60f35-ed0b-454e-b948-fb45ae30b911\',\n' +
    '      id: \'95b60f35-ed0b-454e-b948-fb45ae30b911\',\n' +
    '      refname: \'财务处\',\n' +
    '    }],\n' +
    '    entityType: \'mainEntity\',\n' +
    '    name: \'用友集团\',\n' +
    '    refcode: \'org1\',\n' +
    '    refpk: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '    id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '    refname: \'用友集团\',\n' +
    '  }],\n' +
    '  originTableData: [\n' +
    '    {\n' +
    '      rownum_: 1,\n' +
    '      code: \'001\',\n' +
    '      name: \'人员1\',\n' +
    '      mobile: \'15011430230\',\n' +
    '      refcode: \'001\',\n' +
    '      refpk: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '      id: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '      refname: \'人员1\',\n' +
    '      email: \'11@11.com\',\n' +
    '      key: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '    }, {\n' +
    '      rownum_: 2,\n' +
    '      code: \'002\',\n' +
    '      name: \'人员2\',\n' +
    '      mobile: \'15011323234\',\n' +
    '      refcode: \'002\',\n' +
    '      refpk: \'de2d4d09-51ec-4108-8def-d6a6c5393c3b\',\n' +
    '      id: \'de2d4d09-51ec-4108-8def-d6a6c5393c3b\',\n' +
    '      refname: \'人员2\',\n' +
    '      email: \'22@11.com\',\n' +
    '      key: \'de2d4d09-51ec-4108-8def-d6a6c5393c3b\',\n' +
    '    }, {\n' +
    '      rownum_: 3,\n' +
    '      code: \'003\',\n' +
    '      name: \'人员3\',\n' +
    '      mobile: \'15011430232\',\n' +
    '      refcode: \'003\',\n' +
    '      refpk: \'004989bb-a705-45ce-88f3-662f87ee6e52\',\n' +
    '      id: \'004989bb-a705-45ce-88f3-662f87ee6e52\',\n' +
    '      refname: \'人员3\',\n' +
    '      email: \'33@33.com\',\n' +
    '      key: \'004989bb-a705-45ce-88f3-662f87ee6e52\',\n' +
    '    }, {\n' +
    '      rownum_: 4,\n' +
    '      code: \'004\',\n' +
    '      name: \'人员4\',\n' +
    '      mobile: \'15011430234\',\n' +
    '      refcode: \'004\',\n' +
    '      refpk: \'3570cbde-0d43-49ce-ad53-ab27ee6ee7dd\',\n' +
    '      id: \'3570cbde-0d43-49ce-ad53-ab27ee6ee7dd\',\n' +
    '      refname: \'人员4\',\n' +
    '      email: \'33@34.com\',\n' +
    '      key: \'3570cbde-0d43-49ce-ad53-ab27ee6ee7dd\',\n' +
    '    }, {\n' +
    '      rownum_: 5,\n' +
    '      code: \'005\',\n' +
    '      name: \'人员5\',\n' +
    '      mobile: \'15011430235\',\n' +
    '      refcode: \'005\',\n' +
    '      refpk: \'5e3a85ec-5e14-4734-8b3a-1e6168426c89\',\n' +
    '      id: \'5e3a85ec-5e14-4734-8b3a-1e6168426c89\',\n' +
    '      refname: \'人员5\',\n' +
    '      email: \'55@26.com\',\n' +
    '      key: \'5e3a85ec-5e14-4734-8b3a-1e6168426c89\',\n' +
    '    }, {\n' +
    '      rownum_: 6,\n' +
    '      code: \'006\',\n' +
    '      name: \'人员6\',\n' +
    '      mobile: \'15011323232\',\n' +
    '      refcode: \'006\',\n' +
    '      refpk: \'112621b9-b7ae-41b9-9428-61779334c5d6\',\n' +
    '      id: \'112621b9-b7ae-41b9-9428-61779334c5d6\',\n' +
    '      refname: \'人员6\',\n' +
    '      email: \'66@516.com\',\n' +
    '      key: \'112621b9-b7ae-41b9-9428-61779334c5d6\',\n' +
    '    }, {\n' +
    '      rownum_: 7,\n' +
    '      code: \'007\',\n' +
    '      name: \'人员7\',\n' +
    '      mobile: \'15011234567\',\n' +
    '      refcode: \'007\',\n' +
    '      refpk: \'394bba90-ed0f-4794-a44e-fd9ce6e9257d\',\n' +
    '      id: \'394bba90-ed0f-4794-a44e-fd9ce6e9257d\',\n' +
    '      refname: \'人员7\',\n' +
    '      email: \'55@4.com\',\n' +
    '      key: \'394bba90-ed0f-4794-a44e-fd9ce6e9257d\',\n' +
    '    }, {\n' +
    '      rownum_: 8,\n' +
    '      code: \'008\',\n' +
    '      name: \'人员8\',\n' +
    '      mobile: \'15011327890\',\n' +
    '      refcode: \'008\',\n' +
    '      refpk: \'a9f4c869-ca0b-4d12-847e-00eca08bfef6\',\n' +
    '      id: \'a9f4c869-ca0b-4d12-847e-00eca08bfef6\',\n' +
    '      refname: \'人员8\',\n' +
    '      email: \'55@556.com\',\n' +
    '      key: \'a9f4c869-ca0b-4d12-847e-00eca08bfef6\',\n' +
    '    }, {\n' +
    '      rownum_: 9,\n' +
    '      code: \'bpm01\',\n' +
    '      name: \'张一\',\n' +
    '      mobile: \'18777777777\',\n' +
    '      refcode: \'bpm01\',\n' +
    '      refpk: \'0dc47840-873a-4ed3-8ae7-c2335a76b385\',\n' +
    '      id: \'0dc47840-873a-4ed3-8ae7-c2335a76b385\',\n' +
    '      refname: \'张一\',\n' +
    '      email: \'bpm01@qq.com\',\n' +
    '      key: \'0dc47840-873a-4ed3-8ae7-c2335a76b385\',\n' +
    '    }, {\n' +
    '      rownum_: 10,\n' +
    '      code: \'bpm02\',\n' +
    '      name: \'张二\',\n' +
    '      mobile: \'18788888888\',\n' +
    '      refcode: \'bpm02\',\n' +
    '      refpk: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '      id: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '      refname: \'张二\',\n' +
    '      email: \'bpm02@qq.com\',\n' +
    '      key: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '    },\n' +
    '  ],\n' +
    '  page: {\n' +
    '    pageCount: 1, // 总页数\n' +
    '    pageSize: \'10\', // 每页数据数\n' +
    '    totalElements: 9,\n' +
    '  },\n' +
    '\n' +
    '};\n' +
    '\n' +
    '// 模拟穿梭数据\n' +
    'const refTreeTransferData = {\n' +
    '  treeData: [\n' +
    '    {\n' +
    '      children: [{\n' +
    '        children: [],\n' +
    '        pid: \'lkp\',\n' +
    '        refpk: \'857c41b7-e1a3-11e5-aa70-0242ac11001d\',\n' +
    '        refcode: \'wujd\',\n' +
    '        id: \'wujd\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'开发部\',\n' +
    '      }, {\n' +
    '        children: [],\n' +
    '        pid: \'lkp\',\n' +
    '        refpk: \'780aca16-e1a3-11e5-aa70-0242ac11001d\',\n' +
    '        refcode: \'fzl\',\n' +
    '        id: \'fzl\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'人事部\',\n' +
    '      }],\n' +
    '      pid: \'\',\n' +
    '      refpk: \'708918f5-e1a3-11e5-aa70-0242ac11001d\',\n' +
    '      refcode: \'lkp\',\n' +
    '      id: \'lkp\',\n' +
    '      refname: \'总公司\',\n' +
    '    }],\n' +
    '  transferData: [\n' +
    '    {\n' +
    '      rownum_: 1,\n' +
    '      login_name: \'43\',\n' +
    '      name: \'花43\',\n' +
    '      refcode: \'43\',\n' +
    '      refpk: \'718dda50629e4f8a8833b5d17de85280\',\n' +
    '      id: \'718dda50629e4f8a8833b5d17de85280\',\n' +
    '      refname: \'花43\',\n' +
    '      key: \'43\',\n' +
    '      title: \'花43-43\',\n' +
    '    }, {\n' +
    '      rownum_: 2,\n' +
    '      login_name: \'46\',\n' +
    '      name: \'花46\',\n' +
    '      refcode: \'46\',\n' +
    '      refpk: \'b595b95cf45348d7aadb7ae349a89a76\',\n' +
    '      id: \'b595b95cf45348d7aadb7ae349a89a76\',\n' +
    '      refname: \'花46\',\n' +
    '      key: \'46\',\n' +
    '      title: \'花46-46\',\n' +
    '    }, {\n' +
    '      rownum_: 3,\n' +
    '      login_name: \'48\',\n' +
    '      name: \'花48\',\n' +
    '      refcode: \'48\',\n' +
    '      refpk: \'62310dd3677440ef96042b9c3ad135e2\',\n' +
    '      id: \'62310dd3677440ef96042b9c3ad135e2\',\n' +
    '      refname: \'花48\',\n' +
    '      key: \'48\',\n' +
    '      title: \'花48-48\',\n' +
    '    }, {\n' +
    '      rownum_: 4,\n' +
    '      login_name: \'53\',\n' +
    '      name: \'花53\',\n' +
    '      refcode: \'53\',\n' +
    '      refpk: \'d64f7d6e6d014d40841415cd35a43dcf\',\n' +
    '      id: \'d64f7d6e6d014d40841415cd35a43dcf\',\n' +
    '      refname: \'花53\',\n' +
    '      key: \'53\',\n' +
    '      title: \'花53-53\',\n' +
    '    }, {\n' +
    '      rownum_: 5,\n' +
    '      login_name: \'70\',\n' +
    '      name: \'花70\',\n' +
    '      refcode: \'70\',\n' +
    '      refpk: \'2ff33db8d1e94bcbaf9ba45e1ad6ea9c\',\n' +
    '      id: \'2ff33db8d1e94bcbaf9ba45e1ad6ea9c\',\n' +
    '      refname: \'花70\',\n' +
    '      key: \'70\',\n' +
    '      title: \'花70-70\',\n' +
    '    }, {\n' +
    '      rownum_: 6,\n' +
    '      login_name: \'73\',\n' +
    '      name: \'花73\',\n' +
    '      refcode: \'73\',\n' +
    '      refpk: \'6d8328debfc94d5b8446f58d2b0b3cdc\',\n' +
    '      id: \'6d8328debfc94d5b8446f58d2b0b3cdc\',\n' +
    '      refname: \'花73\',\n' +
    '      key: \'73\',\n' +
    '      title: \'花73-73\',\n' +
    '    }, {\n' +
    '      rownum_: 7,\n' +
    '      login_name: \'76\',\n' +
    '      name: \'花76\',\n' +
    '      refcode: \'76\',\n' +
    '      refpk: \'7768b51dc14544669f2cffa840edb049\',\n' +
    '      id: \'7768b51dc14544669f2cffa840edb049\',\n' +
    '      refname: \'花76\',\n' +
    '      key: \'76\',\n' +
    '      title: \'花76-76\',\n' +
    '    }, {\n' +
    '      rownum_: 8,\n' +
    '      login_name: \'80\',\n' +
    '      name: \'花80\',\n' +
    '      refcode: \'80\',\n' +
    '      refpk: \'a89cc45ed1ec49f19bb608c18c958359\',\n' +
    '      id: \'a89cc45ed1ec49f19bb608c18c958359\',\n' +
    '      refname: \'花80\',\n' +
    '      key: \'80\',\n' +
    '      title: \'花80-80\',\n' +
    '    }, {\n' +
    '      rownum_: 9,\n' +
    '      login_name: \'78\',\n' +
    '      name: \'花78\',\n' +
    '      refcode: \'78\',\n' +
    '      refpk: \'438d0cce9ae442e586940a582c7ee054\',\n' +
    '      id: \'438d0cce9ae442e586940a582c7ee054\',\n' +
    '      refname: \'花78\',\n' +
    '      key: \'78\',\n' +
    '      title: \'花78-78\',\n' +
    '    }, {\n' +
    '      rownum_: 10,\n' +
    '      login_name: \'79\',\n' +
    '      name: \'花79\',\n' +
    '      refcode: \'79\',\n' +
    '      refpk: \'60adbcb7d4cb49449bc7879dd4fbf1f5\',\n' +
    '      id: \'60adbcb7d4cb49449bc7879dd4fbf1f5\',\n' +
    '      refname: \'花79\',\n' +
    '      key: \'79\',\n' +
    '      title: \'花79-79\',\n' +
    '    }, {\n' +
    '      login_name: \'zhao\',\n' +
    '      refpk: \'14e0220f-1a86-4861-8f74-f7134cb3235b\',\n' +
    '      id: \'14e0220f-1a86-4861-8f74-f7134cb3235b\',\n' +
    '      refcode: \'zhao\',\n' +
    '      name: \'赵宇\',\n' +
    '      refname: \'赵宇\',\n' +
    '      key: \'zhao\',\n' +
    '      title: \'赵宇-zhao\',\n' +
    '    }, {\n' +
    '      login_name: \'chen\',\n' +
    '      refpk: \'14e0220f-1a86-4861-8f74-f71343333b5b\',\n' +
    '      id: \'14e0220f-1a86-4861-8f74-f71343333b5b\',\n' +
    '      refcode: \'chen\',\n' +
    '      name: \'陈辉\',\n' +
    '      refname: \'陈辉\',\n' +
    '      key: \'chen\',\n' +
    '      title: \'陈辉-chen\',\n' +
    '    }, {\n' +
    '      login_name: \'yue\',\n' +
    '      refpk: \'14e0220f-1a86-4861-8f74-545454547489\',\n' +
    '      id: \'14e0220f-1a86-4861-8f74-545454547489\',\n' +
    '      refcode: \'yue\',\n' +
    '      name: \'岳明\',\n' +
    '      refname: \'岳明\',\n' +
    '      key: \'yue\',\n' +
    '      title: \'岳明-yue\',\n' +
    '    }, {\n' +
    '      login_name: \'xiao\',\n' +
    '      refpk: \'14e0220f-1a86-4861-8f74-543434537379\',\n' +
    '      id: \'14e0220f-1a86-4861-8f74-543434537379\',\n' +
    '      refcode: \'xiao\',\n' +
    '      name: \'小羽\',\n' +
    '      refname: \'小羽\',\n' +
    '      key: \'xiao\',\n' +
    '      title: \'小羽-xiao\',\n' +
    '    }, {\n' +
    '      login_name: \'123\',\n' +
    '      refpk: \'14e0220f-1a86-4861-8f74-334455643336\',\n' +
    '      id: \'14e0220f-1a86-4861-8f74-334455643336\',\n' +
    '      refcode: \'123\',\n' +
    '      name: \'123\',\n' +
    '      refname: \'123\',\n' +
    '      key: \'123\',\n' +
    '      title: \'123-123\',\n' +
    '    }, {\n' +
    '      login_name: \'huang\',\n' +
    '      refpk: \'14e0220f-1a86-4861-8f74-333387127390\',\n' +
    '      id: \'14e0220f-1a86-4861-8f74-333387127390\',\n' +
    '      refcode: \'huang\',\n' +
    '      name: \'黄东东\',\n' +
    '      refname: \'黄东东\',\n' +
    '      key: \'huang\',\n' +
    '      title: \'黄东东-huang\',\n' +
    '    }, {\n' +
    '      login_name: \'liu\',\n' +
    '      refpk: \'14e0220f-1a86-4861-8f74-3332332kjffo\',\n' +
    '      id: \'14e0220f-1a86-4861-8f74-3332332kjffo\',\n' +
    '      refcode: \'liu\',\n' +
    '      name: \'刘志鹏\',\n' +
    '      refname: \'刘志鹏\',\n' +
    '      key: \'liu\',\n' +
    '      title: \'刘志鹏-liu\',\n' +
    '    }, {\n' +
    '      login_name: \'liukunlin\',\n' +
    '      refpk: \'14e0220f-1a86-4861-8f74-23323e321263\',\n' +
    '      id: \'14e0220f-1a86-4861-8f74-23323e321263\',\n' +
    '      refcode: \'liukunlin\',\n' +
    '      name: \'刘坤琳\',\n' +
    '      refname: \'刘坤琳\',\n' +
    '      key: \'liukunlin\',\n' +
    '      title: \'刘坤琳-liukunlin\',\n' +
    '    }],\n' +
    '};\n' +
    '\n' +
    '\n' +
    '// 模拟表格搜索数据\n' +
    'const refTableSearch = [\n' +
    '  {\n' +
    '    rownum_: 10,\n' +
    '    code: \'bpm02\',\n' +
    '    name: \'张二\',\n' +
    '    mobile: \'18788888888\',\n' +
    '    refcode: \'bpm02\',\n' +
    '    refpk: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '    id: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '    refname: \'张二\',\n' +
    '    email: \'bpm02@qq.com\',\n' +
    '    key: \'c97b59e2-9fa3-44d7-93b0-1be52f7aa550\',\n' +
    '  },\n' +
    '];\n' +
    '// 模拟树搜索数据\n' +
    'const refTreeSearch = [\n' +
    '  {\n' +
    '    code: \'org1\',\n' +
    '    children: [\n' +
    '      {\n' +
    '        code: \'bj\',\n' +
    '        entityType: \'mainEntity\',\n' +
    '        name: \'北京总部-简\',\n' +
    '        pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        refcode: \'bj\',\n' +
    '        refpk: \'5305416e-e7b4-4051-90bd-12d12942295b\',\n' +
    '        id: \'5305416e-e7b4-4051-90bd-12d12942295b\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'北京总部-简\',\n' +
    '      },\n' +
    '      {\n' +
    '        code: \'xd\',\n' +
    '        entityType: \'mainEntity\',\n' +
    '        name: \'新道-简\',\n' +
    '        pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        refcode: \'xd\',\n' +
    '        refpk: \'b691afff-ea83-4a3f-affa-beb2be9cba52\',\n' +
    '        id: \'b691afff-ea83-4a3f-affa-beb2be9cba52\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'新道-简\',\n' +
    '      },\n' +
    '      {\n' +
    '        code: \'yy3\',\n' +
    '        entityType: \'mainEntity\',\n' +
    '        name: \'test3\',\n' +
    '        pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '        refcode: \'yy3\',\n' +
    '        refpk: \'e75694d9-7c00-4e9e-9573-d29465ae79a9\',\n' +
    '        id: \'e75694d9-7c00-4e9e-9573-d29465ae79a9\',\n' +
    '        isLeaf: \'true\',\n' +
    '        refname: \'test3\',\n' +
    '      },\n' +
    '    ],\n' +
    '    entityType: \'mainEntity\',\n' +
    '    name: \'用友集团\',\n' +
    '    refcode: \'org1\',\n' +
    '    refpk: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '    id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '    refname: \'用友集团\',\n' +
    '  },\n' +
    '];\n' +
    '// 模拟树表搜索数据\n' +
    'const refTreeTableSearch = {\n' +
    '  tableData: [\n' +
    '    {\n' +
    '      rownum_: 1,\n' +
    '      code: \'001\',\n' +
    '      name: \'人员1\',\n' +
    '      mobile: \'15011430230\',\n' +
    '      refcode: \'001\',\n' +
    '      refpk: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '      id: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '      refname: \'人员1\',\n' +
    '      email: \'11@11.com\',\n' +
    '      key: \'cc791b77-bd18-49ab-b3ec-ee83cd40012a\',\n' +
    '    }],\n' +
    '  treeData: [{\n' +
    '    code: \'org1\',\n' +
    '    children: [{\n' +
    '      code: \'bj\',\n' +
    '      entityType: \'mainEntity\',\n' +
    '      name: \'北京总部-简\',\n' +
    '      pid: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '      refcode: \'bj\',\n' +
    '      refpk: \'5305416e-e7b4-4051-90bd-12d12942295b\',\n' +
    '      id: \'5305416e-e7b4-4051-90bd-12d12942295b\',\n' +
    '      isLeaf: \'true\',\n' +
    '      refname: \'北京总部-简\',\n' +
    '    }],\n' +
    '    entityType: \'mainEntity\',\n' +
    '    name: \'用友集团\',\n' +
    '    refcode: \'org1\',\n' +
    '    refpk: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '    id: \'a4cf0601-51e6-4012-9967-b7a64a4b2d47\',\n' +
    '    refname: \'用友集团\',\n' +
    '  }],\n' +
    '  page: {\n' +
    '    pageCount: 1, // 总页数\n' +
    '    pageSize: \'10\', // 每页数据数\n' +
    '    totalElements: 9,\n' +
    '  },\n' +
    '};\n' +
    '// 模拟穿梭选中搜索\n' +
    'const transferTreeSelect = [\n' +
    '  {\n' +
    '    rownum_: 1,\n' +
    '    login_name: \'43\',\n' +
    '    name: \'花43\',\n' +
    '    refcode: \'43\',\n' +
    '    refpk: \'718dda50629e4f8a8833b5d17de85280\',\n' +
    '    id: \'718dda50629e4f8a8833b5d17de85280\',\n' +
    '    refname: \'花43\',\n' +
    '    key: \'43\',\n' +
    '    title: \'花43-43\',\n' +
    '  }, {\n' +
    '    rownum_: 2,\n' +
    '    login_name: \'46\',\n' +
    '    name: \'花46\',\n' +
    '    refcode: \'46\',\n' +
    '    refpk: \'b595b95cf45348d7aadb7ae349a89a76\',\n' +
    '    id: \'b595b95cf45348d7aadb7ae349a89a76\',\n' +
    '    refname: \'花46\',\n' +
    '    key: \'46\',\n' +
    '    title: \'花46-46\',\n' +
    '  }, {\n' +
    '    rownum_: 3,\n' +
    '    login_name: \'48\',\n' +
    '    name: \'花48\',\n' +
    '    refcode: \'48\',\n' +
    '    refpk: \'62310dd3677440ef96042b9c3ad135e2\',\n' +
    '    id: \'62310dd3677440ef96042b9c3ad135e2\',\n' +
    '    refname: \'花48\',\n' +
    '    key: \'48\',\n' +
    '    title: \'花48-48\',\n' +
    '  }];\n' +
    '\n' +
    'class Demo3 extends Component {\n' +
    '  constructor(props) {\n' +
    '    super(props);\n' +
    '    this.state = {\n' +
    '      delRows: [],\n' +
    '      handData: data,\n' +
    '    };\n' +
    '  }\n' +
    '\n' +
    '  columns = [\n' +
    '    {\n' +
    '      data: \'code\',\n' +
    '      type: \'text\',\n' +
    '      validator: (value, callback) => {\n' +
    '        callback(!!value);\n' +
    '      },\n' +
    '      allowInvalid: true,\n' +
    '      strict: true,\n' +
    '      onClick: (rowData, rowNum, value) => {\n' +
    '        console.log(\'rowData, rowNum, value\', rowData, rowNum, value);\n' +
    '      }\n' +
    '    },\n' +
    '\n' +
    '    {\n' +
    '      data: \'autocomplete\',\n' +
    '      type: \'autocomplete\',  // 下拉框\n' +
    '      refSource: (value, type, callback) => {\n' +
    '        const data = [\n' +
    '          {\n' +
    '            id: \'1\',\n' +
    '            code: \'1\',\n' +
    '            refname: \'xxxx\',\n' +
    '          }, {\n' +
    '            id: \'2\',\n' +
    '            code: \'2\',\n' +
    '            refname: \'yyyyy\',\n' +
    '          }, {\n' +
    '            id: \'3\',\n' +
    '            code: \'3\',\n' +
    '            refname: \'zzzz\',\n' +
    '          }];\n' +
    '\n' +
    '        return callback(data);\n' +
    '      },\n' +
    '      refConfig: {\n' +
    '        columnsKey: [\'refname\', \'id\', \'code\'], // 约定第一个为回写值,即表格中展示的数据\n' +
    '      },\n' +
    '      refOnChange: (refData, rowData, rowNum) => { // 下拉选中数据回调\n' +
    '        console.log(\'refData, rowData, rowNum\', refData, rowData, rowNum);\n' +
    '      },\n' +
    '    },\n' +
    '\n' +
    '    {\n' +
    '      data: \'staff\',\n' +
    '      type: \'refMultipleTable\', // 表格\n' +
    '      refConfig: {\n' +
    '        columnsData: refTableData.columnsData,\n' +
    '        columnsKey: [\'refname\', \'email\', \'mobile\'], // 约定第一个为回写值\n' +
    '      },\n' +
    '      refSource: (value, type, callback) => { // 表格简单搜索\n' +
    '        console.log(\'refSearch--table\', value, type);\n' +
    '        const result = { tableData: refTableData.tableData };\n' +
    '        if (value) {\n' +
    '          result.tableData = refTableSearch;\n' +
    '        }\n' +
    '        return callback(result);\n' +
    '      },\n' +
    '    },\n' +
    '    {\n' +
    '      data: \'department\',\n' +
    '      type: \'refTreeWithInput\', // 树参照\n' +
    '      refConfig: {\n' +
    '        treeData: refTreeData,\n' +
    '      },\n' +
    '      refSource: (value, type, callback) => { // 表格简单搜索\n' +
    '        console.log(\'refSearch--tree\', value, type);\n' +
    '        const result = { treeData: refTreeData };\n' +
    '        if (value) {\n' +
    '          result.treeData = refTreeSearch;\n' +
    '        }\n' +
    '        return callback(result);\n' +
    '      },\n' +
    '      refOnChange: (refData, rowData, rowNum) => {  // 参照选中数据,表格行数据,表格行下标\n' +
    '        console.log(\'refData, rowData, rowNum\', refData, rowData, rowNum);\n' +
    '      },\n' +
    '    },\n' +
    '    {\n' +
    '      data: \'department_staff\',\n' +
    '      type: \'refTreeTableWithInput\', // 树表参照\n' +
    '      refConfig: {\n' +
    '        columnsData: refTreeTableData.columnsData,\n' +
    '      },\n' +
    '\n' +
    '      refSource: (value, type, callback) => {\n' +
    '        const { treeData: searchTree, tableData: searchTable } = refTreeTableSearch;\n' +
    '        const result = {\n' +
    '          tableData: refTreeTableData.tableData,\n' +
    '          treeData: refTreeTableData.treeData,\n' +
    '          page: refTreeTableData.page,\n' +
    '        };\n' +
    '\n' +
    '        if (value && type === \'tree\') { // 树搜索\n' +
    '          result.tableData = [];\n' +
    '          result.treeData = searchTree;\n' +
    '        }\n' +
    '\n' +
    '        if (value && type === \'table\') { // 表格搜索\n' +
    '          result.tableData = searchTable;\n' +
    '        }\n' +
    '\n' +
    '        return callback(result);\n' +
    '      },\n' +
    '    },\n' +
    '    {\n' +
    '      data: \'department_staff_transfer\',\n' +
    '      type: \'refTreeTransferWithInput\', // 树穿梭参照\n' +
    '      refConfig: {\n' +
    '        displayField: \'{refname}-{refcode}-jaja\',\n' +
    '        valueField: \'refcode\',\n' +
    '      },\n' +
    '      refSource: (value, type, callback) => {\n' +
    '        const result = {\n' +
    '          treeData: refTreeTransferData.treeData,\n' +
    '          transferData: refTreeTransferData.transferData,\n' +
    '          targetKeys: [],\n' +
    '          columnsKey: [\'title\', \'refpk\', \'name\'],\n' +
    '        };\n' +
    '\n' +
    '        if (value) { // 树点击选择\n' +
    '          result.transferData = transferTreeSelect;\n' +
    '        }\n' +
    '        return callback(result);\n' +
    '      },\n' +
    '\n' +
    '\n' +
    '    },\n' +
    '\n' +
    '  ];\n' +
    '\n' +
    '  // 表格添加行\n' +
    '  onInsertRowData = () => {\n' +
    '    this.child.onInsertRowData();\n' +
    '  };\n' +
    '\n' +
    '  // 获取验证通过后数据\n' +
    '  getData = () => {\n' +
    '    this.child.getData((data) => {\n' +
    '      console.log(\'data\', data);\n' +
    '    });\n' +
    '  };\n' +
    '\n' +
    '\n' +
    '  // 获取被格式化的数据\n' +
    '  getFormatData = () => {\n' +
    '    const formatData = this.child.getFormatData();\n' +
    '    console.log(\'formatData\', formatData);\n' +
    '  };\n' +
    '\n' +
    '\n' +
    '  render() {\n' +
    '    const { handData } = this.state;\n' +
    '    console.log(this.columns);\n' +
    '\n' +
    '    return (\n' +
    '      <div className="demoPadding">\n' +
    '\n' +
    '        <div style={{ marginBottom: \'15px\' }}>\n' +
    '          <Button colors="primary" onClick={this.onInsertRowData} size="sm"> 增行 </Button>\n' +
    '          <Button colors="primary" onClick={this.getData} size="sm"> 获取验证数据</Button>\n' +
    '          <Button colors="primary" onClick={this.getFormatData} size="sm">格式化数据 </Button>\n' +
    '        </div>\n' +
    '\n' +
    '        <AcHandTable\n' +
    '          id="example3" // 组件id\n' +
    '          onRef={(ref) => { // 设置ref属性 调用子组件方法\n' +
    '            this.child = ref;\n' +
    '          }}\n' +
    '          colHeaders={[\'编码\', \'下拉搜索\', \'表格参照-人员\', \'树参照-部门\', \'树表参照-部门人员\', \'树穿梭-人员\']} // 表格表头\n' +
    '          data={handData} // 表体数据\n' +
    '          columns={this.columns} // 列属性设置\n' +
    '\n' +
    '          rowKey="id" // 数组对象中唯一id 默认值为\'id\'\n' +
    '        />\n' +
    '\n' +
    '      </div>\n' +
    '    );\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    'export default Demo3;\n',
  'desc': '  下拉搜索、表参照、树参照、表格参照、树穿梭参照'
}];


class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  fCloseDrawer = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { title, example, code, desc, scss_code } = this.props;

    const header = (
      <div>
        <p className='component-title'>{title}</p>
        <p>{desc}</p>
        <span className='component-code' onClick={this.handleClick}> 查看源码 <i
          className='uf uf-arrow-right'/> </span>
      </div>
    );
    return (
      <Col md={12} id={title.trim()} className='component-demo'>
        <Panel header={header}>
          {example}
        </Panel>

        <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right'
                onClose={this.fCloseDrawer}>
          <div className='component-code-copy'> JS代码
            <Clipboard action="copy" text={code}/>
          </div>
          <pre className="pre-js">
                <code className="hljs javascript">{code}</code>
            </pre>
          {!!scss_code ? <div className='component-code-copy copy-css'> SCSS代码
            <Clipboard action="copy" text={scss_code}/>
          </div> : null}
          {!!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{scss_code}</code>
                 </pre> : null}
        </Drawer>
      </Col>
    );
  }
}

class DemoGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        {DemoArray.map((child, index) => {

          return (
            <Demo example={child.example} title={child.title} code={child.code}
                  scss_code={child.scss_code} desc={child.desc} key={index}/>
          );

        })}
      </Row>
    );
  }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
