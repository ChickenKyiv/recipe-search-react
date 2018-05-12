import React, { Component } from 'react';
import { Select, Col } from 'antd';

// @todo update the paths. put to components arrays
import holidays       from '../../../data/holidays';

const Option     = Select.Option;

//@todo change push to underscore methods
const options = [];
for (let i = 0; i < holidays.length; i++) {
  options.push(
    <Option key={holidays[i].toString()}>{holidays[i].toString()}</Option>
  );
}

class Holiday extends Component {
  constructor(props) {
    super(props)

    // @todo change to include, exclude
    this.state = {
      include: [],
      exclude: []
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
          placeholder="Holidays/Specific You want"
          onChange={onChangeInclude}
        >
          {options}
        </Select>
      </Col>

      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Holidays/Specific You don't want"
          onChange={onChangeExclude}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Holiday;
