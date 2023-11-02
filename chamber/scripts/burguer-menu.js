const button = document.querySelector('#menu-button');
const sidebarBtn = document.querySelector('#sidebar-menu');
const navigation = document.querySelector('.navigation');
const sidebar = document.querySelector('.sidebar');

button.addEventListener('click', () => {
  navigation.classList.toggle('open');
  button.classList.toggle('open');
})

sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  sidebarBtn.classList.toggle('open');
})