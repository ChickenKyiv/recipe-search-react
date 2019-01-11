import React from 'react';
import {
  Input
} from 'antd';

const InputGroup = Input.Group;

// <InputGroup size="large" {...formItemLayout} {...attributes} />
//
//
// <InputGroup {...formItemLayout} {...attributes} >
//   {children}
// </InputGroup>

const GroupContainer = ({ attributes, children }) => {

  const formItemLayout   = {
    labelCol:   { offset: 4 },
    wrapperCol: { span: 12 }
  };


  // const {
  //   ...attributes
  // } = props


  return (


      <InputGroup size="large">
        {children}
      </InputGroup>

  );
};

export default GroupContainer;

// <InputGroup {...attributes}>
//   {children}
// </InputGroup>
// <InputGroup size="large" {...formItemLayout}>
//   {children}
// </InputGroup>

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
