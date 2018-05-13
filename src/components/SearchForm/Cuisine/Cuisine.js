import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

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
      include: [],
      exclude: [],
    }
  }

  render(){

    const onChangeInclude = (value) => {
      this.setState({ include: value })
    };

    const onChangeExclude = (value) => {
      this.setState({ exclude: value })
    };

    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Cuisines you like"
          onChange={onChangeInclude}
        >
          {options}
        </Select>
      </Col>

      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Cuisines you don't like"
          onChange={onChangeExclude}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Cuisine;
