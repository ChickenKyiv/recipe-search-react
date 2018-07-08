import React, { Component } from 'react';
import {  Col } from 'antd';

// @TODO move later to parents stuff
import gf from '@groceristar/groceristar-fetch';

import SelectContainer from '../SelectContainer/SelectContainer'
class Allergy extends Component {

  constructor(props) {
    super(props)
    // @todo change to include
    this.state = {
      list: props.list,
      selected: []
    }
    console.log('const');
  }

  render(){
    return (<div></div>)
    // // @TODO i think we can move selectContainer outside too. but not sure how
    // return (
    //   <Col span="12">
    //     <SelectContainer list={this.state.list} placeholder={placeholder()} />
    //
    //   </Col>
    // );
    // return (
    //   <Col span="12">
    //     <SelectContainer list={gf.getAllergies()} placeholder={placeholder()} />
    //
    //   </Col>
    // );
  }
}
export default Allergy;
