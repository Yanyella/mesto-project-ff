// функция, добавляющая классы при неправильном вводе данных в инпут

function showInputError(formElement, inputElement, errorMessage, validObj) {

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validObj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validObj.errorClass);

};

// функция, скрывающая классы в случае успешного ввода данных в инпут

function hideInputError(formElement, inputElement, validObj){

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validObj.inputErrorClass);
  errorElement.classList.remove(validObj.errorClass);
  errorElement.textContent = '';

};

// функция показа или скрытия ошибок 

function isValid (formElement, inputElement, validObj) {

  if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
  showInputError(formElement, inputElement, inputElement.validationMessage,  validObj);
  } else {
  hideInputError(formElement, inputElement, validObj);
  }
};

// функция активации и дезактивации кнопки формы

function setEventListeners(formElement, validObj) {

  const inputList = Array.from(formElement.querySelectorAll(validObj.inputSelector));
  const buttonElement = formElement.querySelector(validObj.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validObj);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, validObj);
      toggleButtonState(inputList, buttonElement, validObj);
    });
  });

};

// функция валидации форм

export function enableValidation(validObj) {

  const formList = Array.from(document.querySelectorAll(validObj.formSelector));
  formList.forEach((formElement) => {
      setEventListeners(formElement, validObj);
    });
};

// функция проверки на валидность инпутов

function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
});
}

// функция добавления класса кнопке

function toggleButtonState(inputList, buttonElement, validObj) {

  if(hasInvalidInput(inputList)){
    buttonElement.classList.add(validObj.inactiveButtonClass);
    buttonElement.disabled = true;

  } else {
    buttonElement.classList.remove(validObj.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

// функция очистки валидации

export function clearValidation(formElement, validObj) {

  const inputElementList = formElement.querySelectorAll(validObj.inputSelector);
  const buttonElement = formElement.querySelector(validObj.submitButtonSelector);

  inputElementList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validObj);
    toggleButtonState(inputList, buttonElement, validObj);
  })
  
}