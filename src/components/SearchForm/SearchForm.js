import React, { Component } from 'react';

import {
  Form,
  Input,
  Col,
  Button
} from 'antd';





// @TODO we have an issue with GroupedElements, because we're passing same array twice
import { GroupedElements } from '@groceristar/select-component';


import {
  getFormattedAttributes,
  getPlaceholder,
  _TYPES,
  getFormattedIngredients,
  toOpt,
  toOptAntD
} from "../../selectors/selector"



import Attribute  from './Attribute/Attribute'
import Ingredient from './Ingredient/Ingredient'

import axios      from 'axios'
import Test       from './Test/Test'
import qs         from 'qs'





import GroupContainer    from './GroupContainer/GroupContainer';





import UnitedSelectField from './SelectContainer/UnitedSelectField';





const start = 0, count = 5;


//
// const ings = toOptAntD( getFormattedIngredients() )
// const holidays = toOptAntD( getFormattedAttributes('holidays') )
//
// console.log(ings)
// console.log(holidays);



class SearchForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      formLayout: 'vertical',
      maxTime: '',

    }

    this.handleSubmit        = this.handleSubmit.bind(this);
    this.handleReset         = this.handleReset.bind(this);

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

    // console.log(getAttribute('holidays'))


    const ingredientsData  = toOptAntD( getFormattedIngredients() );
    const ingredientsData2 = toOptAntD( getFormattedIngredients() );

    console.log(ingredientsData);
    console.log(ingredientsData2);


    const diets1   = toOptAntD( getFormattedAttributes('diets') );
    const diets2  = toOptAntD( getFormattedAttributes('diets') );

    //
    // const cuisine1   = toOptAntD( getFormattedAttributes('cuisine') );
    // const cuisine2   = toOptAntD( getFormattedAttributes('cuisine') );
    //
    // const course1   = toOptAntD( getFormattedAttributes('course') );
    // const course2   = toOptAntD( getFormattedAttributes('course') );
    //
    // const allergy1   = toOptAntD( getFormattedAttributes('allergy') );
    // const allergy2   = toOptAntD( getFormattedAttributes('allergy') );


    const holidays1    = toOptAntD( getFormattedAttributes('holidays') );
    const holidays2   = toOptAntD( getFormattedAttributes('holidays') );



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



          <br />
          */}







          <GroupContainer>
            {/*ingredients*/}
            <GroupedElements
              type={false}
              options1={ingredientsData}
              options2={ingredientsData2} />

          </GroupContainer>

          {/*holidays*/}
          <GroupedElements
            type={false}
            options1={holidays1}
            options2={holidays2} />

            {/* @TODO maybe we don't need to have 2 fields for diets */}
          {/*diets*/}
          <GroupedElements
            type={false}
            options1={diets1}
            options2={diets2} />







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
