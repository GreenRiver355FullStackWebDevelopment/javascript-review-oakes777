//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////
/* 
Pseudocode:
import helper fxn
select DOM elements
  reviews
  star rating display
  review form
function to render one review
  container div
  add user image
  add sub-div
    username
    star rating
    review text
  add review to page
loop through all reviews-forEach
  call renderReview on each review object
function to update average star rating
  use imported helper to calculate
  display result in starRating <p> tag
call updateStarAverage fxn to show initial rating
add event listener for when form submitted
  prevent page from reloading
  get input values from form
  create new review object
  add new review to array
  render new review to page
  update average star rating
  reset form
*/


//import helper fxn
import {calculateStarAverage} from "./logic.js";

