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

    // @todo change to include, exclude
    this.state = {
      include: [],
      exclude: [],
    }
  }

  render(){
    const onChangeInclude = (value) => {
      this.setState({ include: value })
    };

    const onChangeExclude = (value) => {
      this.setState({ exclude: value })
    };

    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Ingredients you have"
          onChange={onChangeInclude}
        >
          {options}
        </Select>
      </Col>
      {/*}
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Ingredients you don't have"
          onChange={onChangeExclude}
        >
          {options}
        </Select>
      </Col>*/}
    );
  }

}
export default Ingredient;
