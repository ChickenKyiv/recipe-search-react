import React, { Component } from 'react';
import { Select } from 'antd';

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
      ingredients_have: [],
      ingredients_dont_have: [],
    }
  }

  render(){
    const handleChangeIngredientsHave = (value) => {
      this.setState({ ingredients_have: value })
    };

    const handleChangeIngredientsDontHave = (value) => {
      this.setState({ ingredients_dont_have: value })
    };

    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Ingredients you have"
          onChange={handleChangeIngredientsHave}
        >
          {children_select_ingredients}

        </Select>
      </Col>

      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Ingredients you don't have"
          onChange={handleChangeIngredientsDontHave}
        >
          {children_select_ingredients}

        </Select>
      </Col>
    );
  }

}
export default Ingredient;
