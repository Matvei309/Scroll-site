const $button2 = document.querySelector('.header-button2');
const $form2 = document.querySelector('.gallery');

$button2.addEventListener('click', e => {
  $form2.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
});
