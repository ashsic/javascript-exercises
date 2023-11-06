const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let currSum = 0;
  arr.forEach((val) => {currSum += val});
  return currSum;
};

const multiply = function(arr) {
  let currProduct = 1;
  arr.forEach((val) => {currProduct *= val});
  return currProduct;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(val) {
	let currFact = 1;
  for(let i=1; i<=val; i++){
    currFact *= i;
  }
  return currFact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
