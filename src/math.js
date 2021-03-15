const KELVIN = 273.15;

const toFahrenheit = (temp) => {
    let cels = temp - KELVIN;
    let fahr = (cels * 9/5) + 32;
    let rounded = Math.round(fahr);
    return rounded; 
}

const round = (value, precision) => {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export {  toFahrenheit  };

