import React, { Component } from 'react';

//@todo change push to underscore methods
const children_select_courses = [];
for (let i = 0; i < courses.length; i++) {
  children_select_courses.push(<Option key={courses[i].toString()}>{courses[i].toString()}</Option>);
}


class Course extends Component {
  constructor(props) {
    super(props)

    // @todo change to include, exclude
    this.state = {

      courses_you_want: [],
      courses_you_dont_want: [],

    }
  }

  render(){
    //@todo make one method by passing flag variable
    const handleChangeCourses_you_want = (value) => {
      this.setState({ courses_you_want: value })
    };

    const handleChangeCourses_you_dont_want = (value) => {
      this.setState({ courses_you_dont_want: value })
    };

    return (

    );
  }
}
export default Course;
