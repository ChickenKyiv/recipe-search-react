import React, { Component } from 'react';

import {
  Select
} from 'antd';

import shortid from 'shortid';

const Option   = Select.Option;

class SelectContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list       : props.list,
      flag       : props.flag,
      selected     : [],
      name       : ( (props.flag) ? 'allowed' : 'excluded' ) + props.name,
      placeholder: props.placeholder
    }
    // console.log(props.placeholder)
    this._change = this._change.bind(this);


  }

  _change(items) {
    this.setState({selected: [...items]})
    console.log(items)
  }

  render(){

      return (
        <Select mode="multiple"
                style={{ width: '100%' }}
                onChange={this._change}
                placeholder={this.state.placeholder}>

                {Object.keys(this.state.list).map(
                  (item, index) =>
                     <Option key={shortid.generate()}>
                       {this.state.list[index]}
                     </Option>
                )}


        </Select>
      );

  }



};

export default SelectContainer;
