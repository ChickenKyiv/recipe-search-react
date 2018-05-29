import React, { Component } from 'react';
import {
  Form,
  Input,
  Col,
  Button
} from 'antd';
import Allergy    from './Allergy/Allergy'
import Course     from './Course/Course'
import Cuisine    from './Cuisine/Cuisine'
import Diet       from './Diet/Diet'
import Holiday    from './Holiday/Holiday'
import Ingredient from './Ingredient/Ingredient'

import Test from './Test/Test'

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
    var time = window.document.getElementById('time').value
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
              <Input id="time" onChange={this.updateMaxTime.bind(this)}
                placeholder="Maximum Cooking Time in Minutes" />
            </Col>
          </InputGroup>
          <br />
          <InputGroup size="large" {...formItemLayout}>
            <Ingredient updateIng={this.updateHaveIngredients.bind(this)}
              sign={true} passedSelected={this.state.dontHaveIngredients}
              placeholder="Ingredients you have" />
            <Ingredient updateIng={this.updateDontHaveIngredients.bind(this)}
              sign={false} passedSelected={this.state.haveIngredients}
              placeholder="Ingredients you don't have" />

          </InputGroup>
          <br />
          <InputGroup size="large" {...formItemLayout}>
            <Col span="12">
              <Allergy updateAllergy={this.updateAllergies.bind(this)} />

            </Col>
            <Col span="12">
              <Diet updateDiet={this.updateSpecificDiets.bind(this)} />

            </Col>
          </InputGroup>
          <br />
          <InputGroup size="large" {...formItemLayout}>
            <Cuisine updateCuisines={this.updateLikeCuisines.bind(this)}
              passedSelected={this.state.dontLikeCuisines} sign={true}
              placeholder="Cuisines you like" />
            <Cuisine updateCuisines={this.updateDontLikeCuisines.bind(this)}
              passedSelected={this.state.likeCuisines} sign={false}
              placeholder="Cuisines you don't like" />
          </InputGroup>
          <br />
          <InputGroup size="large" {...formItemLayout}>
            <Course updateCourses={this.updateWantCourses.bind(this)}
              passedSelected={this.state.dontWantCourses} sign={true}
              placeholder="Courses You want" />
            <Course updateCourses={this.updateDontWantCourses.bind(this)}
              passedSelected={this.state.wantCourses} sign={false}
              placeholder="Courses You don't want" />
          </InputGroup>
          <br />
          <InputGroup size="large" {...formItemLayout}>
            <Holiday updateHoliday={this.updateWantOnHolidays.bind(this)}
              sign={true} passedSelected={this.state.dontWantOnHolidays}
              placeholder="Holidays/Specific You want" />
            <Holiday updateHoliday={this.updateDontWantOnHolidays.bind(this)}
              sign={false} passedSelected={this.state.wantOnHolidays}
              placeholder="Holidays/Specific You don't want" />
          </InputGroup>
          <br />

          <Button type="primary" htmlType="submit" icon="search">
            Search Recipes
          </Button>
        </Form>

        <Test data={this.state} />
        
      </div>
    );
  }
}
export default SearchForm;
