// get form Element
const form = document.getElementById('form');

// form submit
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log("submit!!!")
})
