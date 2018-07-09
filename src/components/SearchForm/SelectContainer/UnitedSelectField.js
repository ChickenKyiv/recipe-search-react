import React, { Component } from 'react';
import { Col } from 'antd';

// import gf from '@groceristar/groceristar-fetch';

import GroupContainer from '../GroupContainer/GroupContainer'



class UnitedSelectField extends Component {

  constructor(props) {
    super(props);

    this.state = {
    //   flag: props.flag,
      selected: []
    }

  }
  handleChange(items) {
    this.setState({selected: [...items]})
    console.log(items)
    console.log('zzzzzzz');
  }

  render(){

    return (
      <GroupContainer onChange={this.handleChange}>
        {this.props.children}
      </GroupContainer>
    );
  }

}
export default UnitedSelectField;
