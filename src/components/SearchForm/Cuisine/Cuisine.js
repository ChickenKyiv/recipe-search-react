import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';
import gf from '@groceristar/groceristar-fetch';
// @todo update the paths. put to components arrays
// import cuisines from '../../../data/cuisines';

class Cuisine extends Component {
  constructor(props) {
    super(props)

    // @todo change to include, exclude
    this.state = {
      sign       : props.sign,
      values     : []
    }
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

    const onChange = (value) => {
      this.setState({ values: value })
      this.props.updateCuisines(value)
    };

    const createName = (className) => {
      return ( this.state.sign )
              ? 'allowed'
              : 'excluded'

              + className
              ;
    };

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
export default Cuisine;
