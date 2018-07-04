import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';
import gf from '@groceristar/groceristar-fetch';


class Attribute extends Component {
  constructor(props) {
    super(props)

    // @todo change to include, exclude
    this.state = {
      sign       : props.sign,
      values     : []
    }
    this.createName = this.createName.bind.this;
    this.onChange = this.onChange.bind(this);

  }

    onChange(value) {
      this.setState({ values: value })
      this.props.updateCuisines(value)
    }

    createName(className) {
      return ( this.state.sign )
              ? 'allowed'
              : 'excluded'

              + className
              ;
    }

  placeholder( flag ) {
    return (flag) ? "Attribute you like"  : "Attribute you don't like"
  }

  render(){

    // const onChangeInclude = (value) => {
    //   this.setState({ include: value })
    // };
    //
    // const onChangeExclude = (value) => {
    //   this.setState({ exclude: value })
    // };

    const Option    = Select.Option;
//@todo change push to underscore methods
    const options = [];
    var cuisines = gf.getCuisines()
    for (let i = 0; i < cuisines.length; i++) {
      // options.push(
      //   <Option key={cuisines[i].toString()}>{cuisines[i].toString()}</Option>
      // );
      // const listItems = numbers.map((number) =>
      //   <li key={number.toString()}>
      //     {number}
      //   </li>
      // );

      if(this.props.passedSelected.indexOf(cuisines[i]) === -1){
        options.push(
          <Option key={cuisines[i].toString()} disabled={false}>{cuisines[i].toString()}</Option>
        );
        // console.log("enable in opp of",this.props.placeholder);
      } else {
        options.push(
          <Option key={cuisines[i].toString()} disabled={true}>{cuisines[i].toString()}</Option>
        );
        // console.log("disable in opp of",this.props.placeholder);
      }

    }

    return (
      <Col span={12}>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          name={createName('Cuisine')}
          placeholder={this.props.placeholder}
          onChange={onChange}
        >
          {options}
        </Select>
      </Col>
    );
  }
}
export default Attribute;
