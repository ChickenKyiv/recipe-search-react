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
    if(this.props.type == 'Ingredient'){
      return (
        <Col>
        <Ingredient type={this.props.type}
          onChange={this.handleChange}
          sign={sign} />
          </Col>
      );
    } else {
      // we assume that other united fields related to Attributes
      return (<Col>
      <Attribute
        type={this.props.type}
        onChange={this.handleChange}
        sign={sign} />
        </Col>
      );
    }

    const components = {
      photo: PhotoStory,
      video: VideoStory
    };

    function Story(props) {
      // Correct! JSX type can be a capitalized variable.
      const SpecificStory = components[props.storyType];
      return <SpecificStory story={props.story} />;
    }
  }

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
