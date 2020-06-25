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
  const cityDiv = document.createElement('div');
  const cityP = document.createElement('P');

  cityP.innerHTML = `The current temperature in ${currentCity.city} is ${currentCity.temperature} °C`;

  cityDiv.appendChild(cityP);
  form.appendChild(cityDiv);
}
