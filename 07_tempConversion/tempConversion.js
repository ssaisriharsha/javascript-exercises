const convertToCelsius = function(temp) {
  let newTemp = parseFloat(((temp - 32)*5/9).toFixed(1));
  return newTemp;
};

const convertToFahrenheit = function(temp) {
  let newTemp = parseFloat((temp*9/5 + 32).toFixed(1));
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
