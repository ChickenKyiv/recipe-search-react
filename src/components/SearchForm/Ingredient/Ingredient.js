import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

import gf from '@groceristar/groceristar-fetch';

import SelectContainer from '../Item/SelectContainer'


class Ingredient extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sign       : props.sign,
      values     : [],
      flag: props.flag
    }

    // this._change = this._change.bind(this);
    this.placeholder = this.placeholder.bind(this);

  }
  placeholder = () => {
    return (this.state.flag) ? "Ingredients you have" : "Ingredients you don't have";
  }

  // _change(items) {
  //   this.setState({values: [...items]})
  //   console.log(items)
  // }

  render(){



    var list = gf.getIngredients()

    return (
      <Col span="12">
        <SelectContainer list={list} />

      </Col>
    );
  }

}
export default Ingredient;
