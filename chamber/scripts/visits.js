const today = Date.now();
const todayDate = new Date(today);
let currentVisits = Number(window.localStorage.getItem("currentVisits-ls")) || 0;
let lastVisitDate = Number(window.localStorage.getItem("lastVisitDate-ls")) || 0;



let days = 1000 * 60 * 60 * 24;
let daysBetween = today - lastVisitDate;

if (currentVisits === 0) {
  alert("Welcome! Let us know if you have any questions.")
} else if (daysBetween < days) {
  alert("Back so soon! Awesome!")
} else {
  alert("You last visited " + daysBetween / days + " days ago.")
}

currentVisits++;

window.localStorage.setItem("currentVisits-ls", currentVisits);

window.localStorage.setItem("lastVisitDate-ls", today);