const KELVIN = 273.15;

const toFahrenheit = (temp) => {
    let cels = temp - KELVIN;
    let rounded = round(cels, 1);
    return rounded;
}

const round = (value, precision) => {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}