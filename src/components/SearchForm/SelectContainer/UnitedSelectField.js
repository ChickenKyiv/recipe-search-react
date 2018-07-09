import React, { Component } from 'react';
import { Col } from 'antd';

// import gf from '@groceristar/groceristar-fetch';
import Attribute      from '../Attribute/Attribute'
import GroupContainer from '../GroupContainer/GroupContainer'
// import Cuisine from '../Cuisine/Cuisine';


class UnitedSelectField extends Component {

  constructor(props) {
    super(props);

    this.state = {
    //   flag: props.flag,
      selected: [],

      // do we need them well?
      allowed:  [],
      excluded: []
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(items, sign = true) {
    // this.setState({selected: [...items]})
    // console.log(items)
    // console.log('zzzzzzz');
    if(sign){
      this.setState({allowed: [...items]})
    } else {
      this.setState({excluded: [...items]})
    }

    console.log(this.state)
  }

  render(){

    // this.props.children.map((item) => {
    //   console.log(item)
    // })
    // const Component = this.props.type;
      // console.log(Component);

    return (
      <GroupContainer>
        <Attribute type={this.props.type} onChange={this.handleChange} sign={true} />
        <Attribute type={this.props.type} onChange={this.handleChange} sign={false} />
      </GroupContainer>
    );
    // return (
    //   <GroupContainer onChange={this.handleChange}>
    //     {this.props.children}
    //   </GroupContainer>
    // );
    // <Attribute type="Cuisine" />
    // <Attribute type="Cuisine" />
  }

}
export default UnitedSelectField;
