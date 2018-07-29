import React, { Component } from 'react';
import {
  // Select,
  Col
} from 'antd';
//@TODO move here call from gf
import gf from '@groceristar/groceristar-fetch';
// @TODO add test if list that passed isset or pass instead of it - null or undefined



import SelectContainer from '../SelectContainer/SelectContainer'

class Attribute extends Component {
  constructor(props) {
    super(props);

    // @todo change to include, exclude
    this.state = {
      sign       : props.sign,
      selected: [],
      disabled: props.disab
    }
    this.handleChange = this.handleChange.bind(this);

     // console.log(gf.getCuisines())
     console.log(gf.getDiets())
     console.log(gf.getCourses())
     console.log(gf.getHolidays())
    // console.log(gf);
  }

  handleChange(items) {

    console.log(items);

    this.setState({ selected: [items] })
    // console.log('-----------');
    // console.log(items);
    // console.log(this.state)

    // if( this.props.sign )





//-----------
    // when sign is underfined - then our field is single, and don't have an evil twin
    // if ( this.state.sign !== undefined ){
    // //   // console.log(this.state.sign)
    // //@TODO i don't like how it looks
    //   this.props.onChange(items, this.state.sign, this.props.type);
    // }
//-----------

    //
  }


  // @TODO maybe pass this at constructor, so render will looks clearer?
//@TODO move label to a separated place
  getAttributeData(type){
    // this.props.type
    if (this.props.type == 'Allergy') {
      return gf.getAllergies();
    }
    if (this.props.type == 'Diet') {
      return gf.getDiets();
    }
    if (this.props.type == 'Cuisine') {
      return gf.getCuisines();
    }
    if (this.props.type == 'Course') {
      return gf.getCourses();
    }
    if (this.props.type == 'Holiday') {
      return gf.getHolidays();
    }
  }
  
//@TODO move label to a separated place
  getPlaceholder(type){
    if (this.props.type == 'Allergy') {
      return "Allergies";
    }
    if (this.props.type == 'Diet') {
      return "Specify Diets";
    }
    if (this.props.type == 'Cuisine') {
      return "Specify Cuisine";
    }
    if (this.props.type == 'Course') {
      return "Specify Course";
    }
    if (this.props.type == 'Holiday') {
      return "Specify Holiday";
    }
  }
  // renderComponent

  render(){
    // console.log('DDDDDDDDDDDDDDDDD');
    // console.log(this.state.disabled)

    const TYPES = {
      Allergy: 'Allergy',
      Course : 'Course',
      Cuisine: 'Cuisine',
      Diet   : 'Diet',
      Holiday: 'Holiday'
    }

    return (

        <SelectContainer
            list={this.getAttributeData(TYPES)}
            placeholder={this.getPlaceholder(TYPES)}
            onChange={this.handleChange}
            disabled={this.state.disabled}
             />


    );


  }
}
export default Attribute;
