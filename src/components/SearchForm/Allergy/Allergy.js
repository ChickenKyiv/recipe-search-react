import React, { Component } from 'react';

import allergies  from '../../../data/allergies';

//@todo change push to underscore methods
const children_select_allergies = [];
for (let i = 0; i < allergies.length; i++) {
  children_select_allergies.push(
    <Option key={allergies[i].toString()}>{allergies[i].toString()}</Option>
  );
}

class Allergy extends Component {
  constructor(props) {
    super(props)

    // @todo change to include
    this.state = {
      allergies: []
    }
  }



  render(){

    const handleChangeAllergies = (value) => {
      this.setState({ allergies: value })
    };

    return (

    );
  }
}
export default Allergy;
