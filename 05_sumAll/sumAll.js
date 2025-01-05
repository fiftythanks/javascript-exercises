const sumAll = function(num1, num2) {
  if (
    (typeof num1 !== "number" || typeof num2 !== "number")
    || (!Number.isInteger(num1) || !Number.isInteger(num2))
    || (num1 < 0 || num2 < 0)
  ) { 
    return "ERROR"; 
  }

  let sum = 0;
  let max = Math.max(num1, num2);

  for (let x = Math.min(num1, num2); x <= max; x++) {
    sum += x;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
