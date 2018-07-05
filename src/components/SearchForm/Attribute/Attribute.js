import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';
import gf from '@groceristar/groceristar-fetch';


class Attribute extends Component {
  constructor(props) {
    super(props)

    // @todo change to include, exclude
    this.state = {
      // sign       : props.sign,
      // values     : []
      selected:[]
    }
  }
  // placeholder( flag ) {
  //   return (flag) ? "Attribute you like"  : "Attribute you don't like"
  // }
  _change(items) {
    this.setState({selected: [...items]})
    console.log('-----------');
    console.log(items)
  }



  render(){

    const TYPES = {
      allergy: 'Allergy',
      course : 'Course',
      cuisine: 'Cuisine',
      diet   : 'Diet',
      holiday: 'Holiday'
    }

    // const isUnited = (this.props.united);

    const Component = TYPES[this.props.type];

    return (
        <Component {...props} onChange={this._change}>
    );
  }
}
export default Attribute;
