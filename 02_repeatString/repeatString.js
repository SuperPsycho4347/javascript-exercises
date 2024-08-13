const repeatString = function(myString, repeatInterval) {
    if (myString == '') {
        return ''
    }
    else if (repeatInterval === 0) {
        return ''
    }
    else if (repeatInterval <= 0) {
        return 'ERROR'
    }
    else {
        let i = 1
        let currentString = myString
        while(i < repeatInterval) {
            i++
            currentString = currentString + myString
        }
        return currentString
    }
};

// const myString = 'afaq'
// const myNum = 3

repeatString('myString', 3)

// Do not edit below this line
module.exports = repeatString;
