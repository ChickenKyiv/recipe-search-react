'use strict';

var Allergy =  server.models.AllergyModel;
var relation    = 'nutritions';

function getAllergy (){

     var allergy     = [
          {
               "shortDescription":"Gluten-Free",
               "type":"allergy"
          },
          {
               "shortDescription":"Peanut-Free",
               "type":"allergy"
          },
          {
               "shortDescription":"Seafood-Free",
               "type":"allergy"
          },
          {
               "shortDescription":"Sesame-Free",
               "type":"allergy"
          },
          {
               "shortDescription":"Soy-Free",
               "type":"allergy"
          },
          {
               "shortDescription":"Dairy-Free",
               "type":"allergy"
          },
          {
               "shortDescription":"Egg-Free",
               "type":"allergy"
          },
          {
               "shortDescription":"Sulfite-Free",
               "type":"allergy"
          },
          {
               "shortDescription":"Tree Nut-Free",
               "type":"allergy"
          },
          {
               "shortDescription":"Wheat-Free",
               "type":"allergy"
          }
     ];

  	return allergy;

};

function createAllergies(cb){
     database.autoupdate('AllergyModel', function(err){
          if (err) return cb(err);

          Allergy.create(getAllergy(), cb);
     });
};

function attachAllergiesToRecipes(allergies, recipes, cb){
     var arrayWithIds = idsOnly(allergies);
     recipes.forEach(function(recipe){
          recipe.updateAttribute('allergies', arrayWithIds);

     });
};

function idsOnly(array){

     var result = Object.keys(array).map(function(e) {
          return array[e].id;
    });

     return result;

};
module.exports.createAllergies = createAllergies;
module.exports.attachAllergiesToRecipes = attachAllergiesToRecipes;
