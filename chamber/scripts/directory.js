const baseURL = "https://pluska.github.io/wdd230/chamber/";

const membersURL = baseURL + "data/members.json";

const gridBtnview = document.querySelector("#grid-btn");
const listBtnview = document.querySelector("#list-btn");
const directory = document.querySelector("#directory");

const getMembers = async () => {
  const response = await fetch(membersURL);
  const data = await response.json();
  console.table(data);
  displayMembers(data.companies);
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
    logo.width = 100;
    logo.height = 100;
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    directory.appendChild(card);
  })
}

getMembers();

gridBtnview.addEventListener("click", () => {
  directory.classList.remove("list");
  gridBtnview.classList.add("active");
  listBtnview.classList.remove("active");
  directory.classList.add("grid");
})

listBtnview.addEventListener("click", () => {
  directory.classList.remove("grid");
  listBtnview.classList.add("active");
  gridBtnview.classList.remove("active");
  directory.classList.add("list");
})