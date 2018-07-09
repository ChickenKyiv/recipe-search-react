import React, { Component } from 'react';
import {
  // Select,
  Col
} from 'antd';
//@TODO move here call from gf
import gf from '@groceristar/groceristar-fetch';
// @TODO add test if list that passed isset or pass instead of it - null or undefined


// getAllergies()
// getCourses()
// getCuisines()
// getIngredientsgetHolidays()
//
// getIngredients()
// getIngredients2()


// import Allergy    from '../Allergy/Allergy'
import SelectContainer from '../SelectContainer/SelectContainer'

class Attribute extends Component {
  constructor(props) {
    super(props);

    // @todo change to include, exclude
    this.state = {
      // sign       : props.sign,
      // values     : []
      selected: []
    }
    this.handleChange = this.handleChange.bind(this);

    // console.log(gf.getAllergies())
  }
  // placeholder( flag ) {
  //   return (flag) ? "Attribute you like"  : "Attribute you don't like"
  // }

  handleChange(items) {
    this.setState({selected: [...items]})
    console.log('-----------');
    console.log(items)
  }


  // @TODO maybe pass this at constructor, so render will looks clearer?
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
      return gf.getCuisines();
    }
    if (this.props.type == 'Holiday') {
      return gf.getHolidays();
    }
  }

  getPlaceholder(type){
    if (this.props.type == 'Allergy') {
      return "Allergies";
    }
    if (this.props.type == 'Diet') {
      return "Specific Diets";
    }
    if (this.props.type == 'Cuisine') {
      return "Specific ";
    }
    if (this.props.type == 'Course') {
      return "Specifi";
    }
    if (this.props.type == 'Holiday') {
      return "Spec";
    }
  }
  // renderComponent

  render(){

    const TYPES = {
      Allergy: 'Allergy',
      Course : 'Course',
      Cuisine: 'Cuisine',
      Diet   : 'Diet',
      Holiday: 'Holiday'
    }

    // const isUnited = (this.props.united);
    // console.log(this.props.type);
    const Component = this.props.type;

    // const C = React.createElement(this.props.type)
    console.log(this.getAttributeData(TYPES))
    // console.log(Component);
    // return (
    //     <C {...this.props}/>
    // );
//
    // const placeholder = () => {
    //   return "Allergies";
    // }
    return (
      <SelectContainer list={this.getAttributeData(TYPES)} placeholder={this.getPlaceholder(TYPES)} />
      // <div></div>
    );
    // return (
    //   <SelectContainer list={gf.getIngredients()} placeholder={placeholder()}>
    //     <Component {...this.props} onChange={this.handleChange} />
    //   </SelectContainer>
    // );

    // return (
    //   <SelectContainer>
    //     <Component {...this.props} onChange={this.handleChange} list={gf.getAllergies()} />
    //   </SelectContainer>
    // );
  }
}
export default Attribute;
