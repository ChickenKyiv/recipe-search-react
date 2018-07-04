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
      sign       : props.sign,
      values     : []
    }
  }



  render(){
    const onChange = (value) => {
      this.setState({ values: value })
      this.props.updateIng(value)
    };

    const createName = (className) => {
      return ( this.state.sign )
              ? 'allowed'
              : 'excluded'

              + className
              ;
    };
    const zplaceholder = ( flag ) => {
      return (flag) ? "Ingredients you have" : "Ingredients you don't have";
    }

    const Option     = Select.Option;

    //@todo change push to underscore methods
    const options = [];
    var ingredients = gf.getIngredients()
    for (let i = 0; i < ingredients.length; i++) {
      //console.log(this.props.placeholder+this.props.passedSelected.indexOf(ingredients[i]))
      if(this.props.passedSelected.indexOf(ingredients[i]) === -1){
        var name = ingredients[i].toString();
        // options.push(
        //   <Option key={ingredients[i].toString()} disabled={false}>{ingredients[i].toString()}</Option>
        // );
        options.push(<Item key={name} disabled={false}>{name}</Item>)
        // console.log("enable in opp of",this.props.placeholder);
      } else {
        // options.push(
        //   <Option key={ingredients[i].toString()} disabled={true}>{ingredients[i].toString()}</Option>
        // );
        options.push(<Item key={name} disabled={true}>{name}</Item>)
        // console.log("disable in opp of",this.props.placeholder);
      }

    }

    return (
      <Col span="12">
        <Select mode="multiple" style={{ width: '100%' }}
                name={createName('Ingredient')}
                placeholder={zplaceholder(this.props.sign)}
                onChange={onChange}>
          {options}
        </Select>
      </Col>
    );
  }

}
export default Ingredient;
