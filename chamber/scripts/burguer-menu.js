const button = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');
button.addEventListener('click', () => {
  navigation.classList.toggle('open');
  button.classList.toggle('open');
})
if (window.location.pathname === '/chamber/discover.html') {
  const sidebarBtn = document.querySelector('#sidebar-menu') ;
  const sidebar = document.querySelector('.sidebar');
  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebarBtn.classList.toggle('open');
  })
}