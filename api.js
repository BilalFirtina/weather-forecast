class weatherAPI {
  constructor() {
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
    this.apiKey = "8c6d586caf07bfe9c6b59f5e2b7ec5fc";
  }

  getWeatherInfo(cityName) {
    return new Promise((resolve, reject) => {
      fetch(
        `${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`
      )
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
