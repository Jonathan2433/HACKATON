const burger = document.getElementById('burger');
const firstLine = document.querySelector('.first-line');
const secondLine = document.querySelector('.second-line');
const thirdLine = document.querySelector('.third-line');

console.log(firstLine);

burger.addEventListener('click' , () => {
    firstLine.classList.toggle('change-first-line');
    secondLine.classList.toggle('change-second-line');
    thirdLine.classList.toggle('change-third-line');

})
