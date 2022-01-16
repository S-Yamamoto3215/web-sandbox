import { checkRequired, checkLength, checkEmail, checkPasswordsMatch } from "./functions";

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


const switchingView = (result: {isValidation: boolean, errorMessage: string}, inputElement: HTMLInputElement) => {
  const { isValidation, errorMessage} = result;
  if (isValidation) {
    inputElement.classList.add('form-input-success')
    inputElement.classList.remove('form-input-error')
  } else {
    inputElement.classList.add('form-input-error')
    inputElement.classList.remove('form-input-success')
  }
}
