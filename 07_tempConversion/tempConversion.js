// (deg°F − 32) × 5/9 = deg°C
const convertToCelsius = function(degF) {
  let degC = (degF - 32) * 5/9;
  if (degC === 0) return 0;
  return parseFloat(degC.toFixed(1));
};

// (deg°C × 9/5) + 32 = deg°F
const convertToFahrenheit = function(degC) {
  let degF = degC * 9/5 + 32;
  if (degF === 0) return 0;
  return parseFloat(degF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
