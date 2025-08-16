"use strict";
const ratingTemplate = document.getElementById("rating-card-template").content;
const responseTemplate = document.getElementById(
  "response-card-template"
).content;
const ratingCard = ratingTemplate.cloneNode(true);
const main = document.createElement("main");
document.body.appendChild(main);
const form = ratingCard.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const rating = data.get("rating");
  const responseCard = responseTemplate.cloneNode(true);
  const score = responseCard.querySelector("p:first-of-type span");
  score.textContent = rating;
  main.innerHTML = "";
  main.appendChild(responseCard);
});

main.appendChild(ratingCard);
