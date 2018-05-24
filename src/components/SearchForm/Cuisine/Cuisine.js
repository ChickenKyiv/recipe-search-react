import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

// @todo update the paths. put to components arrays
import cuisines from '../../../data/cuisines';

const Option    = Select.Option;
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
