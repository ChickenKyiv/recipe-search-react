import React, { Component } from 'react'
import { Layout } from 'antd'
import MainMenu   from './components/MainMenu/MainMenu'
// import SearchFrom from './components/SearchForm/SearchForm'
import './App.css';

import {
  Form,
  Input,
  Col,
  // Select,
  // InputNumber,
  // AutoComplete,
  Cascader
} from 'antd';

import Allergy    from './components/SearchForm/Allergy/Allergy'
import Course     from './components/SearchForm/Course/Course'
import Cuisine    from './components/SearchForm/Cuisine/Cuisine'
import Diet       from './components/SearchForm/Diet/Diet'
import Holiday    from './components/SearchForm/Holiday/Holiday'
import Ingredient from './components/SearchForm/Ingredient/Ingredient'

const InputGroup = Input.Group;
const FormItem   = Form.Item;


// console.log(SearchFrom)
const {
  Header,
  Footer,
  Sider,
  Content
} = Layout;


class App extends Component {

  constructor() {
    super();
    this.state = {
      formLayout: 'vertical'
    }

  }

  render() {

    const { formLayout }   = this.state;

    const formItemLayout   = {
      labelCol:   { offset: 4 },
      wrapperCol: { span: 12 }
    };

    const buttonItemLayout = {
      wrapperCol: { span: 12, offset: 4 }
    };

    return (
      <div>
        <Layout>
          <Header style={{ width: "100%", height: "120%" }}>
            <div className="logo" />

            <MainMenu />

          </Header>

          <Content>

          {/*<SearchForm />*/}


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

          </Content>
          <Footer>
            footer
          </Footer>
        </Layout>

      </div>
    );
  }
}
export default App;
