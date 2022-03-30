const formGood = document.querySelector('.popup--form-good');
const btnForm = document.querySelectorAll('.form-btn');
//В будующем будет условие которое проверяет валидность формы
//Добавить popuperror
for (let i = 0; i < btnForm.length; i++) {
  btnForm[i].addEventListener('click', function () {
    formGood.classList.toggle('disabled');
  })
}
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    formGood.classList.add('disabled');
  }
});
