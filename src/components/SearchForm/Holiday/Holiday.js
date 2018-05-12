import React, { Component } from 'react';

//@todo change push to underscore methods
const children_select_holidays = [];
for (let i = 0; i < holidays.length; i++) {
  children_select_holidays.push(<Option key={holidays[i].toString()}>{holidays[i].toString()}</Option>);
}

class Holiday extends Component {
  constructor(props) {
    super(props)

    // @todo change to include, exclude
    this.state = {
      holidays_want: [],
      holidays_dont_want: []
    }
  }

  render(){

      const handleChangeholidays_want = (value) => {
        this.setState({ holidays_want: value })
      };

      const handleChangeholidays_dont_want = (value) => {
        this.setState({ holidays_dont_want: value })
      };

    return (

    );
  }
}
export default Holiday;
