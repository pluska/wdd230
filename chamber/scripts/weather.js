const weatherContainer = document.querySelector('#weather-info');

const apiKey = 'c91a6ee2e362e7162db5c386d8f679a5';
const lat = -11.99;
const lon = -77.05;

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const capitilize = (str) => {
  str = str.toLowerCase();
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  str = str.join(' ');
  return str;
}

const getThreeDayForecast = (weatherData) => {
  let threeDayForecast = '';
  for (let i = 0; i <= 2; i++) {
    if (weatherData[i]) {
      const forecastDay = weatherData[i];
      const date = new Date(forecastDay.dt * 1000);
      const day = date.toLocaleDateString('en-US', { weekday: 'long' });
      const hour = date.getHours();
      const iconsrc = `https://openweathermap.org/img/w/${forecastDay.weather[0].icon}.png`;
      const desc = capitilize(forecastDay.weather[0].description);
      const temp = forecastDay.main.temp;
      threeDayForecast += `
      <li class="weather-description"><img src="${iconsrc}" alt="${desc}"> ${day} ${hour}h, ${temp.toFixed(0)}&deg;F ${forecastDay.weather[0].main}</li>
      `
    }
  }
  return threeDayForecast;
}

const displayResults = (weatherData, forecast) => {
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = capitilize(weatherData.weather[0].description);
  const temp = weatherData.main.temp;

  const threeDayForecast = getThreeDayForecast(forecast.list);

  weatherContainer.innerHTML = `
    <h3>${weatherData.name}</h3>
    <p class="weather-description"><img src="${iconsrc}" alt="${desc}"> ${temp.toFixed(0)}&deg;F ${weatherData.weather[0].main}</p>
    <ul class="weather-forecast">${threeDayForecast}</ul>
  `;

}

const apiFetch = async () => {
  try {
    const response = await fetch(apiURL);
    const responseForecast = await fetch(forecast);
    if (response.ok) {
      const data = await response.json();
      const dataForecast = await responseForecast.json();
      displayResults(data, dataForecast);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

apiFetch();