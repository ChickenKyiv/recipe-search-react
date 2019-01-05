import React, { Component } from 'react';

import AdvancedSearchForm from './AdvancedForm';

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);



class SearchForm extends Component {
  render(){
    return(
      <div>
        <WrappedAdvancedSearchForm />
        <div className="search-result-list">Search Result List</div>
      </div>
    );
  }
}
