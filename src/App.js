import React, { Component } from 'react';
const {
  Header,
  Footer,
  Sider,
  Content
} = Layout;

import SearchFrom from 'SearchForm/SearchForm'

import './App.css';



class App extends Component {

  constructor() {
    super();
    this.state = {


    }

  }

  render() {


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

            <SearchForm />

          </Content>
          <Footer>
            xxx
          </Footer>
        </Layout>

      </div>
    );
  }
}
export default App;
