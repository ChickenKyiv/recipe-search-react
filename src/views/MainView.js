import React, { Component, Fragment } from 'react';

import { Card } from 'antd'

import MainMenu   from './components/MainMenu/MainMenu'
import SearchForm from './components/SearchForm/SearchForm'


class SearchView extends Component {
  render(){
    return(
      <MainMenu />

      <div style={{ background: '#ECECEC', padding: '30px' }}>

        <Card bordered={true}>
          <SearchForm />
        </Card>
        
      </div>
    );
  }
}

export default SearchView
