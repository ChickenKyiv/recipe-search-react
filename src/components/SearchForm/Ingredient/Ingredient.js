import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

import gf from '@groceristar/groceristar-fetch';

// @todo update the paths. put to components arrays
// import ingredients from '../../../data/ingredients';

class Ingredient extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sign       : props.sign,
      values     : []
    }
  }
  onChange(value) {
    this.setState({ values: value })
    this.props.updateIng(value)
  }

  createName(className) {
    return ( this.state.sign )
            ? 'allowed'
            : 'excluded'

            + className
            ;
  }
  
  render(){

    const Option     = Select.Option;

    //@todo change push to underscore methods
    const options = [];
    var ingredients = gf.getIngredients()
    for (let i = 0; i < ingredients.length; i++) {
      //console.log(this.props.placeholder+this.props.passedSelected.indexOf(ingredients[i]))
      if(this.props.passedSelected.indexOf(ingredients[i]) === -1){
        options.push(
          <Option key={ingredients[i].toString()} disabled={false}>{ingredients[i].toString()}</Option>
        );
        // console.log("enable in opp of",this.props.placeholder);
      }
      else{
        options.push(
          <Option key={ingredients[i].toString()} disabled={true}>{ingredients[i].toString()}</Option>
        );
        // console.log("disable in opp of",this.props.placeholder);
      }

    }

    return (
      <Col span="12">
        <Select mode="multiple" style={{ width: '100%' }} name={this.createName('Ingredient')}
         placeholder={this.props.placeholder} onChange={this.onChange.bind(this)}>
          {options}
        </Select>
      </Col>
    );
  }

}
export default Ingredient;
