import { romanConvertor } from "./functions.js";
// Elements
let input = document.querySelector("#numbersInput");
let output = document.querySelector("#romanNumbersOutput");
let btn = document.querySelector(".numberConvertor");

//DOM Function
const numberToRoman = (e) => {
  e.preventDefault();

  let numberInput = input.value;
  let incomingInput = romanConvertor(numberInput);
  output.value = incomingInput;

  input.value = "";
};

//Event listener
btn.addEventListener("click", numberToRoman);
