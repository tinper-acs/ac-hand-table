/**
 *
 * @title 基础示例1
 * @description 表格参照，使用RefMultipleTableBaseUI,不带有input
 *
 */
import React, { Component } from 'react';
import { Button, Form } from 'tinper-bee';

import RefMultipleTableBaseUI from 'ref-multiple-table';

import 'ref-multiple-table/lib/index.css';


const props = {
  miniSearch: false,
  valueField: 'refpk',
  displayField: '{refname}',
};

class RefMultipleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoading: false,
      showModal: false,
    };

  }


  componentDidMount() {

  }


  componentWillReceiveProps(nextProps) {

    const { showModal } = nextProps;// 表体数据
    this.setState({ showModal });

  }

  /** end:分页 */
  onSave = (item) => {
    this.setState({ showModal: false });
    this.props.onSaveRef(item);

  };

  onCancel = (item) => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const { columnsData = [], tableData = [] } = this.props;
    const childrenProps = {
      showModal,
      columnsData,
      tableData,
      onSave: this.onSave,
      onCancel: this.onCancel,
    };

    return (
      <RefMultipleTableBaseUI
        {...childrenProps}
      />
    );
  }
}

export default RefMultipleTable;
