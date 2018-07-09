import React, { Component } from 'react';
import {
  Form,
  Input,
  Col,
  Button
} from 'antd';
// import Allergy    from './Allergy/Allergy'
// import Course     from './Course/Course'
// import Cuisine    from './Cuisine/Cuisine'
// import Diet       from './Diet/Diet'
// import Holiday    from './Holiday/Holiday'
import Attribute  from './Attribute/Attribute'
import Ingredient from './Ingredient/Ingredient'
import axios      from 'axios'
import Test       from './Test/Test'
import qs         from 'qs'

import GroupContainer    from './GroupContainer/GroupContainer';
import UnitedSelectField from './SelectContainer/UnitedSelectField';

// const InputGroup = Input.Group;
const start = 0, count = 5;

class SearchForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      formLayout: 'vertical',
      maxTime: '',
      allowedIngredients: [],
      excludedIngredients: [],
      // allergies: [],
      // specificDiets: [],
      // allowedCuisines: [],
      // excludedCuisines: [],
      // allowedCourses: [],
      // excludedCourses: [],
      // allowedHolidays: [],
      // excludedHolidays: [],
      // displayFetchedRecipes: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset  = this.handleReset.bind(this);
    // this.searchResults = this.searchResults.bind(this);
  }

  handleReset() {
    let n = []
    this.updateHaveIngredients(n)
    this.updateDontHaveIngredients(n)
    // this.updateAllergies(n)
    // this.updateSpecificDiets(n)
    // this.updateLikeCuisines(n)
    // this.updateDontLikeCuisines(n)
    // this.updateWantCourses(n)
    // this.updateDontWantCourses(n)
    // this.updateWantOnHolidays(n)
    // this.updateDontWantOnHolidays(n)
  }

  handleSubmit(e) {
    if( this.state.haveIngredients.length > 0 ){
      axios.get(process.env.REACT_APP_API_URL, {
        headers: {"Access-Control-Allow-Origin": "*"},
        params: {
          q: this.state.haveIngredients,
          app_id: process.env.REACT_APP_API_ID, //remove if not required
          app_key: process.env.REACT_APP_API_KEY, //remove if not required
          from: start,    //index starting point
          to: start+count,//index end point
          diet: this.state.specificDiets,
          health: this.state.allergies,
          excluded: this.state.dontHaveIngredients
        },
        paramsSerializer: function(params) {//to pass arrays
          return qs.stringify(params, {arrayFormat: 'repeat'})
        },
      }).then(response => {
        console.log(response.data.hits)
        this.setState({displayFetchedRecipes: response.data.hits})
      })
      .catch(error => console.log(error))
    }
    else {
      alert("Please select atleast one Ingredient")
    }
     // this.handleReset() //does not work
    e.preventDefault()
        // update as per fieldname in database
    //   time: this.state.maxTime,
    //   includeIngredients: this.state.haveIngredients,
    //   excludeIngredients: this.state.dontHaveIngredients,
    //   allergy: this.state.allergies,
    //   diet: this.state.specificDiets,
    //   likeCuisines: this.state.likeCuisines,
    //   ignoreCuisines: this.state.dontLikeCuisines,
    //   wantCourses: this.state.wantCourses,
    //   excludeCourses: this.state.dontWantCourses,
    //   wantdays: this.state.wantOnHolidays,
    //   excludedays: this.state.dontWantOnHolidays,

  }

  updateMaxTime() {
    var time = window.document.getElementById('time').value
    this.setState({maxTime: time})
  }

  // searchResults({ isNotEmpty }) {
  //   return (
  //     <div>
  //       { isNotEmpty && <Test passedRecipes={this.state.displayFetchedRecipes} /> }
  //     </div>
  //   )
  // }

  // updateHaveIngredients(item) {
  //   this.setState({allowedIngredients: [...item]})
  // }
  //
  // updateDontHaveIngredients(item) {
  //   this.setState({excludedIngredients: [...item]})
  // }

  // updateAllergies(item) {
  //   this.setState({allergies: [...item]})
  // }
  //
  // updateSpecificDiets(item) {
  //   this.setState({specificDiets: [...item]})
  // }
  //
  // updateLikeCuisines(item) {
  //   this.setState({allowedCuisines: [...item]})
  // }
  //
  // updateDontLikeCuisines(item) {
  //   this.setState({excludedCuisines: [...item]})
  // }


  render(){

    const { formLayout }   = this.state.formLayout;

    const results = (this.state.displayFetchedRecipes) ? true : false;

    return (
      <div>
        <Form {...formLayout} onSubmit={this.handleSubmit}>
{/*
          <GroupContainer >
            <Col span="12">
              <Input placeholder="Recipe Name" />
            </Col>
            <Col span="12">
              <Input id="time" onChange={this.updateMaxTime.bind(this)}
                placeholder="Maximum Cooking Time in Minutes" />
            </Col>
          </GroupContainer>
*/}
          <GroupContainer>
            <Attribute type="Allergy" />
            <Attribute type="Diet" />
          </GroupContainer>

          <GroupContainer>
            <UnitedSelectField type="Cuisine">
            </UnitedSelectField>
          </GroupContainer>
{/*
          <GroupContainer>
            <UnitedSelectField>
              <Attribute type="Course" />
              <Attribute type="Course" />
            </UnitedSelectField>
          </GroupContainer>

          <GroupContainer>
            <UnitedSelectField>
              <Attribute type="Holiday" />
              <Attribute type="Holiday" />
            </UnitedSelectField>
          </GroupContainer>
*/}
{/*
          <UnitedSelectField>
            <Ingredient flag={true} />
            <Ingredient flag={false} />
          </UnitedSelectField>
*/}
          <GroupContainer >
              {/*<Ingredient flag={true} />
          <Ingredient updateIng={this.updateHaveIngredients.bind(this)}
              sign={true} passedSelected={this.state.excludedIngredients}
               />
            <Ingredient updateIng={this.updateDontHaveIngredients.bind(this)}
              sign={false} passedSelected={this.state.allowedIngredients}
               />*/}
          </GroupContainer>

          {/*
          <InputGroup size="large" {...formItemLayout}>
            <Ingredient updateIng={this.updateHaveIngredients.bind(this)}
              sign={true} passedSelected={this.state.dontHaveIngredients}
              placeholder="Ingredients you have" />
            <Ingredient updateIng={this.updateDontHaveIngredients.bind(this)}
              sign={false} passedSelected={this.state.haveIngredients}
              placeholder="Ingredients you don't have" />
          </InputGroup>
          */}
{/*
          <GroupContainer >
            <Col span="12">
              <Allergy updateAllergy={this.updateAllergies.bind(this)} />
            </Col>
            <Col span="12">
              <Diet updateDiet={this.updateSpecificDiets.bind(this)} />
            </Col>
          </GroupContainer>

          <GroupContainer >
            <Cuisine updateCuisines={this.updateLikeCuisines.bind(this)}
              passedSelected={this.state.excludedCuisines} sign={true}
              placeholder="Cuisines you like" />
            <Cuisine updateCuisines={this.updateDontLikeCuisines.bind(this)}
              passedSelected={this.state.allowedCuisines} sign={false}
              placeholder="Cuisines you don't like" />
          </GroupContainer>

*/}

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
