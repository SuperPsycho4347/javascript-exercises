const sumAll = function(startNum, endNum) {
    let mySum = 0
    if (startNum < 0) {
        return 'ERROR'
    }
    else if (Number.isInteger(startNum) == false || Number.isInteger(endNum) == false) {
        return 'ERROR'
    }
    else if (startNum < endNum) {
        while (startNum <= endNum) {
            mySum = mySum + startNum
            startNum++
        }
        return mySum
    }
    else if (startNum > endNum) {
        while (startNum >= endNum) {
            mySum = mySum + startNum
            startNum--
        }
        return mySum
    }
};
let firstNum, secondNum
sumAll(firstNum, secondNum)

// Do not edit below this line
module.exports = sumAll;
