import axios from "axios";
import {
  HOLIDAY_ENDPOINT,
  ALLERGY_ENDPOINT,
  DIET_ENDPOINT,
  CUISINES_ENDPOINT,
  COURSES_ENDPOINT,
  INGREDIENTS_ENDPOINT
} from "../constants/endpoints";

function getHolidays() {
  return axios.get(HOLIDAY_ENDPOINT);
}
function getAllergy() {
  return axios.get(ALLERGY_ENDPOINT);
}
function getDiet() {
  return axios.get(DIET_ENDPOINT);
}
function getCuisines() {
  return axios.get(CUISINES_ENDPOINT);
}
function getCourses() {
  return axios.get(COURSES_ENDPOINT);
}
function getIngredients() {
  return axios.get(INGREDIENTS_ENDPOINT);
}

export default () => {
  return axios.all([
    getHolidays(),
    getAllergy(),
    getDiet(),
    getCuisines(),
    getCourses(),
    getIngredients()
  ]);
};
