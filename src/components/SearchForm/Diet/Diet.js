import React, { Component } from 'react';
import {
  Select,

} from 'antd';

// @todo update the paths. put to components arrays
import diets from '../../../data/diets';

const Option     = Select.Option;
//@todo change push to underscore methods
const options = [];
for (let i = 0; i < diets.length; i++) {
  options.push(
    <Option key={diets[i].toString()}>{diets[i].toString()}</Option>
  );
}

class Diet extends Component {
  constructor(props) {
    super(props)

    // @todo change to include
    this.state = {
      diets: [],
    }
  }

  render(){

    const onChange = (value) => {
      this.setState({ diets: value })
    };

    return (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Specific Diets"
        onChange={onChange}
      >
        {options}
      </Select>
    );
  }
}
export default Diet;
