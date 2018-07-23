import React, { Component } from 'react';
import {
  Form,
  Input,
  Col,
  Button
} from 'antd';

import Attribute  from './Attribute/Attribute'
import Ingredient from './Ingredient/Ingredient'
import axios      from 'axios'
import Test       from './Test/Test'
import qs         from 'qs'

import GroupContainer    from './GroupContainer/GroupContainer';
import UnitedSelectField from './SelectContainer/UnitedSelectField';


const start = 0, count = 5;

class SearchForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      formLayout: 'vertical',
      maxTime: '',

    }
    this.handleSubmit       = this.handleSubmit.bind(this);
    this.handleReset        = this.handleReset.bind(this);

    this.onChangeUnitedField = this.onChangeUnitedField.bind(this);
    // this.handleFieldChange  = this.handleFieldChange.bind(this);
    // this.searchResults = this.searchResults.bind(this);

  }

  handleReset() {
    let n = []
    this.updateHaveIngredients(n)
    this.updateDontHaveIngredients(n)

  }

  handleSubmit(e) {
    e.preventDefault()
  }

  onChangeUnitedField(items, type){
    // console.log(items )
    //    console.log( type)
    // this.setState
  }
  // handleFieldChange(e){
  //   this.setState({ [fieldId]: value });
  // }

  updateMaxTime() {
    var time = window.document.getElementById('time').value
    this.setState({maxTime: time})
  }


// @TODO move to a separated Test components. not like that is placed here
  // searchResults({ isNotEmpty }) {
  //   return (
  //     <div>
  //       { isNotEmpty && <Test passedRecipes={this.state.displayFetchedRecipes} /> }
  //     </div>
  //   )
  // }



  render(){

    const { formLayout }   = this.state.formLayout;

    const results = (this.state.displayFetchedRecipes) ? true : false;

    return (
      <div>
        <Form {...formLayout} onSubmit={this.handleSubmit}>



{/*onChange={this.handleFieldChange} value={this.state[field]} */}


          {/*}
          <GroupContainer >
            <Col span="12">
              <Input placeholder="Recipe Name" />
            </Col>
            <Col span="12">
              <Input id="time"
                onChange={this.updateMaxTime.bind(this)}
                placeholder="Maximum Cooking Time in Minutes" />
            </Col>
          </GroupContainer>





          <GroupContainer>
            <Col><Col span="12">
              <Attribute type="Allergy" onChange={this.onChangeAllergy} />
            </Col></Col>
            <Col><Col span="12">
              <Attribute type="Diet" onChange={this.onChangeDiet} />
            </Col></Col>
          </GroupContainer>
          <br />


          <UnitedSelectField type="Ingredient" onChange={this.onChangeUnitedField} />
          <br />
          */}


          <UnitedSelectField type="Cuisine" onChange={this.onChangeUnitedField} />
          <br />


          <UnitedSelectField type="Course" onChange={this.onChangeUnitedField} />
          <br />


          <UnitedSelectField type="Holiday" onChange={this.onChangeUnitedField} />
          <br />

          <Button type="primary" htmlType="submit" icon="search">
            Search Recipes
          </Button>
        </Form>

        {/*searchResults*/}

      </div>
    );
  }
}
export default SearchForm;
