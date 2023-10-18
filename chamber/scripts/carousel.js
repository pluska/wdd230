//carousel
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const bulletButtons = document.querySelectorAll('.bullet');

let activeIndex = 0;

bulletButtons.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    carouselItems[activeIndex].classList.remove('active');
    bulletButtons[activeIndex].classList.remove('active');
    activeIndex = index;
    carouselItems[activeIndex].classList.add('active');
    bulletButtons[activeIndex].classList.add('active');
  });
})

setInterval(() => {
  carouselItems[activeIndex].classList.remove('active');
  bulletButtons[activeIndex].classList.remove('active');
  activeIndex = (activeIndex + 1) % carouselItems.length;
  carouselItems[activeIndex].classList.add('active');
  bulletButtons[activeIndex].classList.add('active');
}, 5000);