const fibonacci = function(lastNum) {
   let num1, num2, nextTerm = 0, i = 1
   num1 = 1, num2 = 1
    while (i <= lastNum) {
        num1 = num2
        num2 = nextTerm
        nextTerm = num1 + num2
        i++
    }
    return nextTerm
};

fibonacci(2)
// Do not edit below this line
module.exports = fibonacci;
