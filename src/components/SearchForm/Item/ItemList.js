import React      from 'react';
import classNames from 'classnames';

import Item       from './Item';

const ItemList = (props) => {

  const {
    list
  } = props
  //
  // for (let i = 0; i < ingredients.length; i++) {
  //    options.push(<Item key={i}>{i}</Item>)
  // }

  const items = (list.map(item, index => <Item key={index}>{item.name}</Item>));
  return (

        {items}

  );
};

export default ItemList;

// return (
//   {list.map(item => {
//       <Item key={name}>
//         {name}
//       </Item>
//     }
//     )
//   }
// );
// const listItems = numbers.map((number) =>
//   <li key={number.toString()}>
//     {number}
//   </li>
// );
// const List = ({ list }) =>
//   <div>
//     {list.map(item => <div key={item.id}>{item.title}</div>)}
//   </div>
