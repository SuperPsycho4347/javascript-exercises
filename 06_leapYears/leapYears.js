const leapYears = function(givenYear) {
    if (givenYear % 100 !== 0 && givenYear % 4 === 0 || givenYear % 400 === 0) {
        return true
    }
    else {
        return false
    }
};

leapYears(2004)

// Do not edit below this line
module.exports = leapYears;
