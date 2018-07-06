import React, { Component } from "react";
import { Form, Input, Col, Button } from "antd";
import Allergy from "./Allergy/Allergy";
import Course from "./Course/Course";
import Cuisine from "./Cuisine/Cuisine";
import Diet from "./Diet/Diet";
import Holiday from "./Holiday/Holiday";
import Ingredient from "./Ingredient/Ingredient";
import axios from "axios";
import Test from "./Test/Test";
import qs from "qs";
import fetchSelects from "../../services/fetchSelects";

const InputGroup = Input.Group;
const start = 0,
  count = 5;

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formLayout: "vertical",
      maxTime: "",
      haveIngredients: [],
      dontHaveIngredients: [],
      allergies: [],
      specificDiets: [],
      likeCuisines: [],
      dontLikeCuisines: [],
      wantCourses: [],
      dontWantCourses: [],
      wantOnHolidays: [],
      dontWantOnHolidays: [],
      displayFetchedRecipes: [],
      holidayList: [],
      allergiesList: [],
      dietsList: [],
      cuisinesList: [],
      coursesList: [],
      ingredientsList: [],
    };
  }

  componentDidMount() {
    fetchSelects().then(
      axios.spread(
        (holidayList, allergiesList, dietsList, cuisinesList, coursesList, ingredientsList) => {
          this.setState({
            holidayList: holidayList.data,
            allergiesList: allergiesList.data,
            dietsList: dietsList.data,
            cuisinesList: cuisinesList.data,
            coursesList: coursesList.data,
            ingredientsList: ingredientsList.data
          });
        }
      )
    );
  }

  handleReset() {
    let n = [];
    this.updateHaveIngredients(n);
    this.updateDontHaveIngredients(n);
    this.updateAllergies(n);
    this.updateSpecificDiets(n);
    this.updateLikeCuisines(n);
    this.updateDontLikeCuisines(n);
    this.updateWantCourses(n);
    this.updateDontWantCourses(n);
    this.updateWantOnHolidays(n);
    this.updateDontWantOnHolidays(n);
  }

  onSubmit(e) {
    if (this.state.haveIngredients.length > 0) {
      axios
        .get(process.env.REACT_APP_API_URL, {
          headers: { "Access-Control-Allow-Origin": "*" },
          params: {
            q: this.state.haveIngredients,
            app_id: process.env.REACT_APP_API_ID, //remove if not required
            app_key: process.env.REACT_APP_API_KEY, //remove if not required
            from: start, //index starting point
            to: start + count, //index end point
            diet: this.state.specificDiets,
            health: this.state.allergies,
            excluded: this.state.dontHaveIngredients
          },
          paramsSerializer: function(params) {
            //to pass arrays
            return qs.stringify(params, { arrayFormat: "repeat" });
          }
        })
        .then(response => {
          console.log(response.data.hits);
          this.setState({ displayFetchedRecipes: response.data.hits });
        })
        .catch(error => console.log(error));
    } else {
      alert("Please select atleast one Ingredient");
    }
    // this.handleReset() //does not work
    e.preventDefault();
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
    var time = window.document.getElementById("time").value;
    this.setState({ maxTime: time });
  }

  updateHaveIngredients(item) {
    this.setState({ haveIngredients: [...item] });
  }

  updateDontHaveIngredients(item) {
    this.setState({ dontHaveIngredients: [...item] });
  }

  updateAllergies(item) {
    this.setState({ allergies: [...item] });
  }

  updateSpecificDiets(item) {
    this.setState({ specificDiets: [...item] });
  }

  updateLikeCuisines(item) {
    this.setState({ likeCuisines: [...item] });
  }

  updateDontLikeCuisines(item) {
    this.setState({ dontLikeCuisines: [...item] });
  }

  updateWantCourses(item) {
    this.setState({ wantCourses: [...item] });
  }

  updateDontWantCourses(item) {
    this.setState({ dontWantCourses: [...item] });
  }

  updateWantOnHolidays(item) {
    this.setState({ wantOnHolidays: [...item] });
  }

  updateDontWantOnHolidays(item) {
    this.setState({ dontWantOnHolidays: [...item] });
  }

  render() {
    const { formLayout } = this.state.formLayout;
    const {
      holidayList,
      allergiesList,
      dietsList,
      cuisinesList,
      coursesList,
      ingredientsList
    } = this.state;
    const formItemLayout = {
      labelCol: { offset: 4 },
      wrapperCol: { span: 12 }
    };

    return (
      <div>
        <Form {...formLayout} onSubmit={this.onSubmit.bind(this)}>
          <InputGroup size="large" {...formItemLayout}>
            <Col span="12">
              <Input placeholder="Recipe Name" />
            </Col>
            <Col span="12">
              <Input
                id="time"
                onChange={this.updateMaxTime.bind(this)}
                placeholder="Maximum Cooking Time in Minutes"
              />
            </Col>
          </InputGroup>
          <InputGroup size="large" {...formItemLayout}>
            <Ingredient
              updateIng={this.updateHaveIngredients.bind(this)}
              sign={true}
              passedSelected={this.state.dontHaveIngredients}
              ingredientsList={ingredientsList}
              placeholder="Ingredients you have"
            />
            <Ingredient
              updateIng={this.updateDontHaveIngredients.bind(this)}
              sign={false}
              passedSelected={this.state.haveIngredients}
              ingredientsList={ingredientsList}
              placeholder="Ingredients you don't have"
            />
          </InputGroup>
          <InputGroup size="large" {...formItemLayout}>
            <Col span="12">
              <Allergy
                updateAllergy={this.updateAllergies.bind(this)}
                allergiesList={allergiesList}
              />
            </Col>
            <Col span="12">
              <Diet
                updateDiet={this.updateSpecificDiets.bind(this)}
                dietsList={dietsList}
              />
            </Col>
          </InputGroup>
          <InputGroup size="large" {...formItemLayout}>
            <Cuisine
              updateCuisines={this.updateLikeCuisines.bind(this)}
              passedSelected={this.state.dontLikeCuisines}
              cuisinesList={cuisinesList}
              sign={true}
              placeholder="Cuisines you like"
            />
            <Cuisine
              updateCuisines={this.updateDontLikeCuisines.bind(this)}
              passedSelected={this.state.likeCuisines}
              cuisinesList={cuisinesList}
              sign={false}
              placeholder="Cuisines you don't like"
            />
          </InputGroup>
          <InputGroup size="large" {...formItemLayout}>
            <Course
              updateCourses={this.updateWantCourses.bind(this)}
              passedSelected={this.state.dontWantCourses}
              sign={true}
              coursesList={coursesList}
              placeholder="Courses You want"
            />
            <Course
              updateCourses={this.updateDontWantCourses.bind(this)}
              passedSelected={this.state.wantCourses}
              sign={false}
              coursesList={coursesList}
              placeholder="Courses You don't want"
            />
          </InputGroup>
          <InputGroup size="large" {...formItemLayout}>
            <Holiday
              updateHoliday={this.updateWantOnHolidays.bind(this)}
              sign={true}
              passedSelected={this.state.dontWantOnHolidays}
              holidayList={holidayList}
              placeholder="Holidays/Specific You want"
            />
            <Holiday
              updateHoliday={this.updateDontWantOnHolidays.bind(this)}
              sign={false}
              passedSelected={this.state.wantOnHolidays}
              holidayList={holidayList}
              placeholder="Holidays/Specific You don't want"
            />
          </InputGroup>
          <Button type="primary" htmlType="submit" icon="search">
            Search Recipes
          </Button>
        </Form>

        <Test passedRecipes={this.state.displayFetchedRecipes} />
      </div>
    );
  }
}
export default SearchForm;
