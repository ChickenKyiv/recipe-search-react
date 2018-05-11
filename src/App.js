import React, { Component } from 'react';
import './App.css';

import ingredients    from './Ingredients';
import allergies      from './allergies';
import specific_diets from './specific_diets';
import cuisines       from './cuisines';
import courses        from './courses';
import holidays       from './holidays';

import { Layout, Form, Menu, Input, Col, Select, InputNumber,
   DatePicker, AutoComplete, Cascader } from 'antd';

const InputGroup = Input.Group;
const Option     = Select.Option;
const FormItem   = Form.Item;
const { Header, Footer, Sider, Content } = Layout;


const children_select_ingredients = [];
for (let i = 0; i < ingredients.length; i++) {
  children_select_ingredients.push(<Option key={ingredients[i].toString()}>{ingredients[i].toString()}</Option>);
}

const children_select_allergies = [];
for (let i = 0; i < allergies.length; i++) {
  children_select_allergies.push(<Option key={allergies[i].toString()}>{allergies[i].toString()}</Option>);
}

const children_select_specific_diets = [];
for (let i = 0; i < specific_diets.length; i++) {
  children_select_specific_diets.push(<Option key={specific_diets[i].toString()}>{specific_diets[i].toString()}</Option>);
}

const children_select_cuisines = [];
for (let i = 0; i < cuisines.length; i++) {
  children_select_cuisines.push(<Option key={cuisines[i].toString()}>{cuisines[i].toString()}</Option>);
}

const children_select_courses = [];
for (let i = 0; i < courses.length; i++) {
  children_select_courses.push(<Option key={courses[i].toString()}>{courses[i].toString()}</Option>);
}

const children_select_holidays = [];
for (let i = 0; i < holidays.length; i++) {
  children_select_holidays.push(<Option key={holidays[i].toString()}>{holidays[i].toString()}</Option>);
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'vertical',
      ingredients_have: [],
      ingredients_dont_have: [],
      allergies: [],
      specific_diets: [],
      cuisines_you_like: [],
      cuisines_you_dont_like: [],
      courses_you_want: [],
      courses_you_dont_want: [],
      holidays_want: [],
      holidays_dont_want: []
    }

  }

  render() {
    const { formLayout } = this.state;

    const formItemLayout = {
      labelCol: { offset: 4 },
      wrapperCol: { span: 12 }
    };

    const buttonItemLayout = {
      wrapperCol: { span: 12, offset: 4 }
    };

    const handleChangeIngredientsHave = (value) => {
      this.setState({ ingredients_have: value })
    };

    const handleChangeIngredientsDontHave = (value) => {
      this.setState({ ingredients_dont_have: value })
    };

    const handleChangeAllergies = (value) => {
      this.setState({ allergies: value })
    };

    const handleChangeSpecific_diets = (value) => {
      this.setState({ specific_diets: value })
    };

    const handleChangeCuisines_you_like = (value) => {
      this.setState({ cuisines_you_like: value })
    };

    const handleChangeCuisines_you_dont_like = (value) => {
      this.setState({ cuisines_you_dont_like: value })
    };

    const handleChangeCourses_you_want = (value) => {
      this.setState({ courses_you_want: value })
    };

    const handleChangeCourses_you_dont_want = (value) => {
      this.setState({ courses_you_dont_want: value })
    };

    const handleChangeholidays_want = (value) => {
      this.setState({ holidays_want: value })
    };

    const handleChangeholidays_dont_want = (value) => {
      this.setState({ holidays_dont_want: value })
    };

    return (
      <div>
        <Layout>
          <Header style={{ width: "100%", height: "120%" }}>  <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Recipe Planner</Menu.Item>
              <Menu.Item key="2">Plan Your Recipes Quickly</Menu.Item>
              <Menu.Item key="3">Welcome</Menu.Item>
            </Menu>

          </Header>

          <Content>

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
              </InputGroup>


              <InputGroup size="large" {...formItemLayout}>
                <Col span={12}>
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Allergies"
                    onChange={handleChangeAllergies}
                  >
                    {children_select_allergies}

                  </Select>
                </Col>
                <Col span={12}>
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Specific Diets"
                    onChange={handleChangeSpecific_diets}
                  >
                    {children_select_specific_diets}

                  </Select>
                </Col>
              </InputGroup>


              <InputGroup size="large" {...formItemLayout}>
                <Col span={12}>
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Cuisines you like"
                    onChange={handleChangeCuisines_you_like}
                  >
                    {children_select_cuisines}

                  </Select>
                </Col>
                <Col span={12}>
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Cuisines you don't like"
                    onChange={handleChangeCuisines_you_dont_like}
                  >
                    {children_select_cuisines}

                  </Select>
                </Col>
              </InputGroup>


              <InputGroup size="large" {...formItemLayout}>
                <Col span={12}>
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Courses You want"
                    onChange={handleChangeCourses_you_want}
                  >
                    {children_select_courses}

                  </Select>
                </Col>
                <Col span={12}>
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Courses You don't want"
                    onChange={handleChangeCourses_you_dont_want}
                  >
                    {children_select_courses}

                  </Select>
                </Col>
              </InputGroup>


              <InputGroup size="large" {...formItemLayout}>
                <Col span={12}>
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Holidays/Specific You want"
                    onChange={handleChangeholidays_want}
                  >
                    {children_select_holidays}

                  </Select>
                </Col>
                <Col span={12}>
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Holidays/Specific You don't want"
                    onChange={handleChangeholidays_dont_want}
                  >
                    {children_select_holidays}

                  </Select>
                </Col>
              </InputGroup>

            </Form>

          </Content>
          <Footer>

          </Footer>
        </Layout>

      </div>
    );
  }
}
export default App;
