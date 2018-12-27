import React, { Component } from 'react';
import {
  // Select,
  Col
} from 'antd';


import {
  getAttribute,
  getPlaceholder,
  // _TYPES
} from "../../../selectors/selector";


// import SelectContainer from '../SelectContainer/SelectContainer'

import {
  GroupedElements,
  SelectContainer
} from '@groceristar/select-component';


//
const _TYPES = {
  Allergy: 'Allergy',
  Course : 'Course',
  Cuisine: 'Cuisine',
  Diet   : 'Diet',
  Holiday: 'Holiday'
}



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







  render(){

    // console.log(this.state.disabled)
 // move to selectors?

    const options = getAttribute(_TYPES);
    const plhdr   = getPlaceholder(_TYPES);

    return (

        <SelectContainer
            list={options}
            placeholder={plhdr}
            onChange={this.handleChange}
            disabled={this.state.disabled}
             />


    );


  }
}
export default Attribute;
