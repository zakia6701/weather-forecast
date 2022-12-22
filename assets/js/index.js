//DOM emelements,API
const APIKey = "78413dd4b50d8c825aabcc715b58e98b";
const searchButonEl = document.getElementById("search-button");
const usersInputEl = document.getElementById("city-input");
const displayCurent = document.getElementById("current-day");
const main = document.getElementById("main-temp");
const weather = document.getElementById("icon");
const wind = document.getElementById("wind-speed");
const text = document.getElementById("city-input");
const localStr = localStorage.getItem('input[type ="text]');
const savedSearch = document.querySelector("saved");

saved.textContent = text.value;
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
      weather.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
      wind.textContent = data.wind.speed;
      main.textContent = data.main.temp;
      localStorage.setItem("localStr",text)
    });
});
// })

searchButonEl.addEventListener("click", function () {
  const city = usersInputEl.value;
  const foreCast =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&Appid=" +
    APIKey +
    "&units=imperial";

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
      for (i = 1; i <= 5; i++) {
        const temp = document.querySelector('#temp-' + i);
        temp.textContent = data.list[8 * i - 8].main.temp;
        const date = document.querySelector('#date-' +i);
        date.textContent = data.list[8 * i -8].dt_txt;
        const speed = document.querySelector('#speed-' + i);
        speed.textContent = data.list[8 * i -8].wind.speed
        localStorage.setItem("localStr",text)
      }
    });
});
// })
