import React, { Component } from 'react';
import './App.css';

import { Layout, Form, Menu, Input, Col, Select, InputNumber,
   DatePicker, AutoComplete, Cascader } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const InputGroup = Input.Group;


const FormItem   = Form.Item;


class App extends Component {

  constructor() {
    super();
    this.state = {
      formLayout: 'vertical'

    }

  }

  render() {
    const { formLayout } = this.state;

    const formItemLayout = {
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

            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                Recipe Planner
              </Menu.Item>
              <Menu.Item key="2">
                Plan Your Recipes Quickly
              </Menu.Item>
              <Menu.Item key="3">
                Welcome
              </Menu.Item>
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





          </Content>
          <Footer>

          </Footer>
        </Layout>

      </div>
    );
  }
}
export default App;
