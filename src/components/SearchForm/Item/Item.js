// I name this component Item in order to avoid confusion with Antd Select.Option component
import React from 'react';
import { Select } from 'antd';

const Option   = Select.Option;

const Item = (props) => {
  const {
    name,
    ...attributes
  } = props;
  // console.log({...attributes})
  return (
    <Option {...attributes} />

    // <Option key={name} disabled={flag}>
    //   {name}
    // </Option>
  );
};

export default Item;
