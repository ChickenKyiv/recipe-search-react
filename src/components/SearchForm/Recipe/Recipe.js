import React, { Component } from 'react'

//@TODO should we use it of not? not sure....

class Recipe extends Component {
  // constructor(props) {
  //   super(props)
  //
  // }


  render(){

    return (
      <Input id="time" onChange={this.updateMaxTime.bind(this)}
        placeholder="Maximum Cooking Time in Minutes" />
  }
}
export default Recipe;
