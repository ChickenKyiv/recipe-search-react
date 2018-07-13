import React, { Component } from 'react';
import { Col } from 'antd';

import Attribute      from '../Attribute/Attribute'
import Ingredient     from '../Ingredient/Ingredient'
import GroupContainer from '../GroupContainer/GroupContainer'


class UnitedSelectField extends Component {

  constructor(props) {
    super(props);

    this.state = {


      // do we need them well?
      allowed:  [],
      excluded: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.renderField = this.renderField.bind(this);
    // this.renderChildrens = this.renderChildrens.bind(this);

  }


//@TODO Yeah, update it
  handleChange(items, sign = true, type) {

    console.log(type)

    if( sign ){
      this.setState({
        // this.props.type: {
          allowed: [...items]
        // }
      })
    } else {
      this.setState({
        // this.props.type: {
          excluded: [...items]
        // }
      })
    }

    console.log(this.state)
  }

// @TODO move field to separated component too
  renderField(sign){

    const types = {
      Allergy   : Attribute,
      Diet      : Attribute,
      Course    : Attribute,
      Cuisine   : Attribute,
      Holiday   : Attribute,
      Ingredient: Ingredient
    };
    const Component = types[this.props.type];

    return (
      <Col>
        <Component
            type={this.props.type}
            onChange={this.handleChange}
            sign={sign} />
      </Col>
    )

  }

  render(){
    return (
        <GroupContainer>
          {this.renderField(true)}
          {this.renderField(false)}
        </GroupContainer>
    );
  }

}
export default UnitedSelectField;
