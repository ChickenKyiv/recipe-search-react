import React, { Component } from 'react';

import {
  Select
} from 'antd';

import shori from 'shortid';

const Option   = Select.Option;

class SelectContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list       : props.list,
      values     : []
    }

    this._change = this._change.bind(this);


  }

  _change(items) {
    this.setState({values: [...items]})
    console.log(items)
  }

  render(){

      return (
        <Select mode="multiple"
                style={{ width: '100%' }}
                onChange={this._change}>

           {Object.keys(this.state.list).map(
             (item, index) => <Option key={shortid.generate}>{this.state.list[index]}</Option>
           )}

        </Select>
      );
  }



};

export default SelectContainer;
