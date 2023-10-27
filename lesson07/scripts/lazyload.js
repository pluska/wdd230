const currentYearElement = document.querySelector('#currentYear');
const currentYear = new Date().getFullYear();

currentYearElement.innerHTML = `${currentYear}`;