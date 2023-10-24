let formElement = document.getElementById("loginForm");
let inputNameElement = document.getElementById("userName");
let inputPasswordElement = document.getElementById("userPassword");
let inputConfirmPasswordElement = document.getElementById("userPasswordConfirm");
let inputPhoneElement = document.getElementById("phone");
let submitButtonElement = document.getElementById("submitButton");

let nameValid = false;
let phoneValid = false;
let passwordValid = false;
let passwordConfirmValid = false;
let regexName = /^[A-Za-z\s]{1,20}$/;
let regexPhone = /^\d{9}$/
let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const USERNAME_INVALID = "Nombre con sólo letras y espacios";
const PHONE_INVALID = "Solo se permiten 9 dígitos";
const PASSWORD_INVALID = "Debe tener un tamaño mínimo de 6 carácteres, incluir algún dígito y que tenga alguna letra mayúscula y minúscula";
const CONFIRMPASSWORD_INVALID = "La contraseña no coincide";

inputNameElement.addEventListener("blur", validateName);
inputPhoneElement.addEventListener("blur", validatePhone);
inputPasswordElement.addEventListener("blur", validatePassword);
inputConfirmPasswordElement.addEventListener("blur", validatePassword);

function checkFullForm() {
  if (nameValid && phoneValid && passwordValid && passwordConfirmValid) {
    submitButtonElement.classList.remove("notAvailable");
  } else {
    submitButtonElement.classList = "notAvailable";
  }
}

function validateName() {
  nameValid = regexName.test(inputNameElement.value);
  inputNameElement.className = nameValid ? "success" : "error";

  if (!nameValid) {
    // Obtenemos la etiqueta <small> del div al que pertenece el input
    inputNameElement.parentNode.getElementsByTagName("small")[0].innerHTML = USERNAME_INVALID;
  } else {
    inputNameElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
  }

  checkFullForm();
}


function validatePhone(){
  phoneValid = regexPhone.test(inputPhoneElement.value);
inputPhoneElement.className = phoneValid ? "success" : "error";

if (!phoneValid) {
  inputPhoneElement.parentNode.getElementsByTagName("small")[0].innerHTML = PHONE_INVALID;
} else {
  inputPhoneElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
}

checkFullForm();
}


function validatePassword() {
  const passwordValue = inputPasswordElement.value;
  const confirmPasswordValue = inputConfirmPasswordElement.value;

  passwordValid = regexPassword.test(passwordValue);
  passwordConfirmValid = passwordValue === confirmPasswordValue && passwordValid;

  inputPasswordElement.className = passwordValid ? "success" : "error";
  inputConfirmPasswordElement.className = passwordConfirmValid ? "success" : "error";

  if (!passwordValid) {
    inputPasswordElement.parentNode.getElementsByTagName("small")[0].innerHTML = PASSWORD_INVALID;
  } else {
    inputPasswordElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
  }

  if (!passwordConfirmValid) {
    inputConfirmPasswordElement.parentNode.getElementsByTagName("small")[0].innerHTML = CONFIRMPASSWORD_INVALID;
  } else {
    inputConfirmPasswordElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
  }

  checkFullForm();
}


formElement.addEventListener('submit', event => {
  event.preventDefault();
  alert("Enviado");
});