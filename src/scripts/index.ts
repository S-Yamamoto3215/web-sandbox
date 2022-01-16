import { checkRequired, checkLength, checkEmail, checkPasswordsMatch } from "./functions";

// get form Element
const form = document.getElementById('form');

// form submit
form.addEventListener('submit', event => {
  event.preventDefault();

  const inputElements = checkRequired();
  console.log(inputElements)
})
