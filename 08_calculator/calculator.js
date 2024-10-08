const add = function(firstNum, secondNum) {
  let sum = firstNum + secondNum
  return sum
};

const subtract = function(firstNum, secondNum) {
	let diff = firstNum - secondNum
  return diff
};

const sum = function(givenNums) {
	let sum = 0
  let i = 0
  while (i < givenNums.length) {
    sum = sum + givenNums[i]
    i++
  }
  return sum
};

const multiply = function(givenNums) {
  let product = givenNums[0]
  let i = 1
  while (i < givenNums.length) {
    product = product * givenNums[i]
    i++
  }
  return product
};

const power = function(myNum, numPower) {
	let result = Math.pow(myNum, numPower)
  return result
};

const factorial = function(myNum) {
	if (myNum === 0) {
    return 1
  }
  else {
    let factResult = 1
    for (i = 1; i <= myNum; i++) {
      factResult = factResult * i
    }
    return factResult
  }
};

// Function calls
add(1, 2)
subtract(1, 2)
sum([1, 2])
multiply([1,2])
power(1, 2)
factorial(4)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
