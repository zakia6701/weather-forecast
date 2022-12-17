//DOM emelements,API work
const searchButonEl = document.getElementById('search-button');
const usersInputEl = document.getElementById('city-input');
const apiKey = '2b80e0fea04b57f6410d51502a9c7c22';
const city = usersInputEl.value;

searchButonEl.addEventListener('click',function(){
    
    console.log(usersInputEl.value);
});
