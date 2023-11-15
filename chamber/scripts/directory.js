const baseURL = "https://pluska.github.io/wdd230/chamber/";

const membersURL = baseURL + "data/members.json";

const getMembers = async () => {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayMembers(data.members);
};

const displayMembers = (members) => {
  members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const name = document.createElement("h3");
    name.textContent = member.name;
    const address = document.createElement("p");
    address.textContent = member.address;
    const phone = document.createElement("p");
    phone.textContent = member.phone;
    const website = document.createElement("a");
    website.href = member.website;
    website.target = "_blank";
    website.textContent = member.website;
    const logo = document.createElement("img");
    logo.src = baseURL + "images/" + member.image;
    logo.alt = member.name + " logo";
    logo.loading = "lazy";
    logo.width = 200;
    logo.height = 200;
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    document.querySelector("#cards-directory").appendChild(card);
  })
}