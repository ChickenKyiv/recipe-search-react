import React, { Component } from "react";
import { Select, Col } from "antd";

class Cuisine extends Component {
  constructor(props) {
    super(props);

    // @todo change to include, exclude
    this.state = {
      sign: props.sign,
      values: []
    };
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

    const { passedSelected, cuisinesList } = this.props;
    const options = cuisinesList.map(cuisine => {
      if (passedSelected.indexOf(cuisine) === -1) {
        return (
          <Option key={cuisine.id} id={cuisine.id} disabled={false}>
            {cuisine.name}
          </Option>
        );

        // console.log("enable in opp of",this.props.placeholder);
      } else {
        return (
          <Option key={cuisine.id} id={cuisine.id} disabled={true}>
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
