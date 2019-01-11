import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

import gf from '@groceristar/groceristar-fetch';
import Item from '../Item/Item'

class Ingredient extends Component {

  constructor(props) {
    super(props)

    this.state = {
      flag       : props.flag,
      values     : [],
      name       : ( (props.flag) ? 'allowed' : 'excluded' ) + 'Ingredient'
    }
  }

  _change(item) {
    this.setState({values: [...item]})
  }
  // createName() {
  //   return ( this.state.flag )
  //           ? 'allowed'
  //           : 'excluded'
  //           + 'Ingredient';
  // }
  // updateDontHaveIngredients(item) {
  //   this.setState({excludedIngredients: [...item]})
  // }



  render(){
    const onChange = (value) => {
      this.setState({ values: value })
      this.props.updateIng(value)
    };

    const createName = (className) => {
      return ( this.state.flag )
              ? 'allowed'
              : 'excluded'
              + 'Ingredient';
    };
    const placeholder = ( flag ) => {
      return (flag) ? "Ingredients you have" : "Ingredients you don't have";
    }

    // const Option     = Select.Option;

    // console.log((this.props.passedSelected);

    //@todo change push to underscore methods
    const options = [];
    var ingredients = gf.getIngredients()

    for (let i = 0; i < ingredients.length; i++) {
      //console.log(this.props.placeholder+this.props.passedSelected.indexOf(ingredients[i]))
      var name = ingredients[i].toString();
  

    }

    return (
      <Col span="12">
        <Select mode="multiple" style={{ width: '100%' }}
                name={this.name}
                placeholder={placeholder(this.props.sign)}
                onChange={_change}>
          {options}
        </Select>
      </Col>
    );
  }

}
export default Ingredient;
