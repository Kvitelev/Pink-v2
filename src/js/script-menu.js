const btnOpen = document.querySelector('.header_btn');
const menu = document.querySelector('.menu');
const headerFone =document.querySelector('.header__wrapper');
btnOpen.addEventListener ('click', function () {
  menu.classList.toggle('menu');
  headerFone.classList.toggle('header__wrapper--active');
})
