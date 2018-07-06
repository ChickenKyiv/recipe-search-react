import React, { Component } from "react";
import { Select, Col } from "antd";

class Holiday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sign: props.sign,
      values: []
    };
  }

  onChange = value => {
    this.setState({ values: value });
    this.props.updateHoliday(value);
  };

  createName = className => {
    return this.state.sign ? "allowed" : "excluded" + className;
  };

  render() {
    const Option = Select.Option;

    const { passedSelected, holidayList } = this.props;
    const options = holidayList.map(holiday => {
      if (passedSelected.indexOf(holiday) === -1) {
        return (
          <Option key={holiday.id} id={holiday.id} disabled={false}>
            {holiday.name}
          </Option>
        );

        // console.log("enable in opp of",this.props.placeholder);
      } else {
        return (
          <Option key={holiday.id} id={holiday.id} disabled={true}>
            {holiday.name}
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
          name={this.createName("Holiday")}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Holiday;
