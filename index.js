const KELVIN = 273.15;

const dataSet = (info) => {
    
    let currentTemp = toFahrenheit(info.main.temp);
    let maxTemp = toFahrenheit(info.main.temp_max);
    let minTemp = toFahrenheit(info.main.temp_min);
    let feelsLike = toFahrenheit(info.main.feels_like);
    let humidity = `${info.main.humidity}%`;
    console.log(currentTemp, maxTemp, minTemp, feelsLike, humidity);
}
const toFahrenheit = (temp) => {
    let cels = temp - KELVIN;
    let fahr = (cels * 9/5) + 32;
    let rounded = round(fahr, 1);

    return rounded;
}
const round = (value, precision) => {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

async function getWeather (city, state, country) {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&APPID=0728c611df00b978be5fae0e86bdf9a8`, {mode:'cors'});
    const weatherData = await weather.json();
    console.log(weatherData);
    dataSet(weatherData);
};


