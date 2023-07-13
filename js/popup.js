let popUpLogin = document.querySelector('.popup');
let openPopUpButton = document.querySelector('.button-login');
let background = document.querySelector('.popup-container');

openPopUpButton.addEventListener('click', () => {
    popUpLogin.classList.add('open');
})

document.addEventListener('click', (e) => {
    if (e.target === background) {
        popUpLogin.classList.remove('open');
    }
})
