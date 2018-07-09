import React, { Component } from 'react';
import {
  Select
} from 'antd';
import shortid from 'shortid';

const Option   = Select.Option;

class SelectContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list       : props.list,
      flag       : props.flag,
      selected     : [],
      // name       : ( (props.flag) ? 'allowed' : 'excluded' ) + props.placeholder,
      name       : 'the_name',
      placeholder: props.placeholder
    }
    // console.log(props.placeholder)
    this.handleChange = this.handleChange.bind(this);


  }

  handleChange(items) {

    console.log(items)


    this.setState({ selected: [...items] })
    // console.log(items)
    // console.log(this.state)
    // this.props.onChange(items)
  }

  render(){

      return (
        <Select mode="multiple"
                style={{ width: '100%' }}
                onChange={this.handleChange}
                placeholder={this.state.placeholder}>

                {Object.keys(this.state.list).map(
                  (item, index) =>
                     <Option key={shortid.generate()}>
                       {this.state.list[index]}
                     </Option>
                )}


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
