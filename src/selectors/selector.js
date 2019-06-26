import { search } from "@groceristar/groceristar-fetch";

// import search_methods from '@groceristar/f-recipe-search'



// this function will
function getFormattedAttributes( attribute ) {
  return search.getFormattedAttributes(attribute);
}

function getPlaceholder( attribute ){
  return search.getPlaceholder(attribute);
}

function getFormattedIngredients(){
  return search.getFormattedIngredients();
}

function toOpt(array){
  return search.toOpt(array);
}

function toOptAntD(array) {
  return search.toOptAntD(array);
}

// @TODO i want to put types into one spot instead of having it at different places with different versions, etc.
// const _TYPES =  {
//   Allergy   : Attribute,
//   Diet      : Attribute,
//   Course    : Attribute,
//   Cuisine   : Attribute,
//   Holiday   : Attribute,
//   Ingredient: Ingredient
// };

// function getFullGrocery( name ) {
//   return groceristar.getGroceryByNameWithDepAndIng(name);
// }
//
// function getGroceryCollection(){
//   return groceristar.getGroceryShowcase();
// }
//
// function getGroceryDataFromId(id){
//
//   console.log(getGroceryById(id));
//   let grocery = getGroceryById(id)[0];
//   let groceryName = grocery.name;
//   let groceryWithDepAndIng = getFullGrocery(groceryName);
//   return groceryWithDepAndIng;
// }


export {

  getPlaceholder,

  toOpt, toOptAntD,
  getFormattedAttributes,
  getFormattedIngredients
  // _TYPES
}
