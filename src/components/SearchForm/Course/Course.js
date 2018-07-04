import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';
import gf from '@groceristar/groceristar-fetch';

import classNames from 'classnames';


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
  // placeholder( flag ) {
  //   return (flag) ? "Courses You want" : "Courses You don't want";
  // }

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
    const placeholder = ( flag ) => {
      return (flag) ? "Courses You want" : "Courses You don't want";
    }
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

    //---Both options looks stupid /
    let name = classNames('', {
      'allowedCourse' : this.state.sign,
      'excludedCourse': !this.state.sign,
    })


    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          name={this.createName('Course')}
          placeholder={placeholder(this.props.sign)}
          onChange={this.onChange.bind(this)}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Course;
