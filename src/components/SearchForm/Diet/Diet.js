import React, { Component } from 'react';
import {
  Select,

} from 'antd';
const gf = require('@groceristar/groceristar-fetch')
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

    const onChange = (value) => {
      this.setState({ diets: value })
      this.props.updateDiet(value)
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
