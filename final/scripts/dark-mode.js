const switchButton = document.querySelector('#mode');
const main = document.querySelector('main');


switchButton.children[0].addEventListener('click', () => {
  main.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', main.classList.contains('dark-mode'));
})

if (localStorage.getItem('dark-mode') === 'true') {
  main.classList.add('dark-mode');
  switchButton.children[0].checked = true;
} else {
  main.classList.remove('dark-mode');
  switchButton.children[0].checked = false;
}