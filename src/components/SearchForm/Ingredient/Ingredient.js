import React, { Component } from 'react';
import {
  Select,
  Col
} from 'antd';

import gf from '@groceristar/groceristar-fetch';
import Item from '../Item/Item'
// import ItemList from '../Item/ItemList'
import SelectContainer from '../Item/SelectContainer'


class Ingredient extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sign       : props.sign,
      values     : []
    }

    this._change = this._change.bind(this);


  }

  _change(items) {
    this.setState({values: [...items]})
    console.log(items)
  }

  render(){




    //@todo change push to underscore methods
    const options = [];
    var list = gf.getIngredients()
    // console.log(ingredients)

    // for (let i = 0; i < ingredients.length; i++) {
    //    options.push(<Item key={i}>{i}</Item>)
    // }

    // const Listeee () => {
    //
    // }

    return (
      <Col span="12">
        <SelectContainer {...list} />

      </Col>
    );
  }

}
export default Ingredient;
