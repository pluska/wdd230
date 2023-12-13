const salesSection = document.querySelector('#sales');
const newProductsSection = document.querySelector('#new_products');
const sales = salesSection.children[1].children;
const newProducts = newProductsSection.children[1].children

const carousel = () => {
  let index = 0;
  setInterval(() => {
    sales[index].classList.remove('show');
    newProducts[index].classList.remove('show');
    index++;
    if (index > sales.length - 1) {
      index = 0;
    }
    sales[index].classList.add('show');
    newProducts[index].classList.add('show');
  }, 5000)
}

carousel();