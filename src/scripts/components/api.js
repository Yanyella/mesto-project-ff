const URL = 'https://nomoreparties.co/v1/wff-cohort-33';
const TOKEN = 'cce62f7c-f51c-4744-92ca-be472977f2d5';

// функция проверки статуса полученных данных от сервера

function checkStatus(res) {
    if(!res.ok) {
        throw new Error(`HTTP ошибка! Код: ${res.status}`)
    } 
    return res.json();
}

// функция обновления аватара

export function patchAvatar(url) {
    return fetch(`${URL}/users/me/avatar `, {
        method: 'PATCH',
        headers: { 
             authorization: `${TOKEN}`,
        },
        body: JSON.stringify({
			avatar: url
		}),
    })
    .then(checkStatus);
}

// функция загрузки информации о пользователе с сервера

export function getProfileData() {
    return fetch(`${URL}/users/me`, {
        headers: {
            authorization: `${TOKEN}`
        } 
    })
    .then(checkStatus)
    .catch(error => {
        console.error(`Ошибка: ${error}`)
    })
}

// функция удаления карточки на сервере

  // Функция для удаления карточки

  export function delCardOnServer(cardId) {
    return fetch(`${URL}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: `${TOKEN}`
        }
    })
    .then(checkStatus)
    .catch(error => {
        console.error(`Ошибка: ${error}`)
    })
}

// функция загрузки карточек с сервера

export function getCards() {
    return fetch(`${URL}/cards`, {
        headers: {
            authorization: `${TOKEN}`
        }
    })
    .then(checkStatus)
    .catch(error => {
        console.error(`Ошибка: ${error}`)
    })
}

// функция загрузки профиля с сервера для дальнейшего его редактирования

export function getEditProfile(name, about) {
    return fetch(`${URL}/users/me`, {
        method: 'PATCH',
        headers: { 
             authorization: `${TOKEN}`,
            'Content-Type': 'application/json'
        },  
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
    .then(checkStatus);
}

// функция добавления новой карточки на сервер

export function getEditCard(name, link) {
    return fetch(`${URL}/cards`, {
        method: 'POST',
        headers: { 
             authorization: `${TOKEN}`,
            'Content-Type': 'application/json'
        },  
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(checkStatus);
}

// функция запроса лайка с сервера

export function putLikeCard(cardId) {
    return fetch(`${URL}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: { 
             authorization: `${TOKEN}`,
        }
    })
    .then(checkStatus)
}

// функция удаления лайка с карточки

export function delLikeCard(cardId) {
    return fetch(`${URL}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: { 
             authorization: `${TOKEN}`,
        }
    })
    .then(checkStatus);
}




