const form = document.querySelector('.form');
const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

const regexName = /^[A-zА-яЁё]+$/;
const regexMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

const errorMessage = document.createElement('span');
errorMessage.classList.add('error-message');

// First Name validation
const getValidationFirstName = () => {
  

  if (regexName.test(firstName.value)) {
    firstName.classList.remove('input--error');
    firstName.classList.add('input--valid');
  } else {
    firstName.classList.remove('input--valid');
    firstName.classList.add('input--error');

    errorMessage.textContent = "First Name cannot be empty";
    firstName.insertAdjacentElement('afterend', errorMessage);
  };
};

// Last Name validation
const getValidationLastName = () => {
  if (regexName.test(lastName.value)) {
    lastName.classList.remove('input--error');
    lastName.classList.add('input--valid');
  } else {
    lastName.classList.remove('input--valid');
    lastName.classList.add('input--error');

    // const errorMessage = document.createElement('span');
    // errorMessage.classList.add('error-message');
    // errorMessage.textContent = "Last Name cannot be empty";
    // lastName.insertAdjacentElement('afterend', errorMessage);
  };
};

// Email validation
const EmailValidation = () => {
  if (regexMail.test(email.value)) {
    email.classList.remove('input--error');
    email.classList.add('input--valid');

  } else {
    email.classList.remove('input--valid');
    email.classList.add('input--error');

    // const errorMessage = document.createElement('span');
    // errorMessage.classList.add('error-message');
    // errorMessage.textContent = 'Looks like this is not an email';
    // email.insertAdjacentElement('afterend', errorMessage);
  };
};

// Password validation
const passwordValidation = () => {
  if (password.value == '') {
    password.classList.remove('input--valid');
    password.classList.add('input--error');

    // const errorMessage = document.createElement('span');
    // errorMessage.classList.add('error-message');
    // errorMessage.textContent = 'Password cannot be empty';
    // password.insertAdjacentElement('afterend', errorMessage);
  } else {
    password.classList.remove('input--error');
    password.classList.add('input--valid');
  };
};

form.addEventListener('submit', (evt) => {
  getValidationFirstName();
  getValidationLastName();
  EmailValidation();
  passwordValidation();
  errorMessage.textContent='';
  evt.preventDefault();
});
