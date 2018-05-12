import React, { Component } from 'react';
import { Select } from 'antd';

// @todo update the paths. put to components arrays
import cuisines       from '../../../data/cuisines';

const Option     = Select.Option;
//@todo change push to underscore methods
const options = [];
for (let i = 0; i < cuisines.length; i++) {
  options.push(
    <Option key={cuisines[i].toString()}>{cuisines[i].toString()}</Option>
  );
}

class Cuisine extends Component {
  constructor(props) {
    super(props)

    // @todo change to include, exclude
    this.state = {
      cuisines_you_like: [],
      cuisines_you_dont_like: [],
    }
  }

  render(){

    const handleChangeCuisines_you_like = (value) => {
      this.setState({ cuisines_you_like: value })
    };

    const handleChangeCuisines_you_dont_like = (value) => {
      this.setState({ cuisines_you_dont_like: value })
    };

    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Cuisines you like"
          onChange={handleChangeCuisines_you_like}
        >
          {children_select_cuisines}

        </Select>
      </Col>

      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Cuisines you don't like"
          onChange={handleChangeCuisines_you_dont_like}
        >
          {children_select_cuisines}

        </Select>
      </Col>
    );
  }
}
export default Cuisine;
