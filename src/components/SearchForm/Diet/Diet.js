import React, { Component } from "react";
import { Select } from "antd";
import axios from "axios";
import { DIET_ENDPOINT } from "../../../constants/endpoints";

const Option = Select.Option;

class Diet extends Component {
  constructor(props) {
    super(props);

    // @todo change to include
    this.state = {
      diets: [],
      dietsList: []
    };
  }

  componentDidMount() {
    axios.get(DIET_ENDPOINT).then(response => {
      if (response.status === 200) {
        this.setState({
          dietsList: response.data
        });
      }
    });
  }

  onChange = value => {
    this.setState({ diets: value });
    this.props.updateDiet(value);
  };

  render() {
    const { dietsList } = this.state;

    return (
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Specific Diets"
        onChange={this.onChange}
      >
        {dietsList.map(diet => <Option key={diet.id}>{diet.name}</Option>)}
      </Select>
    );
  }
}
export default Diet;
