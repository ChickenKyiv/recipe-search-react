import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

// @todo update the paths. put to components arrays
import ingredients from '../../../data/ingredients';

const Option     = Select.Option;

//@todo change push to underscore methods
const options = [];
for (let i = 0; i < ingredients.length; i++) {
  options.push(
    <Option key={ingredients[i].toString()}>{ingredients[i].toString()}</Option>
  );
}



class Ingredient extends Component {

  constructor(props) {
    super(props)

    
    this.state = {
      sign       : props.sign,
      placeholder: props.placeholder,
      values     : []

    }
  }

  render(){
    const onChange = (value) => {
      this.setState({ values: value })
    };
    const getPlaceholder = () => {
      return this.state.placeholder;
    };
    const createName = (className) => {
      return ( this.state.sign )
              ? 'allowed'
              : 'excluded'

              + className
              ;
    };



    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          name={createName('Ingredient')}
          placeholder={getPlaceholder}
          onChange={onChange}
        >
          {options}
        </Select>
      </Col>
    );
  }

}
export default Ingredient;
