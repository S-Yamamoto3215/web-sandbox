export const checkRequired = () => {
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

export const checkLength = (targetElement: HTMLInputElement) => {
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

export const checkEmail = (targetElement: HTMLInputElement) => {
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

export const checkPasswordsMatch = (passwordElement: HTMLInputElement, password2Element: HTMLInputElement) => {
  const result = {
    isValidation: true,
    errorMessage: ""
  }

  const passwordValue = passwordElement.value
  const password2Value = password2Element.value
  const isMatch = passwordValue === password2Value

  if (!isMatch) {
    result.isValidation = false;
    result.errorMessage = !password2Value ? "Password2 is required" : "Passwords do not match"
  }

  return result
}

export const switchingView = (result: {isValidation: boolean, errorMessage: string}, inputElement: HTMLInputElement) => {
  const { isValidation, errorMessage} = result;
  if (isValidation) {
    inputElement.classList.add('form-input-success');
    inputElement.classList.remove('form-input-error');
    if (inputElement.nextElementSibling) {
      inputElement.nextElementSibling.remove();
    }
  } else {
    inputElement.classList.add('form-input-error')
    inputElement.classList.remove('form-input-success')
    const error_message_element = document.createElement('p');
    if (!inputElement.nextElementSibling) {
      error_message_element.textContent = errorMessage;
      error_message_element.classList.add("error-message")
      inputElement.after(error_message_element);
    }
  }
}
