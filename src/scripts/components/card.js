// @todo: Темплейт карточки

const templateCard = document.querySelector('#card-template').content;

// @todo: Функция создания карточки

export function createCard(item, functionDelCard, functionToggleLikeAndCountLike, viewImage, userId) {

    const card = templateCard.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = item.link;
    card.querySelector('.card__image').alt = item.name;
    card.querySelector('.card__title').textContent = item.name;
    const buttonDelCard = card.querySelector('.card__delete-button');
    const likeButtonCard = card.querySelector('.card__like-button');
    const countLikesCard = card.querySelector('.card__like-count');

    // количество лайков на карточке

    countLikesCard.textContent = item.likes.length;

    // проверка наличия лайка юзера

    const likesCard = item.likes.some(el => el['_id'] === userId);

    if(likesCard) {
        likeButtonCard.classList.add('card__like-button_is-active');  
    }
   
    // появление лайка и кол-ва лайков при нажатии 

    likeButtonCard.addEventListener('click', function(evt) {
        functionToggleLikeAndCountLike(evt, countLikesCard, item['_id']);
    })

    // просмотр карточки

    const image = card.querySelector('.card__image');
    image.addEventListener('click', function(){
        viewImage(item.link, item.name);   

    }); 

    // удаление карточки 

    if(userId === item.owner['_id']) {
        buttonDelCard.addEventListener('click', function() {
            functionDelCard(card, item._id);
        }) 
    } else {
        buttonDelCard.remove();
    }    
       
    return card;
}

// @todo: Функция удаления карточки

export function deleteCard(el) {
     el.remove();
}

// Функция переключения класса лайка и кол-ва лайков 

export function togglelikeCardAndCountLikeCard(evt, likeCount, res) {
    evt.target.classList.toggle("card__like-button_is-active");
    likeCount.textContent = res.likes.length;
}

