import {  toFahrenheit } from './math'

async function sub () {
    let val = document.getElementById('search').value;
    if (val !== "") {
        getWeather (val);
    } else {
        console.log("error");
    }
   
}


async function getWeather (city, state, country) {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&APPID=0728c611df00b978be5fae0e86bdf9a8`, {mode:'cors'});
    const weatherData = await weather.json();
    console.log(weatherData);
    dataSet(weatherData);
};

const dataSet = (info) => {
    
    let currentTemp = `Current Temp: ${Math.round(info.main.temp)}\xB0F`;
    let maxTemp = `Today's Max: ${Math.round(info.main.temp_max)}\xB0F`;
    let minTemp = `Today's Min: ${Math.round(info.main.temp_min)}\xB0F`;
    let feelsLike = `Feels Like: ${Math.round(info.main.feels_like)}\xB0F`;
    let humidity = `Humidity: ${info.main.humidity}%`;
    console.log(currentTemp, maxTemp, minTemp, feelsLike, humidity);
}

document.getElementById('subButton').addEventListener('click', sub);

