import React from 'react';

const GroupContainer = ({something}) => {
  return (

  );
};

export default GroupContainer;


<InputGroup size="large" {...formItemLayout}>
  <Ingredient updateIng={this.updateHaveIngredients.bind(this)}
    sign={true} passedSelected={this.state.dontHaveIngredients}
    placeholder="Ingredients you have" />
  <Ingredient updateIng={this.updateDontHaveIngredients.bind(this)}
    sign={false} passedSelected={this.state.haveIngredients}
    placeholder="Ingredients you don't have" />
</InputGroup>
