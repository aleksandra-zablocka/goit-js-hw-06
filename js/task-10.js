"use strict";

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const collection = document.querySelector("#boxes");

// Metoda 1
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function createBoxes() {
//   let number = input.value;
//   destroyBoxes();

//   for (let i = 0; i < number; i += 1) {
//     let size = 30 + i * 10;
//     const box = document.createElement("div");
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.margin = "5px";
//     collection.append(box);
//   }
// }

// function destroyBoxes() {
//   collection.innerHTML = "";
//   input.value = "";
// }

// createBtn.addEventListener("click", createBoxes);
// destroyBtn.addEventListener("click", destroyBoxes);

// Metoda 2
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();

  for (let i = 0; i < amount; i += 1) {
    let size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    collection.append(box);
  }
}

function destroyBoxes() {
  collection.innerHTML = "";
  input.value = "";
}

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);
