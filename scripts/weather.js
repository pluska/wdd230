const weatherContainer = document.querySelector('#weather');

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=-11.99&lon=-77.05&units=imperial&appid=c91a6ee2e362e7162db5c386d8f679a5';

const capitilize = (str) => {
  str = str.toLowerCase();
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  str = str.join(' ');
  return str;
}

const displayResults = (weatherData) => {
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = capitilize(weatherData.weather[0].description);
  const temp = weatherData.main.temp;

  weatherContainer.innerHTML = `
    <h2>${weatherData.name}</h2>
    <p class="weather-description"><img src="${iconsrc}" alt="${desc}"> ${temp.toFixed(0)}&deg;F ${weatherData.weather[0].main}</p>
  `;

}

const apiFetch = async () => {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

apiFetch();