'use strict';

var Course  =  server.models.Course;
var relation    = 'nutritions';

function getCourses (){

     var courses     = [
     {
          "name":"Main Dishes",
          "type":"course"
     },
     {
          "name":"Desserts",
          "type":"course"
     },
     {
          "name":"Side Dishes",
          "type":"course"
     },
     {
          "name":"Appetizers",
          "type":"course"
     },
     {
          "name":"Salads",
          "type":"course"
     },
     {
          "name":"Breakfast and Brunch",
          "type":"course"
     },
     {
          "name":"Breads",
          "type":"course"
     },
     {
          "name":"Soups",
          "type":"course"
     },
     {
          "name":"Beverages",
          "type":"course"
     },
     {
          "name":"Condiments and Sauces",
          "type":"course"
     },
     {
          "name":"Cocktails",
          "type":"course"
     },
     {
          "name":"Snacks",
          "type":"course"
     },
     {
          "name":"Lunch",
          "type":"course"
     }
     ];

     return courses;


};

function createCourses(cb){
     database.autoupdate('Course', function(err){
          if (err) return cb(err);

          Course.create(getCourses(), cb);
     });
};


function attachCoursesToRecipes(courses, recipes, cb){
     var arrayWithIds = idsOnly(courses);
     recipes.forEach(function(recipe){
          recipe.updateAttribute('courses', arrayWithIds);

     });
};

module.exports.createCourses = createCourses;
module.exports.attachCoursesToRecipes = attachCoursesToRecipes;

function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};
