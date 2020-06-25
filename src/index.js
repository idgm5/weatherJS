import './style.css';
import Form from './form';
import Weather from './weather';
import RequestWeather from './checkWeather';
let currentCity = JSON.parse(localStorage.getItem('currentCity'));
if (currentCity === null) {
  currentCity = [];
}

const checkCity = (city) => {
  const lastestCheck = new Weather(city, 0);
  RequestWeather.checkWeather(city).then((response) => {
    lastestCheck.temperature = response.main.temp;
  });
};

let newcity = JSON.parse(localStorage.getItem('city'));

if (newcity === null) {
  newcity = '';
} else {
  checkCity(newcity);
}

Form.render();

const form = document.getElementById('weather-form');
const submit = document.createElement('button');
submit.setAttribute('type', 'submit');
submit.classList.add('form-button');
submit.onclick = () => {
  localStorage.setItem('city', JSON.stringify(form[0].value));
};

submit.innerHTML = 'Check Weather';
form.appendChild(submit);
