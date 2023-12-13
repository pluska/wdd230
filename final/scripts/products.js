const url = "https://pluska.github.io/wdd230/final/data/shoes.json";

const container = document.querySelector("#products");

const displayProducts = (products) => {
  products.forEach((product) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const gender = document.createElement("span");
    const sizes = document.createElement("select");
    const img = document.createElement("img");
    const buyBtn = document.createElement('button')
    h3.textContent = product.name;
    description.textContent = product.description;
    price.textContent = `Price: ${product.price}`;
    gender.textContent = `${product.gender}`;
    if (product.gender === 'Men') {
      gender.classList.add('men')
    } else if(product.gender === 'Women') {
      gender.classList.add('women')
    } else {
      gender.classList.add('unisex')
    }
    img.src = product.image_url;
    img.alt = product.name;
    product["sizes"].forEach((size) => {
      const option = document.createElement("option");
      option.value = size;
      option.textContent = size;
      sizes.appendChild(option);
    });
    buyBtn.textContent = "Buy"
    buyBtn.classList.add("btn")

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(description);
    article.appendChild(price);
    price.appendChild(gender);
    article.appendChild(sizes);
    article.appendChild(buyBtn);
    article.classList.add("card");
    container.appendChild(article);
  })
}
const getProducts = async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayProducts(data.products);
}

getProducts();