import React, { Component } from 'react';

import {
  Form
} from 'antd';

import AdvancedSearchForm from './AdvancedForm';

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);



class SearchView extends Component {
  render(){
    return(
      <div>
        <WrappedAdvancedSearchForm />
        <div className="search-result-list">
          Search Result List
        </div>
      </div>
    );
  }
}

export default SearchView
