import React, { Component } from 'react';
import {
  // Select,
  Col
} from 'antd';
//@TODO move here call from gf
import gf from '@groceristar/groceristar-fetch';



import Allergy    from '../Allergy/Allergy'
import SelectContainer from '../SelectContainer/SelectContainer'

class Attribute extends Component {
  constructor(props) {
    super(props);

    // @todo change to include, exclude
    this.state = {
      // sign       : props.sign,
      // values     : []
      selected:[]
    }
    this.handleChange = this.handleChange.bind(this);
  }
  // placeholder( flag ) {
  //   return (flag) ? "Attribute you like"  : "Attribute you don't like"
  // }

  handleChange(items) {
    this.setState({selected: [...items]})
    console.log('-----------');
    console.log(items)
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
    console.log(this.props.type);
    const Component = this.props.type;

    // const C = React.createElement(this.props.type)

    // console.log(Component);
    // return (
    //     <C {...this.props}/>
    // );
    return (
      <SelectContainer>
        <Component {...this.props} onChange={this.handleChange} />
      </SelectContainer>
    );
  }
}
export default Attribute;
