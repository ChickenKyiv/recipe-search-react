import React, { Component } from 'react';



//@todo change push to underscore methods
const children_select_cuisines = [];
for (let i = 0; i < cuisines.length; i++) {
  children_select_cuisines.push(<Option key={cuisines[i].toString()}>{cuisines[i].toString()}</Option>);
}

class Cuisine extends Component {
  constructor(props) {
    super(props)

    // @todo change to include, exclude
    this.state = {
      cuisines_you_like: [],
      cuisines_you_dont_like: [],
    }
  }

  render(){

    const handleChangeCuisines_you_like = (value) => {
      this.setState({ cuisines_you_like: value })
    };

    const handleChangeCuisines_you_dont_like = (value) => {
      this.setState({ cuisines_you_dont_like: value })
    };

    return (

    );
  }
}
export default Cuisine;
