const buttonMenu = document.querySelector('#menu');
const navigationMenu = document.querySelector('.navigation');

buttonMenu.addEventListener('click', () => {
  navigationMenu.classList.toggle('open');
  buttonMenu.classList.toggle('open');
})