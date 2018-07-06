import React, { Component } from "react";
import { Select, Col } from "antd";

class Course extends Component {
  constructor(props) {
    super(props);

    // @todo change to include, exclude
    this.state = {
      // sign is a boolean variable that helps to understand if we're
      // including ids from this field or excluding them
      sign: props.sign,
      values: []
    };
  }

  onChange = value => {
    this.setState({ values: value });
    this.props.updateCourses(value);
  };

  createName = className => {
    return this.state.sign ? "allowed" : "excluded" + className;
  };

  render() {
    //@todo make one method by passing flag variable
    // const onChangeInclude = (value) => {
    //   this.setState({ include: value })
    // };
    //
    // const onChangeExclude = (value) => {
    //   this.setState({ exclude: value })
    // };
    const Option = Select.Option;
    const { passedSelected, coursesList } = this.props;
    const options = coursesList.map(course => {
      if (passedSelected.indexOf(course) === -1) {
        return (
          <Option key={course.id} id={course.id} disabled={false}>
            {course.name}
          </Option>
        );

        // console.log("enable in opp of",this.props.placeholder);
      } else {
        return (
          <Option key={course.id} id={course.id} disabled={true}>
            {course.name}
          </Option>
        );
        // console.log("disable in opp of",this.props.placeholder);
      }
    });

    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          name={this.createName("Course")}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Course;
