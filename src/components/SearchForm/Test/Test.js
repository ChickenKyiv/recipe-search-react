import React, { Component } from 'react';


class Test extends Component {
  constructor(props) {
    super(props)

    this.state = props.data;
  }

  render(){

    return (
      <div>
        <hr />
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
        <br />
        <br />
      </div>
    );
  }
}
export default Test;
