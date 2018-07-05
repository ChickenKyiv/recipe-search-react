import React, { Component } from "react";
import { Select, Col } from "antd";

import axios from "axios";
import { CUISINES_ENDPOINT } from "../../../constants/endpoints";

class Cuisine extends Component {
  constructor(props) {
    super(props);

    // @todo change to include, exclude
    this.state = {
      sign: props.sign,
      values: [],
      cuisinesList: []
    };
  }

  componentDidMount() {
    axios.get(CUISINES_ENDPOINT).then(response => {
      if (response.status === 200) {
        this.setState({
          cuisinesList: response.data
        });
      }
    });
  }

  onChange = value => {
    this.setState({ values: value });
    this.props.updateCuisines(value);
  };

  createName = className => {
    return this.state.sign ? "allowed" : "excluded" + className;
  };

  render() {
    // const onChangeInclude = (value) => {
    //   this.setState({ include: value })
    // };
    //
    // const onChangeExclude = (value) => {
    //   this.setState({ exclude: value })
    // };
    const Option = Select.Option;

    const { cuisinesList } = this.state;
    const { passedSelected } = this.props;
    const options = cuisinesList.map(cuisine => {
      if (passedSelected.indexOf(cuisine) === -1) {
        return (
          <Option key={cuisine.id} disabled={false}>
            {cuisine.name}
          </Option>
        );

        // console.log("enable in opp of",this.props.placeholder);
      } else {
        return (
          <Option key={cuisine.id} disabled={true}>
            {cuisine.name}
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
          name={this.createName("Cuisine")}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Cuisine;
