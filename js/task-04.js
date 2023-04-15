"use strict";
// let counterValue = 0;
let counterValue = document.querySelector("#value");

const decrementClick = () => {
  counterValue -= 1;
};

const incrementClick = () => {
  counterValue += 1;
};

const buttonDec = document.querySelector('button[data-action="decrement"]');
console.log(buttonDec);

const buttonInc = document.querySelector('button[data-action="increment"]');
console.log(buttonInc);

buttonInc.addEventListener("click", incrementClick);

console.log(counterValue);
console.log(counterValue.textContent);
