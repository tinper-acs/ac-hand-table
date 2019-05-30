/**
 *
 * @title 基本示例1
 * @description 使用RefTreeTransferBaseUI，无input框
 *
 */
import React, { Component } from 'react';
import RefTreeTransferBaseUI from 'ref-tree-transfer';
import 'ref-tree-transfer/lib/index.css';
import { Button } from 'tinper-bee';

const op = {
  displayField: '{refname}-{refcode}-jaja',
  valueField: 'refcode',
};

class Demo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [{
        children: [{
          children: [],
          pid: 'lkp',
          refpk: '857c41b7-e1a3-11e5-aa70-0242ac11001d',
          refcode: 'wujd',
          id: 'wujd',
          isLeaf: 'true',
          refname: '开发部',
        }, {
          children: [],
          pid: 'lkp',
          refpk: '780aca16-e1a3-11e5-aa70-0242ac11001d',
          refcode: 'fzl',
          id: 'fzl',
          isLeaf: 'true',
          refname: '人事部',
        }],
        pid: '',
        refpk: '708918f5-e1a3-11e5-aa70-0242ac11001d',
        refcode: 'lkp',
        id: 'lkp',
        refname: '总公司',
      }],
      transferData: [{
        rownum_: 1,
        login_name: '43',
        name: '花43',
        refcode: '43',
        refpk: '718dda50629e4f8a8833b5d17de85280',
        id: '718dda50629e4f8a8833b5d17de85280',
        refname: '花43',
        key: '43',
        title: '花43-43',
      }, {
        rownum_: 2,
        login_name: '46',
        name: '花46',
        refcode: '46',
        refpk: 'b595b95cf45348d7aadb7ae349a89a76',
        id: 'b595b95cf45348d7aadb7ae349a89a76',
        refname: '花46',
        key: '46',
        title: '花46-46',
      }, {
        rownum_: 3,
        login_name: '48',
        name: '花48',
        refcode: '48',
        refpk: '62310dd3677440ef96042b9c3ad135e2',
        id: '62310dd3677440ef96042b9c3ad135e2',
        refname: '花48',
        key: '48',
        title: '花48-48',
      }, {
        rownum_: 4,
        login_name: '53',
        name: '花53',
        refcode: '53',
        refpk: 'd64f7d6e6d014d40841415cd35a43dcf',
        id: 'd64f7d6e6d014d40841415cd35a43dcf',
        refname: '花53',
        key: '53',
        title: '花53-53',
      }, {
        rownum_: 5,
        login_name: '70',
        name: '花70',
        refcode: '70',
        refpk: '2ff33db8d1e94bcbaf9ba45e1ad6ea9c',
        id: '2ff33db8d1e94bcbaf9ba45e1ad6ea9c',
        refname: '花70',
        key: '70',
        title: '花70-70',
      }, {
        rownum_: 6,
        login_name: '73',
        name: '花73',
        refcode: '73',
        refpk: '6d8328debfc94d5b8446f58d2b0b3cdc',
        id: '6d8328debfc94d5b8446f58d2b0b3cdc',
        refname: '花73',
        key: '73',
        title: '花73-73',
      }, {
        rownum_: 7,
        login_name: '76',
        name: '花76',
        refcode: '76',
        refpk: '7768b51dc14544669f2cffa840edb049',
        id: '7768b51dc14544669f2cffa840edb049',
        refname: '花76',
        key: '76',
        title: '花76-76',
      }, {
        rownum_: 8,
        login_name: '80',
        name: '花80',
        refcode: '80',
        refpk: 'a89cc45ed1ec49f19bb608c18c958359',
        id: 'a89cc45ed1ec49f19bb608c18c958359',
        refname: '花80',
        key: '80',
        title: '花80-80',
      }, {
        rownum_: 9,
        login_name: '78',
        name: '花78',
        refcode: '78',
        refpk: '438d0cce9ae442e586940a582c7ee054',
        id: '438d0cce9ae442e586940a582c7ee054',
        refname: '花78',
        key: '78',
        title: '花78-78',
      }, {
        rownum_: 10,
        login_name: '79',
        name: '花79',
        refcode: '79',
        refpk: '60adbcb7d4cb49449bc7879dd4fbf1f5',
        id: '60adbcb7d4cb49449bc7879dd4fbf1f5',
        refname: '花79',
        key: '79',
        title: '花79-79',
      }, {
        login_name: 'zhao',
        refpk: '14e0220f-1a86-4861-8f74-f7134cb3235b',
        id: '14e0220f-1a86-4861-8f74-f7134cb3235b',
        refcode: 'zhao',
        name: '赵宇',
        refname: '赵宇',
        key: 'zhao',
        title: '赵宇-zhao',
      }, {
        login_name: 'chen',
        refpk: '14e0220f-1a86-4861-8f74-f71343333b5b',
        id: '14e0220f-1a86-4861-8f74-f71343333b5b',
        refcode: 'chen',
        name: '陈辉',
        refname: '陈辉',
        key: 'chen',
        title: '陈辉-chen',
      }, {
        login_name: 'yue',
        refpk: '14e0220f-1a86-4861-8f74-545454547489',
        id: '14e0220f-1a86-4861-8f74-545454547489',
        refcode: 'yue',
        name: '岳明',
        refname: '岳明',
        key: 'yue',
        title: '岳明-yue',
      }, {
        login_name: 'xiao',
        refpk: '14e0220f-1a86-4861-8f74-543434537379',
        id: '14e0220f-1a86-4861-8f74-543434537379',
        refcode: 'xiao',
        name: '小羽',
        refname: '小羽',
        key: 'xiao',
        title: '小羽-xiao',
      }, {
        login_name: '123',
        refpk: '14e0220f-1a86-4861-8f74-334455643336',
        id: '14e0220f-1a86-4861-8f74-334455643336',
        refcode: '123',
        name: '123',
        refname: '123',
        key: '123',
        title: '123-123',
      }, {
        login_name: 'huang',
        refpk: '14e0220f-1a86-4861-8f74-333387127390',
        id: '14e0220f-1a86-4861-8f74-333387127390',
        refcode: 'huang',
        name: '黄东东',
        refname: '黄东东',
        key: 'huang',
        title: '黄东东-huang',
      }, {
        login_name: 'liu',
        refpk: '14e0220f-1a86-4861-8f74-3332332kjffo',
        id: '14e0220f-1a86-4861-8f74-3332332kjffo',
        refcode: 'liu',
        name: '刘志鹏',
        refname: '刘志鹏',
        key: 'liu',
        title: '刘志鹏-liu',
      }, {
        login_name: 'liukunlin',
        refpk: '14e0220f-1a86-4861-8f74-23323e321263',
        id: '14e0220f-1a86-4861-8f74-23323e321263',
        refcode: 'liukunlin',
        name: '刘坤琳',
        refname: '刘坤琳',
        key: 'liukunlin',
        title: '刘坤琳-liukunlin',
      }],
      targetKeys: [],
      confirmTargetKeys: [],
      showModal: false,
    };
    this.transferData = [{
      rownum_: 1,
      login_name: '43',
      name: '花43',
      refcode: '43',
      refpk: '718dda50629e4f8a8833b5d17de85280',
      id: '718dda50629e4f8a8833b5d17de85280',
      refname: '花43',
    }, {
      rownum_: 2,
      login_name: '46',
      name: '花46',
      refcode: '46',
      refpk: 'b595b95cf45348d7aadb7ae349a89a76',
      id: 'b595b95cf45348d7aadb7ae349a89a76',
      refname: '花46',
    }, {
      rownum_: 3,
      login_name: '48',
      name: '花48',
      refcode: '48',
      refpk: '62310dd3677440ef96042b9c3ad135e2',
      id: '62310dd3677440ef96042b9c3ad135e2',
      refname: '花48',
    }, {
      rownum_: 4,
      login_name: '53',
      name: '花53',
      refcode: '53',
      refpk: 'd64f7d6e6d014d40841415cd35a43dcf',
      id: 'd64f7d6e6d014d40841415cd35a43dcf',
      refname: '花53',
    }, {
      rownum_: 5,
      login_name: '70',
      name: '花70',
      refcode: '70',
      refpk: '2ff33db8d1e94bcbaf9ba45e1ad6ea9c',
      id: '2ff33db8d1e94bcbaf9ba45e1ad6ea9c',
      refname: '花70',
    }, {
      rownum_: 6,
      login_name: '73',
      name: '花73',
      refcode: '73',
      refpk: '6d8328debfc94d5b8446f58d2b0b3cdc',
      id: '6d8328debfc94d5b8446f58d2b0b3cdc',
      refname: '花73',
    }, {
      rownum_: 7,
      login_name: '76',
      name: '花76',
      refcode: '76',
      refpk: '7768b51dc14544669f2cffa840edb049',
      id: '7768b51dc14544669f2cffa840edb049',
      refname: '花76',
    }, {
      rownum_: 8,
      login_name: '80',
      name: '花80',
      refcode: '80',
      refpk: 'a89cc45ed1ec49f19bb608c18c958359',
      id: 'a89cc45ed1ec49f19bb608c18c958359',
      refname: '花80',
    }, {
      rownum_: 9,
      login_name: '78',
      name: '花78',
      refcode: '78',
      refpk: '438d0cce9ae442e586940a582c7ee054',
      id: '438d0cce9ae442e586940a582c7ee054',
      refname: '花78',
    }, {
      rownum_: 10,
      login_name: '79',
      name: '花79',
      refcode: '79',
      refpk: '60adbcb7d4cb49449bc7879dd4fbf1f5',
      id: '60adbcb7d4cb49449bc7879dd4fbf1f5',
      refname: '花79',
    }, {
      login_name: 'zhao',
      refpk: '14e0220f-1a86-4861-8f74-f7134cb3235b',
      id: '14e0220f-1a86-4861-8f74-f7134cb3235b',
      refcode: 'zhao',
      name: '赵宇',
      refname: '赵宇',
    }, {
      login_name: 'chen',
      refpk: '14e0220f-1a86-4861-8f74-f71343333b5b',
      id: '14e0220f-1a86-4861-8f74-f71343333b5b',
      refcode: 'chen',
      name: '陈辉',
      refname: '陈辉',
    }, {
      login_name: 'yue',
      refpk: '14e0220f-1a86-4861-8f74-545454547489',
      id: '14e0220f-1a86-4861-8f74-545454547489',
      refcode: 'yue',
      name: '岳明',
      refname: '岳明',
    }, {
      login_name: 'xiao',
      refpk: '14e0220f-1a86-4861-8f74-543434537379',
      id: '14e0220f-1a86-4861-8f74-543434537379',
      refcode: 'xiao',
      name: '小羽',
      refname: '小羽',
    }, {
      login_name: '123',
      refpk: '14e0220f-1a86-4861-8f74-334455643336',
      id: '14e0220f-1a86-4861-8f74-334455643336',
      refcode: '123',
      name: '123',
      refname: '123',
    }, {
      login_name: 'huang',
      refpk: '14e0220f-1a86-4861-8f74-333387127390',
      id: '14e0220f-1a86-4861-8f74-333387127390',
      refcode: 'huang',
      name: '黄东东',
      refname: '黄东东',
    }, {
      login_name: 'liu',
      refpk: '14e0220f-1a86-4861-8f74-3332332kjffo',
      id: '14e0220f-1a86-4861-8f74-3332332kjffo',
      refcode: 'liu',
      name: '刘志鹏',
      refname: '刘志鹏',
    }, {
      login_name: 'liukunlin',
      refpk: '14e0220f-1a86-4861-8f74-23323e321263',
      id: '14e0220f-1a86-4861-8f74-23323e321263',
      refcode: 'liukunlin',
      name: '刘坤琳',
      refname: '刘坤琳',
    }];
  }


  handleTreeSelect = (selectNode = {}) => {
    const { targetKeys } = this.state;
    const { valueField } = op;
    let startFlag;
    let endFlag;
    if (selectNode.refcode === 'fzl') {
      startFlag = 10;
      endFlag = 18;
    } else if (selectNode.refcode === 'wujd') {
      startFlag = 0;
      endFlag = 10;
    } else {
      startFlag = 0;
      endFlag = 18;
    }
    const newData = this.transferData.slice(startFlag, endFlag);// 模拟ajax请求拿到新数据
    const selectedData = this.transferData.filter(v => targetKeys.some(key => key == v[valueField]));// 已经在右表（已选中）数据获取
    const temp = newData.filter((v, k) => selectedData.every(v1 => v1[valueField] != v[valueField]));// 新数据排除已选中
    const tempTransferData = temp.concat(selectedData);
    this.setState({
      transferData: tempTransferData,
    });
  };

  transferSave = () => {
    const { transferData, targetKeys } = this.state;
    console.log('targetKeys', targetKeys);
    // const needTransferData = [];
    // targetKeys.forEach((v, i) => {
    //   transferData.forEach((v2, i2) => {
    //     if (v == v2.refcode) {
    //       needTransferData.push(v2);
    //     }
    //   });
    // });
    // this.setState({
    //   confirmTargetKeys: needTransferData,
    //   showModal: false,
    // });
  };

  transferCancel = () => {
    const { confirmTargetKeys } = this.state;
    const cancelTargetKeys = [];
    confirmTargetKeys.forEach((v, i) => {
      cancelTargetKeys.push(v.refcode);
    });
    this.setState({
      targetKeys: cancelTargetKeys,
      showModal: false,
    });
  };

  setTargetKeys = (targetKeys) => {
    this.setState({
      targetKeys,
    });
  };

  onChangerightSearch = (value) => {
    alert(`onChangerightSearch${value}`);
  };

  render() {
    const {
      treeData, transferData = [], targetKeys, showModal,
    } = this.state;
    // 20190226穿梭框没有清空按钮并且目前存在问题
    const baseProps = {
      ...op,

      // transfer
      treeData,
      transferData,
      targetKeys,
      setTargetKeys: this.setTargetKeys,
      onChangerightSearch: this.onChangerightSearch,
      // 方法
      handleTreeSelect: this.handleTreeSelect,
      onSave: this.transferSave,
      onCancel: this.transferCancel,
      showModal,
    };
    return (
      <div>
        <RefTreeTransferBaseUI
          {...baseProps}
        />
        <Button
          colors="primary"
          onClick={() => {
            this.setState({ showModal: true });
          }}
        >
          打开
        </Button>
      </div>
    );
  }
}

export default Demo4;
