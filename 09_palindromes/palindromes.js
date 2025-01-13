const palindromes = function (str) {
  str = str.split("").filter((char) => {
    if (
      char === " "
      || char === ","
      || char === "."
      || char === "!"
      || char === "?"
      || char === ";"
      || char === ":"
    ) {
      return false;
    } else return true;
  }).join("");
  reverseStr = str.split("").reverse().join("");
  if (reverseStr.toLowerCase() === str.toLowerCase()) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
