import React, { Component } from 'react';
import {
  Select,

} from 'antd';
import gf from '@groceristar/groceristar-fetch';
// @todo update the paths. put to components arrays
// import diets from '../../../data/diets';



class Diet extends Component {
  constructor(props) {
    super(props)

    // @todo change to include
    this.state = {
      diets: [],
    }
  }

  onChange(value) {
    this.setState({ diets: value })
    this.props.updateDiet(value)
  }

  render(){
    const Option     = Select.Option;
    //@todo change push to underscore methods
    const options = [];
    var diets = gf.getDiets()
    for (let i = 0; i < diets.length; i++) {
      options.push(
        <Option key={diets[i].toString()}>{diets[i].toString()}</Option>
      );
    }

    return (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Specific Diets"
        onChange={this.onChange.bind(this)}
      >
        {options}
      </Select>
    );
  }
}
export default Diet;
