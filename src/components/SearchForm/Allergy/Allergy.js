import React, { Component } from 'react';
import {  Select } from 'antd';
import gf from '@groceristar/groceristar-fetch';
// @todo update the paths. put to components arrays
// import allergies from '../../../data/allergies';


class Allergy extends Component {

  constructor(props) {
    super(props)
    // @todo change to include
    this.state = {
      allergies: []
    }
  }

  componentDidMount() {


  }

  render(){
    const Option     = Select.Option;
    const options = [];
    //@todo change push to underscore methods
    var allergies = gf.getAllergies()

    for (let i = 0; i < allergies.length; i++) {
      options.push(
        <Option key={allergies[i].toString()}>{allergies[i].toString()}</Option>
      );
    }
    const onChange = (value) => {
      this.setState({ allergies: value })
      this.props.updateAllergy(value)
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
