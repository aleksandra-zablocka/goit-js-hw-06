"use strict";
const categories = document.querySelectorAll(".item");
// console.log(categories);
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const numberofItems = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberofItems}`);
});
