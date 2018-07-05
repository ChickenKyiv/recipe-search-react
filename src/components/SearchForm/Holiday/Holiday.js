import React, { Component } from "react";
import { Select, Col } from "antd";
import axios from "axios";
import { HOLIDAY_ENDPOINT } from "../../../constants/endpoints";

class Holiday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sign: props.sign,
      values: [],
      holidayList: [],
    
    };
  }

  componentDidMount() {
    axios.get(HOLIDAY_ENDPOINT).then(response => {
      if (response.status === 200) {
        this.setState({
          holidayList: response.data
        });
      }
    });
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

    const { holidayList } = this.state;
    const { passedSelected } = this.props;
    const options = holidayList.map(holiday => {
      if (passedSelected.indexOf(holiday) === -1) {
        return (
          <Option key={holiday.id} disabled={false}>
            {holiday.name}
          </Option>
        );

        // console.log("enable in opp of",this.props.placeholder);
      } else {
        return (
          <Option key={holiday.id} disabled={true}>
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
