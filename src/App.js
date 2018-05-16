import React, { Component } from 'react'
import { Layout } from 'antd'
import SearchFrom from '/components/SearchForm/SearchForm'
import Menu       from '/components/Menu/Menu'
import './App.css';

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

    }

  }

  render() {


    return (
      <div>
        <Layout>
          <Header style={{ width: "100%", height: "120%" }}>
            <div className="logo" />

            <Menu />

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
