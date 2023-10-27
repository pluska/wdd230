const visitsOutput = document.querySelector("#visits");
let currentVisits = Number(window.localStorage.getItem("currentVisits-ls")) || 0;

if (currentVisits > 0) {
  visitsOutput.textContent = `Page Visits: ${currentVisits}`;
} else {
  visitsOutput.textContent = `This is your first visit. 🎉 Welcome!`;
}

currentVisits++;

window.localStorage.setItem("currentVisits-ls", currentVisits);