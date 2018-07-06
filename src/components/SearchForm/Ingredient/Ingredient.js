import React, { Component } from "react";
import { Select, Col } from "antd";

class Ingredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sign: props.sign,
      values: []
    };
  }

  onChange = value => {
    this.setState({ values: value });
    this.props.updateIng(value);
  };

  createName = className => {
    return this.state.sign ? "allowed" : "excluded" + className;
  };

  render() {
    const { passedSelected, ingredientsList } = this.props;

    const Option = Select.Option;

    const options = ingredientsList.map(ingredient => {
      if (passedSelected.indexOf(ingredient) === -1) {
        return (
          <Option key={ingredient.id} id={ingredient.id} disabled={false}>
            {ingredient.name}
          </Option>
        );

        // console.log("enable in opp of",this.props.placeholder);
      } else {
        return (
          <Option key={ingredient.id} id={ingredient.id} disabled={true}>
            {ingredient.name}
          </Option>
        );
        // console.log("disable in opp of",this.props.placeholder);
      }
    });

    return (
      <Col span="12">
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          name={this.createName("Ingredient")}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Ingredient;
