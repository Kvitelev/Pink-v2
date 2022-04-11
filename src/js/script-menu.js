const btnOpen = document.querySelector('.header_btn');
const menu = document.querySelector('.menu');
const headerFone =document.querySelector('.header__wrapper');
btnOpen.addEventListener ('click', function () {
  if (btnOpen.classList.contains("header_btn--open")) {
    menu.classList.remove('menu');
    btnOpen.classList.add("header_btn--close");
    btnOpen.classList.remove("header_btn--open");
    headerFone.classList.add('header__wrapper--active');
  }
  else {
    menu.classList.add('menu');
    btnOpen.classList.remove("header_btn--close");
    btnOpen.classList.add("header_btn--open");
    headerFone.classList.remove('header__wrapper--active');
  }
})
