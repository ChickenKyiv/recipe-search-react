import React      from 'react';
// import classNames from 'classnames';
import {
  Select
  // Col
} from 'antd';

const Option   = Select.Option;

const SelectContainer = (props) => {

  const {
    ...list
  } = props;



  // next version
  // .map(item => <Item key={item.id}>{item.name}</Item>));
  return (

    <Select mode="multiple"
            style={{ width: '100%' }}
            onChange={this._change}>
       {Object.keys(list).map((item, index) => <Option key={index} value={item}>{item}</Option>)}

    </Select>

  );
};

export default SelectContainer;
