"use strict";

const numberInput = document.getElementById("card_number");

const nameInput = document.getElementById("card_name");

const monthInput = document.getElementById("card_month");

const yearInput = document.getElementById("card_year");

const cvcInput = document.getElementById("card_cvc");

const cardName = document.getElementById("name");

const monthEl = document.getElementById("month");

const yearEl = document.getElementById("year");

const numberEl = document.getElementById("number");

const cvcEl = document.getElementById("cvc");

const submitBtn = document.getElementById("submit_btn");

const inputs = [nameInput, monthInput, yearInput, cvcInput, numberInput];

inputs.forEach((input, index) => {
  input.addEventListener("keyup", () => {
    if (index == 0) {
      cardName.innerText = "";
      cardName.innerText = input.value;
    }
    if (index == 1) {
      monthEl.innerText = "";
      monthEl.innerText = input.value;
    }
    if (index == 2) {
      yearEl.innerText = "";
      yearEl.innerText = input.value;
    }
    if (index == 3) {
      cvcEl.innerText = "";
      cvcEl.innerText = input.value;
    }
    if (index == 4) {
      numberEl.innerText = "";
      numberEl.innerText = input.value;
    }
  });
});
