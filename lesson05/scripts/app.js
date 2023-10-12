const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  if(!input.value) {
    alert('Please enter your favorite chapter');
    input.focus();
  } else {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    });
    li.appendChild(deleteButton);
    li.textContent = input.value;
    list.appendChild(li);
    input.focus();
    input.value = '';
  }
})