import React, { Component } from 'react';
import { Col } from 'antd';

import gf from '@groceristar/groceristar-fetch';
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

    return (

        <SelectContainer
          list={gf.getIngredients()}
          placeholder={placeholder()}
          onChange={this.handleChange} />

    );
  }

}
export default Ingredient;
