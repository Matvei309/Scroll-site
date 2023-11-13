const $button1 = document.querySelector('.header-button1');
const $form1 = document.querySelector('.sectoin');

$button1.addEventListener('click', e => {
  $form1.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
});

