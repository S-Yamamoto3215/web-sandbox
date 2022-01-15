// get form Element
const form = document.getElementById('form');

const checkRequired = () => {
  const inputName = <HTMLInputElement>document.getElementById('name');
  const inputEmail = <HTMLInputElement>document.getElementById('email');
  const inputPassword = <HTMLInputElement>document.getElementById('password');
  const inputPassword2 = <HTMLInputElement>document.getElementById('password2');
  const result = {
    name: inputName,
    email: inputEmail,
    password: inputPassword,
    password2: inputPassword2,
  }

  return result
}

// form submit
form.addEventListener('submit', event => {
  event.preventDefault();

  const { name, email, password, password2 } = checkRequired();
})
