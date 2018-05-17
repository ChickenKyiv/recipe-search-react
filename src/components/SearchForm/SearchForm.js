import React, { Component } from 'react';
import {
  Form,
  Input,
  Col,
  Select,
  InputNumber,
  AutoComplete,
  Cascader
} from 'antd';

import Allergy    from './Allergy/Allergy'
import Course     from './Course/Course'
import Cuisine    from './Cuisine/Cuisine'
import Diet       from './Diet/Diet'
import Holiday    from './Holiday/Holiday'
import Ingredient from './Ingredient/Ingredient'

const InputGroup = Input.Group;
const FormItem   = Form.Item;

class SearchForm extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      formLayout: 'vertical'
    }
  }

  render(){

    const { formLayout }   = this.state;

    const formItemLayout   = {
      labelCol:   { offset: 4 },
      wrapperCol: { span: 12 }
    };

    const buttonItemLayout = {
      wrapperCol: { span: 12, offset: 4 }
    };

    return (

      <Form {...formLayout}>

        <InputGroup size="large" {...formItemLayout}>
          <Col span={12}>
            <Input placeholder="Recipe Name" />
          </Col>
          <Col span={12}>
            <Input placeholder="Maximum Cooking Time in Minutes" />
          </Col>
        </InputGroup>

        <InputGroup size="large" {...formItemLayout}>
          <Ingredient sign="1" placeholder="Ingredients you have" />
          <Ingredient sign="0" placeholder="Ingredients you don't have" />

        </InputGroup>

        <InputGroup size="large" {...formItemLayout}>
          <Col span={12}>
            <Allergy />

          </Col>
          <Col span={12}>
            <Diet />

          </Col>
        </InputGroup>

        <InputGroup size="large" {...formItemLayout}>
          <Cuisine sign="1" placeholder="Cuisines you like" />
          <Cuisine sign="0" placeholder="Cuisines you don't like" />
        </InputGroup>

        <InputGroup size="large" {...formItemLayout}>
          <Course sign="1" placeholder="Courses You want" />
          <Course sign="0" placeholder="Courses You don't want" />
        </InputGroup>

        <InputGroup size="large" {...formItemLayout}>
          <Holiday sign="1" placeholder="Holidays/Specific You want" />
          <Holiday sign="0" placeholder="Holidays/Specific You don't want" />
        </InputGroup>

      </Form>

    );
  }
}
export default SearchForm;
