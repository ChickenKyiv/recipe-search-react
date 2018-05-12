import React, { Component } from 'react';
import { Select } from 'antd';

// @todo update the paths. put to components arrays
import courses        from '../../../data/courses';

const Option     = Select.Option;
//@todo change push to underscore methods
const options = [];
for (let i = 0; i < courses.length; i++) {
  options.push(
    <Option key={courses[i].toString()}>{courses[i].toString()}</Option>
  );
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
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Courses You want"
          onChange={handleChangeCourses_you_want}
        >
          {children_select_courses}

        </Select>
      </Col>

      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Courses You don't want"
          onChange={handleChangeCourses_you_dont_want}
        >
          {children_select_courses}

        </Select>
      </Col>
    );
  }
}
export default Course;
