//DOM emelements,API 
const apiKey = '2b80e0fea04b57f6410d51502a9c7c22';
const searchButonEl = document.getElementById('search-button');
const usersInputEl = document.getElementById('city-input');
const curentWeather = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={2b80e0fea04b57f6410d51502a9c7c22}'


//fetching api 
searchButonEl.addEventListener('click',function(){
    const city = usersInputEl.value;
    
    console.log(city)
    });
function fetchCurrent (){
        fetch(curentWeather,{
            method: 'GET',
            credentials: 'same-origin',
            redirect: 'follow',
        })
        .then(function (response){
          response.json();  
        })
        .then(function(data){
            console.log(data);
        })
}
console.log(fetchCurrent)