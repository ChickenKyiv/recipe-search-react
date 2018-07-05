import React, { Component } from "react";
import { Select } from "antd";
import axios from "axios";

import { ALLERGY_ENDPOINT } from "../../../constants/endpoints";
const Option = Select.Option;

class Allergy extends Component {
  constructor(props) {
    super(props);

    // @todo change to include
    this.state = {
      allergies: [],
      allergiesList: []
    };
  }

  componentDidMount() {
    axios.get(ALLERGY_ENDPOINT).then(response => {
      if (response.status === 200) {
        this.setState({
          allergiesList: response.data
        });
      }
    });
  }

  onChange = value => {
    this.setState({ allergies: value });
    this.props.updateAllergy(value);
  };

  render() {
    const { allergiesList } = this.state;

    return (
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Allergies"
        onChange={this.onChange}
      >
        {allergiesList.map(allergy => 
          <Option key={allergy.id}>{allergy.name}</Option>
        )}
      </Select>
    );
  }
}
export default Allergy;
