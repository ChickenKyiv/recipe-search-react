// I name this component Item in order to avoid confusion with Antd Select.Option component
import React from 'react';
import { Select } from 'antd';

const Option   = Select.Option;

const Item = (props) => {
  const {
    ...attributes
  } = props;
  console.log({...attributes})
  return (
    <Option {...attributes} />

    // <Option key={name} disabled={flag}>
    //   {name}
    // </Option>
  );
};

export default Item;


// const listItems = numbers.map((number) =>
//   <li key={number.toString()}>
//     {number}
//   </li>
// );
// const List = ({ list }) =>
//   <div>
//     {list.map(item => <div key={item.id}>{item.title}</div>)}
//   </div>
