// функция, показывающая ошибку при вводе в инпут

function showInputError(formElement, inputElement, errorMessage, validObject){

    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
    inputElement.classList.add(validObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validObject.errorClass);
  
  };
  
  // функция, скрывающая ошибку при вводе в инпут
  
  function hideInputError (formElement, inputElement, validObject) {
  
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validObject.inputErrorClass);
    errorElement.classList.remove(validObject.errorClass);
    errorElement.textContent = '';
  
  };
  
  // функция проверки правильности внесенных данных в инпут
  
  function checkInputValidity(formElement, inputElement){
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  
  // функция добавления слушателей событий на инпуты
  
  function setEventListeners(formElement) {
  
    const inputList = Array.from(formElement.querySelectorAll('.popup__input')); // список инпутов в форме
    
    const buttonElement = formElement.querySelector('.popup__button');
  
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  
  };
  
  // функция проверки на валидность формы
  
  function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach(formElement => {
      formElement.addEventListener('submit', function(evt){
        evt.preventDefault();
        
      })
      setEventListeners(formElement);
    })
  }
  
  enableValidation();
  
  // функция проверки всех форм на валидность
  
  function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
  }
  
  // функция активации(дезактивации) кнопки
  
  function toggleButtonState(inputList, buttonElement) {
    if(hasInvalidInput(inputList)){
      buttonElement.classList.add('button_inactive');
    } else {
      buttonElement.classList.remove('button_inactive');
    }
  }