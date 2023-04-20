"use strict";

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const list = document.querySelector("#ingredients");

// Metoda 1
// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li");
//   li.classList.add("item");
//   li.textContent = ingredient;
//   list.append(li);
// });
// console.log(list);

// Metoda 2
let array = [];

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  array.push(li);
});

list.append(...array);
console.log(list);
