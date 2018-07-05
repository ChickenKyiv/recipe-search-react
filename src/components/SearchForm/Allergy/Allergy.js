import React, { Component } from 'react';
import {  Col } from 'antd';

// @TODO move later to parents stuff
import gf from '@groceristar/groceristar-fetch';

import SelectContainer from '../SelectContainer/SelectContainer'
class Allergy extends Component {

  constructor(props) {
    super(props)
    // @todo change to include
    // this.state = {
    //   allergies: []
    // }
  }

  // onChange(value) {
  //   this.setState({ allergies: value })
  //   this.props.updateAllergy(value)
  // };

  render(){
    // const Option     = Select.Option;
    // const options = [];
    // //@todo change push to underscore methods
    // var allergies = gf.getAllergies()
    //
    // for (let i = 0; i < allergies.length; i++) {
    //   options.push(
    //     <Option key={allergies[i].toString()}>{allergies[i].toString()}</Option>
    //   );
    // }


    // return (
    //   <Select
    //     mode="multiple"
    //     style={{ width: '100%' }}
    //     placeholder="Allergies"
    //     onChange={this.onChange.bind(this)}
    //   >
    //     {options}
    //   </Select>
    // );
    const placeholder = () => {
      return "Allergies";
    }
    console.log(gf.getAllergies())
    // @TODO i think we can move selectContainer outside too. but not sure how
    return (
      <Col span="12">
        <SelectContainer list={gf.getAllergies()} placeholder={placeholder()} />

      </Col>
    );
  }
}
export default Allergy;
