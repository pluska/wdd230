//carousel
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let activeIndex = 0;

nextButton.addEventListener('click', () => {
  carouselItems[activeIndex].classList.remove('active');
  activeIndex = (activeIndex + 1) % carouselItems.length;
  carouselItems[activeIndex].classList.add('active');
})

previousButton.addEventListener('click', () => {
  carouselItems[activeIndex].classList.remove('active');
  activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[activeIndex].classList.add('active');
})

setInterval(() => {
  carouselItems[activeIndex].classList.remove('active');
  activeIndex = (activeIndex + 1) % carouselItems.length;
  carouselItems[activeIndex].classList.add('active');
}, 5000);