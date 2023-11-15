const baseURL = "https://pluska.github.io/wdd230/";

const linksURL = baseURL + "data/links.json";

const getLinks = async () => {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
};

const displayLinks = (weeks) => {
  const ul = document.querySelector("#activities");
  weeks.lessons.forEach((week) => {
    week.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.textContent = link.title;
      li.textContent = `Week ${week.lesson}: `;
      li.appendChild(a);
      ul.appendChild(li);
    });
  });
}

getLinks();