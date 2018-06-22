import React, { Component } from 'react';


class Test extends Component {
  constructor(props) {
    super(props);
      this.state = {
        recipes: []
      }
  }

  updateRecipes(items) {
    this.setState({recipes: items})
  }

  componentWillReceiveProps(newProps) {
    // console.log(JSON.stringify(this.state.recipes), JSON.stringify(newProps.passedRecipes[0]))
    if(newProps.passedRecipes && JSON.stringify(this.state.recipes) !== JSON.stringify(newProps.passedRecipes))
        this.setState({recipes: newProps.passedRecipes})
    
  }

  render(){

    const eachRecipe = this.state.recipes.map((recipe, id) => {
        return (
            <li key={id} >{recipe.recipe.label}</li>
            )
    });

    return (
      <div>
      <ul>
      {eachRecipe}
      </ul>
      </div>
    );
  }
}
export default Test;
