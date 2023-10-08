const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

const currentYearItem = document.getElementById('currentYear');
const lastModifiedItem = document.getElementById('lastModified');

currentYearItem.innerHTML = `${currentYear}`;
lastModifiedItem.innerHTML = `Last modified: ${lastModified}`;