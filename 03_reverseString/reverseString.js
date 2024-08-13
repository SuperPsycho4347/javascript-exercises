const reverseString = function(myString) {
    let splitString = myString.split("")

    let reversedArray = splitString.reverse()

    let joinedArray = reversedArray.join("")

    return joinedArray
};

let myString = 'hello'
reverseString(myString)

// Do not edit below this line
module.exports = reverseString;
