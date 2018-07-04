import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

import gf from '@groceristar/groceristar-fetch';
import Item from '../Item/Item'

class Ingredient extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sign       : props.sign,
      values     : []
    }

    this._change = this._change.bind(this);


  }

  _change(item) {
    this.setState({values: [...item]})
  }

  // updateDontHaveIngredients(item) {
  //   this.setState({excludedIngredients: [...item]})
  // }



  render(){
    const onChange = (value) => {
      this.setState({ values: value })
      this.props.updateIng(value)
    };

    // const createName = (className) => {
    //   return ( this.state.sign )
    //           ? 'allowed'
    //           : 'excluded'
    //
    //           + className
    //           ;
    // };
    // const placeholder = ( flag ) => {
    //   return (flag) ? "Ingredients you have" : "Ingredients you don't have";
    // }



    //@todo change push to underscore methods
    const options = [];
    var ingredients = gf.getIngredients()


    return (
      <Col span="12">
        <Select mode="multiple" style={{ width: '100%' }}
                onChange={_change}>
          {options}
        </Select>
      </Col>
    );
  }

}
export default Ingredient;
