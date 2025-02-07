import './pages/index.css';
import { initialCards } from './scripts/components/cards.js';
import {openPopup, closeModal, closeModalOverlay, closeModalCross} from './scripts/components/modal.js';
import {createCard, deleteCard, likeClick} from './scripts/components/card.js';

// @todo: DOM узлы

const container = document.querySelector('.content');
const cardList = container.querySelector('.places__list');

// модальные окна

const popups = document.querySelectorAll('.popup'); 
const popupEdit = document.querySelector('.popup_type_edit'); // профиль
const popupNewCard = document.querySelector('.popup_type_new-card'); // добавление новой карточки
const popupImage = document.querySelector('.popup_type_image'); // просмотр карточки

// кнопки открытия модальных окон

const buttonEdit = document.querySelector('.profile__edit-button'); // кнопка открытия профиля
const buttonAddCard = document.querySelector('.profile__add-button'); // кнопка открытия модального окна для добавления карточек

// кнопки закрытия модальных окон

const buttonsClosesList = document.querySelectorAll('.popup__close');

// элементы профиля

const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__title');
const profileDescription = profile.querySelector('.profile__description');

// элементы формы профиля

const formProfile = document.forms['edit-profile'];
const inputNameProfile = formProfile['name'];
const inputDescriptionFormProfile = formProfile['description'];

// элементы формы добавления каточек

const formCard = document.forms['new-place'];
const inputnameCard = formCard['place-name'];
const inputLinkFormNewCard = formCard['link'];

// элементы новой карточки

const image = document.querySelector('.popup__image');
const imageElemcaption = document.querySelector('.popup__caption');


// @todo: Вывести карточки на страницу

for(let i = 0; i < initialCards.length; i++) {
    const element = createCard(initialCards[i], deleteCard, likeClick, previewImage);
    cardList.append(element);
}

// функция редактирования профиля 

  function handleFormProfileSubmit(evt) {
    evt.preventDefault(); 
       
    profileTitle.textContent = inputNameProfile.value;
    profileDescription.textContent =  inputDescriptionFormProfile.value;

    formProfile.reset();
    closeModal(popupEdit);
}

// функция просмотра картинки при нажатии на нее

function previewImage(imageSrc, ImageAlt) {

    image.src = imageSrc;
    image.alt = ImageAlt;
    imageElemcaption.textContent = ImageAlt;
    
    openPopup(popupImage);
}

// функция добавления новой карточки

function addNewCard(evt) {
    evt.preventDefault(); 
       
    const cardName = inputnameCard.value;
    const cardUrl = inputLinkFormNewCard.value;

    const newCard = {
        name: cardName,
        link: cardUrl,
    }

    const element = createCard(newCard, deleteCard, likeClick, previewImage);
    cardList.prepend(element);
    formCard.reset();
    closeModal(popupNewCard);
}

// Обработчики событий

// событие открытия модального окна профиля

buttonEdit.addEventListener('click', function(){

    inputNameProfile.value = profileTitle.textContent;
    inputDescriptionFormProfile.value =  profileDescription.textContent;

    openPopup(popupEdit);
})

// Закрытие модальных окон нажатием на оверлей (итерация по всем модальным окнам)

popups.forEach(el => {
    el.addEventListener('mousedown', closeModalOverlay);
})

// Закрытие модального окна с помощью крестика (итерация по всем кнопкам)

buttonsClosesList.forEach(el => {
    el.addEventListener('click', closeModalCross);
});

// открытие модального окна для добавления новой карточки

buttonAddCard.addEventListener('click', function() {
    openPopup(popupNewCard);
});

// событие добавления имени и описания профиля

formProfile.addEventListener('submit', handleFormProfileSubmit);  

// событие добавления названия и картинки в новую карточку

formCard.addEventListener('submit', addNewCard); 