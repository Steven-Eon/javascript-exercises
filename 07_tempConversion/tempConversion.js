const convertToCelsius = function(temperature) {
  return Math.round((5/9.0 * (temperature - 32)) * 10) / 10
};

const convertToFahrenheit = function(temperature) {
  return Math.round((((9 / 5.0) * temperature) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
