const temperature = document.querySelector('#temperature');
const tempetureType = document.querySelector('#temperature-type');
const windSpeed = document.querySelector('#wind-speed');
const windChillOutput = document.querySelector('#wind-chill');
const calculateButton = document.querySelector('#get-wind-chill');

const checkLimitsFarhenheit = (temp, speed) => {
  if (temp < 50 && speed > 3) {
    return true;
  } else {
    return false;
  }
};

const checkLimitsCelsius = (temp, speed) => {
  if (temp < 10 && speed > 3) {
    return true;
  } else {
    return false;
  }
}

const windChill = (temp, speed) => {
  const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  return windChill.toFixed(2);
};

const getWindChill = () => {
  let temp =  Number(temperature.value);
  let speed = Number(windSpeed.value);
  let checkLimitsBoolean;
  switch (tempetureType.value) {
    case 'farhenheit':
      checkLimitsBoolean = checkLimitsFarhenheit(temp, speed);
      break;
    case 'celsius':
      checkLimitsBoolean = checkLimitsCelsius(temp, speed);
      temp = temp * 9 / 5 + 32;
    default:
      checkLimitsBoolean = false;
      break;
  }
  if (checkLimitsBoolean) {
    windChillOutput.textContent = `The wind chill is ${windChill(temp, speed)} degrees.`;
  } else {
    windChillOutput.textContent = 'N/A';
  }
};

calculateButton.addEventListener('click', getWindChill);