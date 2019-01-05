import { search, groceristar } from "@groceristar/groceristar-fetch";

// console.log(groceristar);

//  function getDish(randomWeek){
//       return mealCalendar.getDishByWeek(randomWeek);
//   }
//

// this function will
function getAttribute( attribute ) {
  return search.getAttribute(attribute);
}

function getPlaceholder( attribute ){
  return search.getPlaceholder(attribute);
}

function getIngredients(){
  return groceristar.getIngredients();
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


export { getAttribute, getPlaceholder, getIngredients,
  toOpt, toOptAntD
  // _TYPES
}
