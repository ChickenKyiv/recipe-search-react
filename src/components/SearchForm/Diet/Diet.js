import React, { Component } from 'react';
import { Select } from 'antd';

// @todo update the paths. put to components arrays
import specific_diets from '../../../data/specific_diets';

const Option     = Select.Option;
//@todo change push to underscore methods
const options = [];
for (let i = 0; i < specific_diets.length; i++) {
  options.push(
    <Option key={specific_diets[i].toString()}>{specific_diets[i].toString()}</Option>
  );
}

class Diet extends Component {
  constructor(props) {
    super(props)

    // @todo change to include
    this.state = {
      specific_diets: [],
    }
  }

  render(){

    const handleChangeSpecific_diets = (value) => {
      this.setState({ specific_diets: value })
    };

    return (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Specific Diets"
        onChange={handleChangeSpecific_diets}
      >
        {children_select_specific_diets}

      </Select>
    );
  }
}
export default Diet;
