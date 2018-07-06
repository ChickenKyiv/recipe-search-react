import React, { Component } from "react";
import { Select } from "antd";
const Option = Select.Option;

class Allergy extends Component {
  constructor(props) {
    super(props);

    // @todo change to include
    this.state = {
      allergies: []
    };
  }

  onChange = value => {
    this.setState({ allergies: value });
    this.props.updateAllergy(value);
  };

  render() {
    const { allergiesList } = this.props;

    return (
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Allergies"
        onChange={this.onChange}
      >
        {allergiesList.map(allergy => (
          <Option key={allergy.id} id={allergy.id}>
            {allergy.name}
          </Option>
        ))}
      </Select>
    );
  }
}
export default Allergy;
