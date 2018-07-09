import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';
import gf from '@groceristar/groceristar-fetch';
import Item from '../Item/Item'


class Holiday extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sign       : props.sign,
      values     : []
    }
  }
  // placeholder( flag ) {
  //   return (flag) ? "Holidays/Specific You want" : "Holidays/Specific You don't want";
  // }

  onChange(value) {
    this.setState({ values: value })
    this.props.updateHoliday(value)
  }

  createName(className) {
    return  this.state.sign ? 'allowed': 'excluded'  + className ;
  }

  render(){
    const placeholder = ( flag ) => {
      return (flag) ? "Holidays/Specific You want" : "Holidays/Specific You don't want";
    }

    const Option     = Select.Option;

    //@todo change push to underscore methods
    const options = [];
    var holidays = gf.getHolidays()
    for (let i = 0; i < holidays.length; i++) {
      // options.push(
      //   <Option key={holidays[i].toString()}>{holidays[i].toString()}</Option>
      // );
      var name = holidays[i].toString();
      if(this.props.passedSelected.indexOf(holidays[i]) === -1){
        // options.push(
        //   <Option key={holidays[i].toString()} disabled={false}>{holidays[i].toString()}</Option>
        // );


        options.push(<Item key={name} disabled={false}>{name}</Item>);
      //  console.log("enable in opp of",this.props.placeholder);
      } else {
        // options.push(
        //   <Option key={holidays[i].toString()} disabled={true}>{holidays[i].toString()}</Option>
        // );
        options.push(<Item key={name} disabled={true}>{name}</Item>);
      //  console.log("disable in opp of",this.props.placeholder);
      }
    }

    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          name={this.createName('Holiday')}
          placeholder={placeholder(this.props.sign)}
          onChange={this.onChange.bind(this)}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Holiday;
