import React, { Component } from 'react';


//@todo change push to underscore methods
const children_select_specific_diets = [];
for (let i = 0; i < specific_diets.length; i++) {
  children_select_specific_diets.push(
    <Option key={specific_diets[i].toString()}>{specific_diets[i].toString()}</Option>
  );
}

class Diet extends Component {
  constructor(props) {
    super(props)
    
    // @todo change to include
    this.state = {
      specific_diets: [],
    }
  }

  render(){

    const handleChangeSpecific_diets = (value) => {
      this.setState({ specific_diets: value })
    };

    return (

    );
  }
}
export default Diet;
