const burger = document.getElementById('burger');
const firstLine = document.querySelector('.first-line');
const secondLine = document.querySelector('.second-line');
const thirdLine = document.querySelector('.third-line');
const mainMenu = document.getElementById('main-menu');



burger.addEventListener('click' , () => {
    firstLine.classList.toggle('change-first-line');
    secondLine.classList.toggle('change-second-line');
    thirdLine.classList.toggle('change-third-line');
    mainMenu.classList.toggle('main-menu-show');

})

