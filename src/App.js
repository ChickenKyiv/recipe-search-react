import React, { Component } from 'react'
import MainMenu   from './components/MainMenu/MainMenu'
import SearchForm from './components/SearchForm/SearchForm'
import './App.css';

class App extends Component {

  render() {

    return (
      <div>
        <MainMenu />
        <SearchForm />
      </div>
    );
  }
}
export default App;
