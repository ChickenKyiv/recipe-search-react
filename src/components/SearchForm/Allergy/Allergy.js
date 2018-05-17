import React, { Component } from 'react';
import {
  Select,
  
} from 'antd';

// @todo update the paths. put to components arrays
import allergies from '../../../data/allergies';


const Option     = Select.Option;

//@todo change push to underscore methods
const options = [];
for (let i = 0; i < allergies.length; i++) {
  options.push(
    <Option key={allergies[i].toString()}>{allergies[i].toString()}</Option>
  );
}

class Allergy extends Component {
  constructor(props) {
    super(props)

    // @todo change to include
    this.state = {
      allergies: []
    }
  }

  render(){

    const onChange = (value) => {
      this.setState({ allergies: value })
    };

    return (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Allergies"
        onChange={onChange}
      >
        {options}
      </Select>
    );
  }
}
export default Allergy;
