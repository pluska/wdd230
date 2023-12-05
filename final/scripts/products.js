const url = "https://pluska.github.io/wdd230/final/data/shoes.json";

const container = document.querySelector("#products");
const products = []

const displayProducts = (products) => {
  products.forEach((product) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const gender = document.createElement("span");
    const sizes = document.createElement("select");
    const img = document.createElement("img");
    h3.textContent = product.name;
    description.textContent = product.description;
    price.textContent = product.price;
    gender.textContent = product.gender;
    img.src = product.image_url;
    img.alt = product.name;
    product["sizes"].forEach((size) => {
      const option = document.createElement("option");
      option.value = size;
      option.textContent = size;
      sizes.appendChild(option);
    });
    article.appendChild(h3);
    article.appendChild(description);
    article.appendChild(price);
    article.appendChild(gender);
    article.appendChild(sizes);
    article.appendChild(img);
    container.appendChild(article);
  })
}
const getProducts = async () => {
  const response = await fetch(url);
  const data = await response.json();
  products.push(...data.products);
  displayProducts();
}

getProducts();