// get form Element
const form = document.getElementById('form');

const checkRequired = () => {
  const inputName = <HTMLInputElement>document.getElementById('name');
  const inputEmail = <HTMLInputElement>document.getElementById('email');
  const inputPassword = <HTMLInputElement>document.getElementById('password');
  const inputPassword2 = <HTMLInputElement>document.getElementById('password2');
  const result = {
    inputName: inputName,
    inputEmail: inputEmail,
    inputPassword: inputPassword,
    inputPassword2: inputPassword2,
  }

  return result
}

const checkLength = (targetElement: HTMLInputElement) => {
  const [value, id] = [targetElement.value, targetElement.id];
  const result = {
    isValidation: true,
    errorMessage: ""
  }

  switch (id) {
    case "name":
      if (value.length < 3) {
        result.isValidation = false;
        result.errorMessage = "Username must be at least 3 characters";
      }
      break;
    case "password":
      if (value.length < 6) {
        result.isValidation = false;
        result.errorMessage = "Password must be at least 6 characters";
      }
  }

  return result
}

const checkEmail = (targetElement: HTMLInputElement) => {
  const result = {
    isValidation: true,
    errorMessage: ""
  }

  let emailReg = new RegExp('^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$');
  const value = targetElement.value;

  if (!emailReg.test(value)) {
    result.isValidation = false;
    result.errorMessage = "Email is not valid";
  }

  return result
}

// form submit
form.addEventListener('submit', event => {
  event.preventDefault();

  const { inputName, inputEmail, inputPassword, inputPassword2 } = checkRequired();
  // checkPasswordsMatch()
})
