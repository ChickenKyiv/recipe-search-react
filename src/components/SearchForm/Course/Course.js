import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

// @todo update the paths. put to components arrays
import courses from '../../../data/courses';


class Course extends Component {
  constructor(props) {
    super(props)

    // @todo change to include, exclude
    this.state = {

      // sign is a boolean variable that helps to understand if we're
      // including ids from this field or excluding them
      sign       : props.sign,
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
  const Option   = Select.Option;
  //@todo change push to underscore methods
  const options = [];
  for (let i = 0; i < courses.length; i++) {
    // options.push(
    //   <Option key={courses[i].toString()}>{courses[i].toString()}</Option>
    // );
          if(this.props.passedSelected.indexOf(courses[i]) === -1){
          options.push(
            <Option key={courses[i].toString()} disabled={false}>{courses[i].toString()}</Option>
          );
          // console.log("enable in opp of",this.props.placeholder);
        }
        else{
          options.push(
            <Option key={courses[i].toString()} disabled={true}>{courses[i].toString()}</Option>
          );
          // console.log("disable in opp of",this.props.placeholder);
        }

  }

    const onChange = (value) => {
      this.setState({ values: value })
      this.props.updateCourses(value)
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
          placeholder={this.props.placeholder}
          onChange={onChange}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Course;
