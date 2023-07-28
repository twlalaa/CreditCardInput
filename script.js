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

const nameError = document.getElementById("name-error");

const monthError = document.getElementById("month-error");

const numberError = document.getElementById("number-error");

const yearError = document.getElementById("year-error");

const cvcError = document.getElementById("cvc-error");

inputs.forEach((input, index) => {
  input.addEventListener("keyup", () => {
    if (index == 0) {
      if (input.value) {
        cardName.innerHTML = input.value;
        nameError.style.color = "white";
      } else {
        cardName.innerText = "";
        nameError.style.color = "red";
      }
    }
    if (index == 1) {
      if (!input.value) {
        monthEl.innerText = "";
        monthError.style.color = "red";
        monthError.innerText = "Month cannot be empty!";
      } else if (input.value > 12) {
        monthEl.innerText = "";
        monthError.style.color = "red";
        monthError.innerText = "Enter a valid month!";
      } else {
        monthEl.innerText = "input.value";
        monthError.style.color = "white";
      }
    }
    if (index == 2) {
      if (!input.value) {
        yearEl.innerText = "";
        yearError.style.color = "red";
      } else if (input.value < 23 && input.value.length == 2) {
        yearEl.innerText = "";
        yearError.innerText = "Enter a valid year!";
        yearError.style.color = "red";
      } else {
        yearEl.innerHTML = input.value;
        yearError.innerText = "Year cannot be empty!";
        yearError.style.color = "white";
      }
    }
    if (index == 3) {
      if (!input.value) {
        cvcEl.innerText = "";
        cvcError.innerText = "CVC cannot be empty!";
        cvcError.style.color = "red";
      } else {
        cvcEl.innerHTML = input.value;
        cvcError.style.color = "white";
      }
    }
    if (index == 4) {
      if (numberInput.value) {
        let displayNum = "";
        for (let i = 0; i < numberInput.value.length; i += 4) {
          displayNum += numberInput.value.slice(i, i + 4) + " ";
        }
        numberEl.innerText = displayNum.trim();
        numberError.style.color = "white";
      } else {
        numberEl.innerText = "";
        numberError.style.color = "red";
      }
    }
  });
});
