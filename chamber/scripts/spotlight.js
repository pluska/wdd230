const baseURL = "https://pluska.github.io/wdd230/chamber/";
const membersURL = baseURL + "data/members.json";

const spotlights_container = document.querySelector('#spotlights');

const displaySpotlightMembers = (members) => {
  members = members.filter((member) => member.membership_level === 'Gold' || member.membership_level === 'Silver');
  for (let i = 0; i < 3; i++) {
    const member = members[i];
      const card = document.createElement('div');
      card.classList.add('spotlight');
      const name = document.createElement('h3');
      name.textContent = member.name;
      name.classList.add('company-name');
      const area = document.createElement('p');
      area.textContent = member.area;
      area.classList.add('slogan');
      const information = document.createElement('ul');
      const phone = document.createElement('li');
      const phoneAnchor = document.createElement('a');
      phoneAnchor.textContent = member.phone;
      phoneAnchor.href = 'tel:' + member.phone;
      phone.appendChild(phoneAnchor);
      const address = document.createElement('li');
      address.textContent = member.address;
      const website = document.createElement('li');
      const websiteAnchor = document.createElement('a');
      websiteAnchor.href = member.website;
      websiteAnchor.target = '_blank';
      websiteAnchor.textContent = member.website;
      website.appendChild(websiteAnchor);
      information.appendChild(phone);
      information.appendChild(address);
      information.appendChild(website);
      card.appendChild(name);
      card.appendChild(area);
      card.appendChild(information);
      spotlights_container.appendChild(card);
  }
}

const getMembers = async () => {
  const response = await fetch(membersURL);
  const data = await response.json();
  console.table(data);
  displaySpotlightMembers(data.companies);
};




getMembers();