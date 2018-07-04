import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';
import gf from '@groceristar/groceristar-fetch';
// @todo update the paths. put to components arrays
// import courses from '../../../data/courses';


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

  onChange(value) {
    this.setState({ values: value })
    this.props.updateCourses(value)
  }

  createName(className) {
    return ( this.state.sign )
            ? 'allowed'
            : 'excluded'

            + className
            ;
  };

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
    var courses = gf.getCourses();
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

    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          name={this.createName('Course')}
          placeholder={this.props.placeholder}
          onChange={this.onChange.bind(this)}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Course;
