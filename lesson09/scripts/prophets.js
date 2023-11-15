const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

const getProphetData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  /* console.table(data); */
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const birthDay = document.createElement('p');
    const placeBirth = document.createElement('p');
    const portrait = document.createElement('img');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDay.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${fullName.textContent}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(fullName);
    card.appendChild(birthDay);
    card.appendChild(placeBirth);
    card.appendChild(portrait);

    cards.appendChild(card);

  })
}

getProphetData();