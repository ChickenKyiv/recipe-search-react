'use strict';

var relation    = 'nutritions';
module.exports =


function getSampleData (){


     var diet        = [
     {
          "shortDescription":"Lacto vegetarian",
          "longDescription":"Lacto vegetarian"
     },
     {
          "shortDescription":"Ovo vegetarian",
          "longDescription":"Ovo vegetarian"
     },
     {
          "shortDescription":"Pescetarian",
          "longDescription":"Pescetarian"
     },
     {
          "shortDescription":"Vegan",
          "longDescription":"Vegan"
     },
     {
          "shortDescription":"Lacto-ovo vegetarian",
          "longDescription":"Vegetarian"
     },
     {
          "shortDescription":"Paleo",
          "longDescription":"Paleo"
     }
     ];

     return diet;

};


function createDiets(cb){
     database.autoupdate('Diet', function(err){
          if (err) return cb(err);

          Diet.create(getDiets(), cb);
     });
};
