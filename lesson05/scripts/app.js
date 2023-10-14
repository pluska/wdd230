const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const API_URL = 'https://www.churchofjesuschrist.org/study/scriptures/bofm';
const language = 'eng';

const booksIndex = {
  '1-ne': '1 Nephi',
  '2-ne': '2 Nephi',
  'jacob': 'Jacob',
  'enos': 'Enos',
  'jarom': 'Jarom',
  'omni': 'Omni',
  'w-of-m': 'Words of Mormon',
  'mosiah': 'Mosiah',
  'alma': 'Alma',
  'hel': 'Helaman',
  '3-ne': '3 Nephi',
  '4-ne': '4 Nephi',
  'morm': 'Mormon',
  'ether': 'Ether',
  'moro': 'Moroni',
}

function getBookIndex(book) {
  for (let prop in booksIndex) {
    if (booksIndex.hasOwnProperty(prop)) {
        if (booksIndex[prop].toLowerCase() === book.toLowerCase()) {
          return prop;
        }
    }
  };
}

button.addEventListener('click', () => {
  if(!input.value.trim()) {
    alert('Please enter your favorite chapter');
    input.focus();
  } else {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.ariaLabel = `Delete ${input.value}`;
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    });
    const searchButton = document.createElement('button');
    searchButton.textContent = '🔍';
    searchButton.ariaLabel = `Search ${input.value}`;
    const favChapter = input.value.trim().split(' ');
    let bookToSearch = favChapter[0];
    let chapter = favChapter[1];
    if (favChapter.length > 2) {
      bookToSearch = `${favChapter[0]} ${favChapter[1]}`;
      chapter = favChapter[2];
    }
    const book = getBookIndex(bookToSearch);
    searchButton.addEventListener('click', () => {
      window.open(`${API_URL}/${book}/${chapter}?lang=${language}`);
    })
    div.appendChild(searchButton);
    div.appendChild(deleteButton);
    li.textContent = input.value;
    li.appendChild(div);
    list.appendChild(li);
    input.focus();
    input.value = '';
  }
})