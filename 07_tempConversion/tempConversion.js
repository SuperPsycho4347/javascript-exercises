const convertToCelsius = function(givenTemp) {
  tempConversion = Math.round(((givenTemp - 32) * 5/9) * 10) / 10
  return tempConversion
};

const convertToFahrenheit = function(givenTemp) {
  tempConversion = Math.round((givenTemp * 9/5 + 32) * 10) / 10
  return tempConversion
};

convertToCelsius(32)
convertToFahrenheit(32)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
