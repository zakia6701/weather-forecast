//DOM emelements,API
const APIKey = "78413dd4b50d8c825aabcc715b58e98b";
const searchButonEl = document.getElementById("search-button");
const usersInputEl = document.getElementById("city-input");
const displayCurent = document.getElementById("current-day");
const main = document.getElementById("main-temp");
const weather = document.getElementById("icon");
const wind = document.getElementById("wind-speed");
//fetching api

searchButonEl.addEventListener("click", function () {
  const city = usersInputEl.value;
  const curentWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey +
    "&units=imperial";

  fetch(curentWeather)
    .then(function (response) {
      console.log(response.status);
      if (response.status !== 200) {
        displayCurent.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      weather.textContent = data.weather[0].icon;
      wind.textContent = data.wind.speed;
      main.textContent = data.main.temp;
    });
});
// })

searchButonEl.addEventListener("click", function () {
  const city = usersInputEl.value;
  const foreCast ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&Appid=" + APIKey + "&units=imperial"

  fetch(foreCast)
    .then(function (response) {
      console.log(response.status);
      if (response.status !== 200) {
        displayCurent.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // weather.textContent = data.weather[0].icon;
      // wind.textContent = data.wind.speed;
      // main.textContent = data.main.feels_like;
    });
});
// })