import React, { Component } from 'react'
import { Card } from 'antd'

import MainMenu   from './components/MainMenu/MainMenu'
import SearchForm from './components/SearchForm/SearchForm'

import './App.css';



class App extends Component {

  render() {

    return (
      <div>
        <MainMenu />

        <div style={{ background: '#ECECEC', padding: '30px' }}>
	        <Card bordered={true}>
	        	<SearchForm />
	        </Card>
        </div>

      </div>
    );
  }
}
export default App;
