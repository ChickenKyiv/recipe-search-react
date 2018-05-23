import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

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
  
    this.state = {
      sign       : props.sign,
      values     : []
    }
  }

  render(){

      const onChange = (value) => {
        this.setState({ values: value })
        this.props.updateHoliday(value)
      };

      const createName = (className) => {
        return  this.state.sign ? 'allowed': 'excluded'  + className ;
      };

    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          name={createName('Holiday')}
          placeholder={this.props.placeholder}
          onChange={onChange}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Holiday;
