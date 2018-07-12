import React, { Component } from 'react';
import { Col } from 'antd';

import Attribute      from '../Attribute/Attribute'
import Ingredient     from '../Ingredient/Ingredient'
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
    this.renderField = this.renderField.bind(this);
    this.renderChildrens = this.renderChildrens.bind(this);

    this.Field = this.Field.bind(this);
  }


  Field(props, sign) {

    const components = {
      attribute: Attribute,
      ingredient: Ingredient
    };

    // Correct! JSX type can be a capitalized variable.
    const Component = components[props.type];
    return <Component
              type={props.type}
              onChange={this.handleChange}
              sign={sign} />;
  }

  handleChange(items, sign = true) {

    if( sign ){
      this.setState({ allowed: [...items] })
    } else {
      this.setState({ excluded: [...items] })
    }

    console.log(this.state)
  }

  renderField(sign){
    return (
      <Col>
        { this.Field(this.props, sign) }
      </Col>
    )

  }
  //@TODO Yeah, it can be updated to a better way
  renderChildrens(){
      this.renderField(true);
      this.renderField(false);
  }

  render(){
    return (
        <GroupContainer>
          {this.renderChildrens()}
        </GroupContainer>
    );
    // return (
    //   <GroupContainer>
    //     <Col>
    //       <Attribute type={this.props.type} onChange={this.handleChange} sign={true} />
    //     </Col>
    //     <Col>
    //       <Attribute type={this.props.type} onChange={this.handleChange} sign={false} />
    //     </Col>
    //   </GroupContainer>
    // );
  }

}
export default UnitedSelectField;
