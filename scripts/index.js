// @todo: Темплейт карточки

const templateCard = document.querySelector('#card-template').content;

// @todo: DOM узлы

const container = document.querySelector('.content');
const cardList = container.querySelector('.places__list');
const buttonAddCard = document.querySelector('.profile__add-button');

// @todo: Функция создания карточки

function createCard(item, functionDelCard) {

    const card = templateCard.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = item.link;
    card.querySelector('.card__image').alt = item.name;
    card.querySelector('.card__title').textContent = item.name;
    const buttonDelCard = card.querySelector('.card__delete-button');

    buttonDelCard.addEventListener('click', function() {
        functionDelCard(card);
    });

    return card;
}

// @todo: Функция удаления карточки

function deleteCard(el) {
    el.remove();
}

// @todo: Вывести карточки на страницу

for(let i = 0; i < initialCards.length; i++) {
    const element = createCard(initialCards[i], deleteCard);
    cardList.append(element);
}



