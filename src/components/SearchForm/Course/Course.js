import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

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

      include: [],
      exclude: [],

    }
  }

  render(){
    //@todo make one method by passing flag variable
    const onChangeInclude = (value) => {
      this.setState({ include: value })
    };

    const onChangeExclude = (value) => {
      this.setState({ exclude: value })
    };

    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Courses You want"
          onChange={onChangeInclude}
        >
          {options}
        </Select>
      </Col>

      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Courses You don't want"
          onChange={onChangeExclude}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Course;
