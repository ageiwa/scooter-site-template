const radioBtn = document.querySelectorAll('.slider__radio-btn');
const slideContainer = document.querySelector('.slider__slide-container');

for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener('click', () => {
        const radioBtnActive = document.querySelector('.slider__radio-btn_active');

        radioBtnActive.classList.remove('slider__radio-btn_active');
        radioBtn[i].classList.add('slider__radio-btn_active');

        if (i === 0) slideContainer.style.left = '0';
        else slideContainer.style.left = '-100%';
    })
}