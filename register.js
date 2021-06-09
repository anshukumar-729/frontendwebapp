const scriptURL = 'https://script.google.com/macros/s/AKfycbwfj52_xq45EXWY-HG8pjmOnQtyUslnt_7Olx06_zb5boBpeO_zJfuMXFc05yI9IGTeFw/exec'
const form = document.forms['registration_form_googlesheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Resistered Successfully"))
    .catch(error => console.error('Error!', error.message))
})