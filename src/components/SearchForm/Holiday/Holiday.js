import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';
import gf from '@groceristar/groceristar-fetch';


class Holiday extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sign       : props.sign,
      values     : []
    }
  }
  placeholder( flag ) {
    return (flag) ? "Holidays/Specific You want" : "Holidays/Specific You don't want";
  }

  render(){
    const Option     = Select.Option;

    //@todo change push to underscore methods
    const options = [];
    var holidays = gf.getHolidays()
    for (let i = 0; i < holidays.length; i++) {
      // options.push(
      //   <Option key={holidays[i].toString()}>{holidays[i].toString()}</Option>
      // );
      if(this.props.passedSelected.indexOf(holidays[i]) === -1){
        options.push(
          <Option key={holidays[i].toString()} disabled={false}>{holidays[i].toString()}</Option>
        );
      //  console.log("enable in opp of",this.props.placeholder);
      } else {
        options.push(
          <Option key={holidays[i].toString()} disabled={true}>{holidays[i].toString()}</Option>
        );
      //  console.log("disable in opp of",this.props.placeholder);
      }
    }

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
