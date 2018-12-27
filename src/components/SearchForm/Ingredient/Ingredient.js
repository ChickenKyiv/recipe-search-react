import React, { Component } from 'react';
import { Col } from 'antd';

import gf from '@groceristar/groceristar-fetch';



import {
  getAttribute,
  getPlaceholder,
  getIngredients
} from "../../../selectors/selector";

import { GroupedElements } from '@groceristar/select-component';



import SelectContainer from '../SelectContainer/SelectContainer'


class Ingredient extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sign    : props.sign,
      selected: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event){
  //   console.log(event);
  // }
  handleChange(items) {
    this.setState({ selected: [items] })
    // console.log('-----------');
    // console.log(items);
    // console.log(this.state)

    // if( this.props.sign )



    // when sign is underfined - then our field is single, and don't have an evil twin
    if ( this.state.sign !== undefined ){
    //   // console.log(this.state.sign)
    //@TODO i don't like how it looks
      this.props.onChange(items, this.state.sign, this.props.type);
    }


    //
  }

  render(){

    const placeholder = () => {
      return (this.state.flag) ? "Ingredients you have" : "Ingredients you don't have";
    }


    // @TODO compare placeholder with getPlaceholder data - because we can have not a same results.

    const plhldr  = getPlaceholder('ingredients', false);
    // const plhldr  = getPlaceholder('ingredients', true);
    const options = getIngredients()


    return (

        <SelectContainer
          list={getIngredients}
          placeholder={plhldr}
          onChange={this.handleChange} />

    );
  }

}
export default Ingredient;
