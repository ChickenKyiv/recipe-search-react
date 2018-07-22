import React, { Component } from 'react';
import {
  Select
} from 'antd';
import shortid from 'shortid';

class SelectContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list       : props.list,
      flag       : props.flag,
      // selected     : [],
      // name       : ( (props.flag) ? 'allowed' : 'excluded' ) + props.placeholder,
      name       : 'the_name',
      placeholder: props.placeholder
    }
    // console.log(props.placeholder)
    this.handleChange  = this.handleChange.bind(this);


  }

  handleChange(items) {
    this.props.onChange(items)
  }




  render() {

      const options = this.state.list;
      // console.log(this.state.list)
      const opts    = options.map((item) => {
        // console.log(item)
        return (
          <Select.Option key={item}>
            {item}
          </Select.Option>
        )
      });

      // console.log(this.props.disabled)

      return (
        <Select mode="multiple"
                style={{ width: '100%' }}
                onChange={this.handleChange}
                placeholder={this.state.placeholder}>
              {opts}
        </Select>
      );

  }



};

export default SelectContainer;



//
// import debounce from 'lodash.debounce';
//
// class Searchbox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.emitChangeDebounced = debounce(this.emitChange, 250);
//   }
//
//   componentWillUnmount() {
//     this.emitChangeDebounced.cancel();
//   }
//
//   render() {
//     return (
//       <input
//         type="text"
//         onChange={this.handleChange}
//         placeholder="Search..."
//         defaultValue={this.props.value}
//       />
//     );
//   }
//
//   handleChange(e) {
//     // React pools events, so we read the value before debounce.
//     // Alternately we could call `event.persist()` and pass the entire event.
//     // For more info see reactjs.org/docs/events.html#event-pooling
//     this.emitChangeDebounced(e.target.value);
//   }
//
//   emitChange(value) {
//     this.props.onChange(value);
//   }
// }
