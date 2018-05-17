import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

// @todo update the paths. put to components arrays
import courses from '../../../data/courses';

const Option   = Select.Option;
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

      // sign is a boolean variable that helps to understand if we're
      // including ids from this field or excluding them
      sign       : props.sign,
      placeholder: props.placeholder,
      values     : []

    }
  }

  render(){
    //@todo make one method by passing flag variable
    // const onChangeInclude = (value) => {
    //   this.setState({ include: value })
    // };
    //
    // const onChangeExclude = (value) => {
    //   this.setState({ exclude: value })
    // };

    const onChange = (value) => {
      this.setState({ values: value })
    };

    const getPlaceholder = () => {
      return this.state.placeholder;
    };
    const createName = (className) => {
      return ( this.state.sign )
              ? 'allowed'
              : 'excluded'

              + className
              ;
    };


    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          name={createName('Course')}
          placeholder={getPlaceholder}
          onChange={onChange}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Course;
