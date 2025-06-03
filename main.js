const searchInput = document.querySelector("#searchInput");
const cityNameEl = document.querySelector(".cityName");
const degreeEl = document.querySelector(".degree");
const descEl = document.querySelector(".desc");
const icon = document.querySelector(".icon");

searchInput.addEventListener("keypress", findWeatherInfo);
const weatherApi = new weatherAPI();

function findWeatherInfo(e) {
  if (e.keyCode === 13) {
    const cityName = searchInput.value.trim();
    weatherApi
      .getWeatherInfo(cityName)
      .then((data) => {
        if (data.cod !== 200) {
          alert("Şehir Bulunamadı!");
          searchInput.value = "";
          return;
        } else {
          display(data);
        }
      })
      .catch((error) => console.log(error));
  }
}

function display(data) {
  cityNameEl.textContent = data.name;
  degreeEl.textContent = `${Math.round(data.main.temp)}°`;
  descEl.textContent = data.weather[0].description;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  searchInput.value = "";
}
