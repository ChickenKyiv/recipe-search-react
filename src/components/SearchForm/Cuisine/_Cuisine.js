import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';
import gf from '@groceristar/groceristar-fetch';


class Cuisine extends Component {
  constructor(props) {
    super(props)

    // @todo change to include, exclude
    this.state = {
      sign       : props.sign,
      values     : []
    }
  }
  // placeholder( flag ) {
  //   return (flag) ? "Cuisines you like"  : "Cuisines you don't like"
  // }


  render(){
    const placeholder = ( flag ) => {
       return (flag) ? "Cuisines you like"  : "Cuisines you don't like"
    }

    return (
      <Col span="12">
        <SelectContainer list={gf.getIngredients()} placeholder={placeholder()} />
      </Col>
    );
  }
}
export default Cuisine;
