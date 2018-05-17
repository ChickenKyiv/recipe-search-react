import React, { Component } from 'react'
import { Menu }             from 'antd'


class MainMenu extends Component {
  // constructor(props) {
  //   super(props)
  //
  // }


  render(){

    return (
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
    );
  }
}
export default MainMenu;
