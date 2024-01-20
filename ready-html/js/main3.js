const $button3 = document.querySelector('.header-button3');
const $form3 = document.querySelector('.foo');

$button3.addEventListener('click', e => {
  $form3.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
});
