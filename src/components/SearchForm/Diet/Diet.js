import React, { Component } from "react";
import { Select } from "antd";

const Option = Select.Option;

class Diet extends Component {
  constructor(props) {
    super(props);

    // @todo change to include
    this.state = {
      diets: []
    };
  }

  onChange = value => {
    this.setState({ diets: value });
    this.props.updateDiet(value);
  };

  render() {
    const { dietsList } = this.props;

    return (
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Specific Diets"
        onChange={this.onChange}
      >
        {dietsList.map(diet => (
          <Option key={diet.id} id={diet.id}>
            {diet.name}
          </Option>
        ))}
      </Select>
    );
  }
}
export default Diet;
