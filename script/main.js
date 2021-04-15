const form = document.querySelector('.form');
const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const error = document.querySelector('.error-message');

const REGEXNAME = /^[A-zА-яЁё]+$/;
const REGEXMAIL = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

const errorMessage = document.createElement('span');
errorMessage.classList.add('invalid-message');

// First Name validation
const getValidationFirstName = () => {
  if (REGEXNAME.test(firstName.value)) {
    firstName.classList.remove('input--invalid');
    firstName.classList.add('input--valid');
  } else {
    errorMessage.textContent = 'First Name cannot be empty';
    const mess = firstName.after(errorMessage.cloneNode(true));

    firstName.classList.add('input--invalid');
  };
};

// Last Name validation
const getValidationLastName = () => {

  if (REGEXNAME.test(lastName.value)) {
    lastName.classList.remove('input--invalid');
    lastName.classList.add('input--valid');
  } else {
    errorMessage.textContent = 'Last Name cannot be empty';
    lastName.after(errorMessage.cloneNode(true));

    lastName.classList.add('input--invalid');
  };
};

// Email validation
const EmailValidation = () => {
  if (REGEXMAIL.test(email.value)) {
    email.classList.remove('input--invalid');
    email.classList.add('input--valid');
  } else {
    errorMessage.textContent = 'Looks like this is not an email';
    email.after(errorMessage.cloneNode(true));

    email.classList.add('input--invalid');
  };
};

// Password validation
const passwordValidation = () => {
  if (!password.value == '') {
    password.classList.remove('input--invalid');
    password.classList.add('input--valid');
  } else {
    errorMessage.textContent = 'Password cannot be empty';
    password.after(errorMessage.cloneNode(true));

    password.classList.add('input--invalid');
  };
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  errorMessage.remove();
  getValidationFirstName();
  getValidationLastName();
  EmailValidation();
  passwordValidation();
});
