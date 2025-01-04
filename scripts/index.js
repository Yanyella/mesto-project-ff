// @todo: Темплейт карточки

const templateCard = document.querySelector('#card-template').content;

// @todo: DOM узлы

const container = document.querySelector('.content');
const cardList = container.querySelector('.places__list');
const buttonAddCard = document.querySelector('.profile__add-button');

// @todo: Функция создания карточки

function createCard(item) {
    const card = templateCard.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = item.link;
    card.querySelector('.card__image').alt = item.name;
    card.querySelector('.card__title').textContent = item.name;
    card.querySelector('.card__delete-button');
    cardList.append(card);

    // вызов функции удаления карточек

    const buttonsDelCard = document.querySelectorAll('.card__delete-button');
    const cards = document.querySelectorAll('.card');

    removeCard(buttonsDelCard, cards);
}

// @todo: Функция удаления карточки

function removeCard(arrBtn, arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let k = 0; k < arrBtn.length; k++) {
            arrBtn[i].addEventListener('click', function() {
                arr[i].remove();
            })
        }
    }
}

// @todo: Вывести карточки на страницу

function showCards(arr) {
    arr.forEach(el => createCard(el));
}

showCards(initialCards);

// Второй вариант: вывод на страницу картчек при нажатии кнопки "+"

/* function showCards(btn, arr) {
    btn.addEventListener('click', function() {
        arr.forEach(el => createCard(el));
    })
}

showCards(buttonAddCard, initialCards); */