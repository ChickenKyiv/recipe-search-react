<<<<<<< HEAD
pages
- page 1 Search Form
- page 2 Search Results
- page 3 Recipe Details


#### Search Form

- [ ] Tests
- [ ] Validation
- [ ] Calls to API Server


First version of Search Form:
Using Antd
Validation Messages
Array from data for submitting data

Form a methods for catching different cases and prepare pages for displaying search results

We need to use a separated components, that can work without Andt too.
Have tests. Have form elements separated we

![Search DB Schema](https://github.com/ChickenKyiv/database-visuals/blob/master/RecipeAPI_Search_Schema%20%20%20SqlDBM.png)
=======
## Advanced Search Form for Recipe Based projects






---

---


## Table of Contents

* [Updating to New Releases](#updating-to-new-releases)
* [Release 2 -  Authentication](#)

## Updating to New Releases


## Release 2 -  Authentication
>>>>>>> 78485626a618f65fd3d4cdd766204efa8de91060


#### @TODO replace state names with this lists. more easy to understand
```
allowedIngredient
excludedIngredient
allowedAllergy
allowedDiet
allowedCuisine
excludedCuisine
allowedCourse
excludedCourse
allowedHoliday
excludedHoliday
```

#### @TODO we'll redo this project using Gatsby and this will help us to make transitions to Graph ql stuff

#### @TODO separate stuff into basic components and reduce size of app.js

### @TODO use a similar system as recipe-planner have.
array was:
```
{
  "id":"course-Main Dishes",
  "name":"Main Dishes",
  "type":"course",
  "description":"Main Dishes",
  "searchValue":"course^course-Main Dishes",
  "localesAvailableIn":["en-US"]
}
```
So we can create a similar field as searchValue. But as we need it to work with our environment
it must be a part of this complex URL
```
http://localhost:3000/api/recipe?filter[where][and][0][name]=Pork
&filter[where][and][1][ingredients][name]=chicken
&filter[where][and][2][cousine][cousineId]=cousineId
&filter[where][and][3][course][courseId]=courseId
&filter[where][and][4][holiday][holidayId]=holidayId
&filter[where][and][5][allergy][allergyId]=allergyId
&filter[where][and][6][diet][dietId]=dietId
```

I.E. for example for course item we'll have this value for search URL : "filter[where][and][2][cousine][cousineId]=cousineId"
**Note** that we can also pass number as 2 into this URL. So we need to find a way how to do it.
or maybe we can hardcode this stuff for a first times




This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
