const menuBtn = document.querySelector('.header__menu-btn');
const popupMenuContainer = document.querySelector('.header__popup-menu-container');

menuBtn.addEventListener('click', () => {
    popupMenuContainer.classList.toggle('popup-menu-active');
});