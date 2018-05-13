import React, { Component } from 'react';
import {
  Layout,
  Form,
  Menu,
  Input,
  Col,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader
} from 'antd';

import Allergy    from '..Allergy/Allergy'
import Course     from '..Course/Course'
import Cuisine    from '..Cuisine/AlCuisinelergy'
import Diet       from '..Diet/Diet'
import Holiday    from '..Holiday/Holiday'
import Ingredient from '..Ingredient/Ingredient'

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
          <Ingredient />
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
          <Cuisine />
        </InputGroup>

        <InputGroup size="large" {...formItemLayout}>
          <Course />
        </InputGroup>

        <InputGroup size="large" {...formItemLayout}>
          <Holiday />
        </InputGroup>
      </Form>

    );
  }
}
export default SearchForm;
