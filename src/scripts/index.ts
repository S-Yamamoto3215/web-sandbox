import {
  checkRequired,
  checkLength,
  checkEmail,
  checkPasswordsMatch,
  switchingView
} from "./functions";

// get form Element
const form = document.getElementById('form');

// form submit
form.addEventListener('submit', event => {
  event.preventDefault();

  const { inputName, inputEmail, inputPassword, inputPassword2 } = checkRequired();

  switchingView(checkLength(inputName), inputName);
  switchingView(checkEmail(inputEmail), inputEmail);
  switchingView(checkLength(inputPassword), inputPassword);
  switchingView(checkPasswordsMatch(inputPassword, inputPassword2), inputPassword2);
})
