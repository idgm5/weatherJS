export default class Weather {
  constructor(city, temperature = 0, feelslike, condition) {
    this.city = city;
    this.temperature = temperature;
    this.feelslike = feelslike;
    this.condition = condition;
  }

  save(lastcheck) {
    localStorage.setItem('currentCity', JSON.stringify(lastcheck));
    return this;
  }
}
