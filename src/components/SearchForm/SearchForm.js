import React, { Component } from 'react';
import {Form,Input,Col} from 'antd';
import Allergy    from './Allergy/Allergy'
import Course     from './Course/Course'
import Cuisine    from './Cuisine/Cuisine'
import Diet       from './Diet/Diet'
import Holiday    from './Holiday/Holiday'
import Ingredient from './Ingredient/Ingredient'

const InputGroup = Input.Group;

class SearchForm extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      formLayout: 'vertical',
      maxTime: '',
      haveIngredients: [],
      dontHaveIngredients: [],
      allergies: [],
      specificDiets: [],
      likeCuisines: [],
      dontLikeCuisines: [],
      wantCourses: [],
      dontWantCourses: [],
      wantOnHolidays: [],
      dontWantOnHolidays: []
    }
  }

  onSubmit(e) {
    //can make sure that only update when user hits submit or display the final list to ask user if that is correct
    e.preventDefault()
  }
  updateMaxTime() {
    var time= window.document.getElementById('time').value
    this.setState({maxTime: time})
  }

  updateHaveIngredients(item) {
    this.setState({haveIngredients: [...item]})
  }

  updateDontHaveIngredients(item) {
    this.setState({dontHaveIngredients: [...item]})
  }

  updateAllergies(item) {
    this.setState({allergies: [...item]})
  }

  updateSpecificDiets(item) {
    this.setState({specificDiets: [...item]})
  }

  updateLikeCuisines(item) {
    this.setState({likeCuisines: [...item]})
  }

  updateDontLikeCuisines(item) {
    this.setState({dontLikeCuisines: [...item]})
  }

  updateWantCourses(item) {
    this.setState({wantCourses: [...item]})
  }

  updateDontWantCourses(item) {
    this.setState({dontWantCourses: [...item]})
  }

  updateWantOnHolidays(item) {
    this.setState({wantOnHolidays: [...item]})
  }

  updateDontWantOnHolidays(item) {
    this.setState({dontWantOnHolidays: [...item]})
  }

  render(){

    const { formLayout }   = this.state.formLayout;

    const formItemLayout   = {
      labelCol:   { offset: 4 },
      wrapperCol: { span: 12 }
    };

    return (
      <div>
        <Form {...formLayout}>

          <InputGroup size="large" {...formItemLayout}>
            <Col span="12">
              <Input placeholder="Recipe Name" />
            </Col>
            <Col span="12">
              <Input id="time" onChange={this.updateMaxTime.bind(this)} placeholder="Maximum Cooking Time in Minutes" />
            </Col>
          </InputGroup>

          <InputGroup size="large" {...formItemLayout}>
            <Ingredient updateIng={this.updateHaveIngredients.bind(this)} sign="1" placeholder="Ingredients you have" />
            <Ingredient updateIng={this.updateDontHaveIngredients.bind(this)} sign="0" placeholder="Ingredients you don't have" />

          </InputGroup>

          <InputGroup size="large" {...formItemLayout}>
            <Col span="12">
              <Allergy updateAllergy={this.updateAllergies.bind(this)} />

            </Col>
            <Col span="12">
              <Diet updateDiet={this.updateSpecificDiets.bind(this)} />

            </Col>
          </InputGroup>

          <InputGroup size="large" {...formItemLayout}>
            <Cuisine updateCuisines={this.updateLikeCuisines.bind(this)} sign="1" placeholder="Cuisines you like" />
            <Cuisine updateCuisines={this.updateDontLikeCuisines.bind(this)} sign="0" placeholder="Cuisines you don't like" />
          </InputGroup>

          <InputGroup size="large" {...formItemLayout}>
            <Course updateCourses={this.updateWantCourses.bind(this)} sign="1" placeholder="Courses You want" />
            <Course updateCourses={this.updateDontWantCourses.bind(this)} sign="0" placeholder="Courses You don't want" />
          </InputGroup>

          <InputGroup size="large" {...formItemLayout}>
            <Holiday updateHoliday={this.updateWantOnHolidays.bind(this)} sign="1" placeholder="Holidays/Specific You want" />
            <Holiday updateHoliday={this.updateDontWantOnHolidays.bind(this)} sign="0" placeholder="Holidays/Specific You don't want" />
          </InputGroup>
          <input type="submit" />
        </Form>
        <div>
          <label>Maximum cooking time: {this.state.maxTime}</label>
          <br />
          <label>Ingredients you have: {this.state.haveIngredients}</label>
          <br />
          <label>Ingredients you don't have: {this.state.dontHaveIngredients}</label>
          <br />
          <label>Allergies: {this.state.allergies}</label>
          <br />
          <label>Specific diets: {this.state.specificDiets}</label>
          <br />
          <label>Cuisines you like: {this.state.likeCuisines}</label>
          <br />
          <label>Cuisines you don't like: {this.state.dontLikeCuisines}</label>
          <br />
          <label>Courses you want: {this.state.wantCourses}</label>
          <br />
          <label>Courses you don't want: {this.state.dontWantCourses}</label>
          <br />
          <label>Holidays you want: {this.state.wantOnHolidays}</label>
          <br />
          <label>Holidays you don't want: {this.state.dontWantOnHolidays}</label>
          <br /><br />
        </div>
      </div>
    );
  }
}
export default SearchForm;
