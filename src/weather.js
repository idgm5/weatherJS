export default class Weather {
  constructor(city, temperature) {
    this.city = city;
    this.temperature = temperature;
  }

  save(lastcheck) {
    localStorage.setItem('currentCity', JSON.stringify(lastcheck));
    return this;
  }

}
