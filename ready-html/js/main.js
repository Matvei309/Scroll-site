const $button1 = document.querySelector('.header-button2');
const $form1 = document.querySelector('.foo');

$button1.addEventListener('click', e => {
  $form1.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
});

