import { search, groceristar } from "@groceristar/groceristar-fetch";

// console.log(groceristar);

//  function getDish(randomWeek){
//       return mealCalendar.getDishByWeek(randomWeek);
//   }
//

function getAttribute( name ) {
  return search.getAttribute(name);
}

function getPlaceholder(attribute){
  return search.getPlaceholder(attribute);
}

function getIngredients(){
  return groceristar.getIngredients();
}

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


export { getAttribute, getPlaceholder, getIngredients }
