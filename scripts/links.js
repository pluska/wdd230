const baseURL = "https://pluska.github.io/wdd230/";

const linksURL = baseURL + "data/links.json";

const getLinks = async () => {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
};

const displayLinks = (weeks) => {
  const ul = document.querySelector("#activities");
  weeks.forEach((week) => {
    if (week.links.length > 1) {
      const li = document.createElement("li");
      li.textContent = `Week ${week.lesson}: `;
      week.links.forEach((link, index) => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.textContent = link.title;
        li.appendChild(a);
        if (index < week.links.length - 1)
        li.textContent += " | ";
      })
      ul.appendChild(li);
    } else {
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
    }
  });
}

getLinks();