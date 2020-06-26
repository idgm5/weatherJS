import './style.css';
import Form from './form';
import Weather from './weather';
import RequestWeather from './checkWeather';

const checkCity = (city) => {
  RequestWeather.checkWeather(city).then((response) => {
    const lastestCheck = new Weather(city, response.main.temp);
    localStorage.setItem('currentCity', JSON.stringify(lastestCheck));
  });
};

let currentCity = JSON.parse(localStorage.getItem('currentCity'));
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

submit.innerHTML = 'Check Weather';
form.appendChild(submit);

if (currentCity) {
  const image = document.createElement('img');
  image.setAttribute('src', './assets/cloud.svg')
  const tempDiv = document.createElement('div');
  const tempP = document.createElement('P');
  const mainDiv = document.getElementById('form-background-div');
  tempP.innerHTML = `${Math.floor(currentCity.temperature)} °C`;

  const cityDiv = document.createElement('div');
  const cityP = document.createElement('P');

  cityP.innerHTML = `The current temperature in ${currentCity.city} is ${currentCity.temperature} °C`;

  tempDiv.appendChild(tempP);
  mainDiv.append(tempDiv, image);
  cityDiv.appendChild(cityP);
  form.appendChild(cityDiv);
}
