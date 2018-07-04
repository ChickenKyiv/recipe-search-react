import React from 'react';

const GroupContainer = (props) => {
  this.state = {
    formLayout: 'vertical',
  }
  const { formLayout }   = this.state.formLayout;

  const formItemLayout   = {
    labelCol:   { offset: 4 },
    wrapperCol: { span: 12 }
  };
  return (

    <InputGroup size="large" {...formItemLayout}>
      {children}
    </InputGroup>
  );
};

export default GroupContainer;

//
// <InputGroup size="large" {...formItemLayout}>
//   {children}
//   <Ingredient updateIng={this.updateHaveIngredients.bind(this)}
//     sign={true} passedSelected={this.state.dontHaveIngredients}
//     placeholder="Ingredients you have" />
//   <Ingredient updateIng={this.updateDontHaveIngredients.bind(this)}
//     sign={false} passedSelected={this.state.haveIngredients}
//     placeholder="Ingredients you don't have" />
// </InputGroup>
