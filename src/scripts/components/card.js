// @todo: Темплейт карточки

const templateCard = document.querySelector('#card-template').content;

// @todo: Функция создания карточки

export function createCard(item, functionDelCard, functionLike, viewImage) {

    const card = templateCard.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = item.link;
    card.querySelector('.card__image').alt = item.name;
    card.querySelector('.card__title').textContent = item.name;
    const buttonDelCard = card.querySelector('.card__delete-button');
    const likeButton = card.querySelector('.card__like-button');
   
    buttonDelCard.addEventListener('click', function() {
        functionDelCard(card);
    });
    
    likeButton.addEventListener('click', function() {
        functionLike(likeButton);
    });
    
    card.addEventListener('click', function(){
        viewImage(item.link, item.name);   

    }); 
          
    return card;
}

// @todo: Функция удаления карточки

export function deleteCard(el) {
    el.remove();
}

// функция нажатия на кнопку лайк 

export function likeClick(element) {
    element.classList.toggle('card__like-button_is-active');
}
