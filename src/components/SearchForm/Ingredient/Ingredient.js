import React, { Component } from 'react';
import { Col } from 'antd';

import gf from '@groceristar/groceristar-fetch';
import SelectContainer from '../SelectContainer/SelectContainer'


class Ingredient extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flag: props.flag,
      selected: []
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    console.log(event);
  }

  render(){

    const placeholder = () => {
      return (this.state.flag) ? "Ingredients you have" : "Ingredients you don't have";
    }

    return (
      <Col span="12">
        <SelectContainer
          list={gf.getIngredients()}
          placeholder={placeholder()}
          onChange={this.handleChange} />
      </Col>
    );
  }

}
export default Ingredient;
