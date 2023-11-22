const bannerContainer = document.querySelector('#banner');
const bannerButton = document.querySelector('#close-banner');

bannerButton.addEventListener('click', () => {
  bannerContainer.style.display = 'none';
})

//Banner will show only Monday to Wednesday

const today = new Date();
const day = today.getDay();

if (!(day <= 3 && day >= 1)) {
  bannerContainer.style.display = 'none';
}