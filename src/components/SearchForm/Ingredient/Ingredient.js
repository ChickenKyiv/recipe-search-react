import React, { Component } from 'react';

//@todo change push to underscore methods
const children_select_ingredients = [];
for (let i = 0; i < ingredients.length; i++) {
  children_select_ingredients.push(
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

    );
  }

}
export default Ingredient;
