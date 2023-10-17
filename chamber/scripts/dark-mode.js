const switchButton = document.querySelector('#switch-mode');
const main = document.querySelector('main');

switchButton.children[0].addEventListener('click', () => {
  main.classList.toggle('dark-mode');
})