import React, { Component } from 'react';
import { Col } from 'antd';

import Attribute      from '../Attribute/Attribute'
import Attribute      from '../Ingredient/Ingredient'
import GroupContainer from '../GroupContainer/GroupContainer'


class UnitedSelectField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // selected: [],

      // do we need them well?
      allowed:  [],
      excluded: []
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(items, sign = true) {

    if( sign ){
      this.setState({ allowed: [...items] })
    } else {
      this.setState({ excluded: [...items] })
    }

    console.log(this.state)
  }

  renderField(){

  }

  renderChildrens(){

  }

  render(){
    return (
      <GroupContainer>
        <Col>
          <Attribute type={this.props.type} onChange={this.handleChange} sign={true} />
        </Col>
        <Col>
          <Attribute type={this.props.type} onChange={this.handleChange} sign={false} />
        </Col>
      </GroupContainer>
    );
  }

}
export default UnitedSelectField;
