const popUpLogin = document.querySelector('.popup');
const openPopUpButton = document.querySelector('.button-login');
const background = document.querySelector('.popup-container');
const background2 = document.querySelector('.popup2-container');
const popUpRegister = document.querySelector('.popup2');
const openPopUpRegisterLink = document.querySelector('.register-link');
 
openPopUpButton.addEventListener('click', () => {
popUpLogin.classList.add('open');

})

openPopUpRegisterLink.addEventListener('click', () => {
    popUpLogin.classList.remove('open');
    
})
openPopUpRegisterLink.addEventListener('click', () => {
    popUpRegister.classList.add('open');
    
})

document.addEventListener('click', (e) => {
    if (e.target == background) {
        popUpLogin.classList.remove('open');
        popUpRegister.classList.remove('open');
    }
})

document.addEventListener('click', (e) => {
    if (e.target == background2) {
        popUpLogin.classList.remove('open');
        popUpRegister.classList.remove('open');
    }
})








