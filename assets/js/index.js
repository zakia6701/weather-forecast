//DOM emelements,API 
const APIKey = '2b80e0fea04b57f6410d51502a9c7c22';
const searchButonEl = document.getElementById('search-button');
const usersInputEl = document.getElementById('city-input');


//fetching api 
searchButonEl.addEventListener('click',function(){
  const city = usersInputEl.value;
  const curentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&Appid' + APIKey + '&units=imperial';
  
      fetch(curentWeather)
      .then(function (response){
        response.json();  
      })
      .then(function (data){
        
      })
})
