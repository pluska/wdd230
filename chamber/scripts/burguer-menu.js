const button = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');

button.addEventListener('click', () => {
  navigation.classList.toggle('open');
  button.classList.toggle('open');
})