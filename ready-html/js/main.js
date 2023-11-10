const button1 = Document.querySelector("#headerB");
const form1 = Document.querySelector(".footer");

button1.addEventListener("click", e => {
  form1.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});


// const $button1 = document.querySelector('.desktop1-button1');
// const $form1 = document.querySelector('.desktop1-rectangle6');

// // При клике на кнопку
// $button1.addEventListener('click', e => {
//   // Прокрутим страницу к форме
//   $form1.scrollIntoView({
//     block: 'start', // к ближайшей границе экрана
//     behavior: 'smooth', // и плавно
//   });
// });
