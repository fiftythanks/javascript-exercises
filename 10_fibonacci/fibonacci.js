const fibonacci = function(number) {
  if (number >= 0) {
    let sequence = [0, 1, 1];
    for (let i = 3; i <= number; i++) {
      sequence.push(sequence[i - 2] + sequence[i - 1]);
    }
    return sequence[number];
  } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
