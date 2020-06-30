import './style.css';
import Form from './form';
import Weather from './weather';
import RequestWeather from './checkWeather';

const reload = () => {
  window.location.reload();
};

const checkCity = (city) => {
  RequestWeather.checkWeather(city).then((response) => {
    localStorage.clear();
    const lastestCheck = new Weather(response.name, response.main.temp,
      response.main.feels_like, response.weather[0].main);
    localStorage.setItem('currentCity', JSON.stringify(lastestCheck));
    reload();
  });
};

const currentCity = JSON.parse(localStorage.getItem('currentCity'));
let inputCity = JSON.parse(localStorage.getItem('inputCity'));

if (inputCity === null) {
  inputCity = '';
} else {
  checkCity(inputCity);
}

Form.render();

const form = document.getElementById('weather-form');
const submit = document.createElement('button');
submit.setAttribute('type', 'submit');
submit.classList.add('form-button');
submit.onclick = () => {
  localStorage.setItem('inputCity', JSON.stringify(form[0].value));
};

submit.innerHTML = '<i class="fas fa-arrow-alt-circle-right"></i>';
form.appendChild(submit);

if (currentCity) {
  const image = document.createElement('img');
  if (currentCity.condition === 'Rain') {
    image.setAttribute('src', './assets/rain.svg');
  } else if (currentCity.condition === 'Snow') {
    image.setAttribute('src', './assets/snow.svg');
  } else if (currentCity.condition === 'Clear') {
    image.setAttribute('src', './assets/sun.svg');
  } else {
    image.setAttribute('src', './assets/cloud.svg');
  }
  const tempDiv = document.createElement('div');
  const tempP = document.createElement('P');
  const feelsP = document.createElement('P');
  const mainDiv = document.getElementById('form-background-div');
  feelsP.classList.add('feels-like');

  tempP.innerHTML = `${Math.floor(currentCity.temperature)}°`;
  feelsP.innerHTML = `Feels like ${Math.floor(currentCity.feelslike)}°`;

  const cityDiv = document.createElement('div');
  const conditionP = document.createElement('P');
  const cityP = document.createElement('P');
  cityDiv.classList.add('city-name');

  conditionP.innerHTML = currentCity.condition;
  cityP.innerHTML = currentCity.city;

  const switchDegrees = document.createElement('button');

  const convert = (celsius, feelslike) => {
    const f = celsius * (9 / 5) + 32;
    const feelslikeF = feelslike * (9 / 5) + 32;

    switchDegrees.innerHTML = 'Convert to °C';
    tempP.innerHTML = `${Math.floor(f)}°`;
    feelsP.innerHTML = `Feels like ${Math.floor(feelslikeF)}°`;
    switchDegrees.onclick = () => reload();
  };

  switchDegrees.classList.add('ctof');
  switchDegrees.innerHTML = 'Convert to °F';
  switchDegrees.onclick = () => convert(currentCity.temperature, currentCity.feelslike);

  tempDiv.append(tempP, feelsP);
  cityDiv.append(conditionP, cityP, switchDegrees);
  mainDiv.append(tempDiv, image, cityDiv);
}
