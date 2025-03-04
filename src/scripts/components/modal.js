// функция открытия модального окна профиля

export function openPopup(element) {

    element.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalEsc);
}

// функция закрытия модального окна */

export function closeModal(element) {

    element.classList.remove('popup_is-opened'); 
    document.removeEventListener('keydown', closeModalEsc); 
}

// функция закрытия модального окна при нажатии на кнопку Esc*/

function closeModalEsc(evt) {
    if (evt.key === "Escape") {
        const popup = document.querySelector('.popup_is-opened');
        if(popup) {
            closeModal(popup);
        }
    }
}

// функция закрытия модального окна при клике на оверлей/

export function closeModalOverlay(evt) {

    if(evt.target.classList.contains('popup')) {
        closeModal(evt.target);
    }
}

// функция закрытия модального окна нажатии на крестик/

export function closeModalCross(evt) {
    
    const popup = evt.target.closest('.popup');
    closeModal(popup);
}

