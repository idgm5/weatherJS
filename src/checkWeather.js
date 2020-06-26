
const RequestWeather = (() => {
  async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=694a7905f80ea9e9800aaf0269dbc759`, { mode: 'cors' });
    const data = await response.json();
    return data;
  }
  return { checkWeather };
})();


export default RequestWeather;
