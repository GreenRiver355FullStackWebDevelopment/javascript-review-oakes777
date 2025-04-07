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

//Coder: Jonathan Sule (used Prettier to format code)
//import helper fxn
import { calculateStarAverage } from "./logic.js";

//select DOM elements -reviews, star display, form
const reviewsSection = document.querySelector(".reviews");
const starRatingDisplay = document.querySelector(".starRating");
const form = document.querySelector("form");

//fxn to render one review - container div, add img,
// add subdiv - username, star rating, text
//add review to page
function renderReview(review) {
  const container = document.createElement("div");
  container.classList.add("review_container");
  const img = document.createElement("img");
  img.src = review.image;

  const infoDiv = document.createElement("div");
  const usernameP = document.createElement("p");
  usernameP.textContent = review.username;
  const starP = document.createElement("p");
  starP.textContent = `\u2605 ${review.star}`;
  const reviewP = document.createElement("p");
  reviewP.textContent = review.review;

  infoDiv.appendChild(usernameP);
  infoDiv.appendChild(starP);
  infoDiv.appendChild(reviewP);
  container.appendChild(img);
  container.appendChild(infoDiv);
  reviewsSection.append(container);
}

//loop thru all reviews(forEach) - renderView each review obj
reviews.forEach(renderReview);
//fxn update av star rating-use imported helper, display result
function updateStarAverage() {
  const avg = calculateStarAverage(reviews);
  starRatingDisplay.textContent = `Star Rating: ${avg.toFixed(1)} \u2605`;
}
//call updateStarAverage fxn to show initial rating
updateStarAverage();
//add event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //added debugger to help follow this process
  // debugger;

  const username = document.getElementById("username").value;
  console.log("Username:", username);
  const image = document.getElementById("image").value;
  console.log("Image Path:", image);
  const star = parseInt(document.getElementById("star").value);
  console.log("Star Rating:", star);
  const reviewText = document.getElementById("review").value;
  console.log("Review Text:", reviewText);
  const newReview = {
    username,
    image,
    star,
    review: reviewText,
  };
  console.log("New Review Object:", newReview);
  reviews.push(newReview);
  console.log("New review added. Total reviews now:", reviews.length);
  renderReview(newReview);
  updateStarAverage();
  form.reset();
});
