const palindromes = function (myStr) {
    let re = /[\W_]/g

    let lowRegStr = myStr.toLowerCase().replace(re, '')

    let reverseStr = lowRegStr.split('').reverse().join('')

    return reverseStr == lowRegStr
};

palindromes('racecar')
// Do not edit below this line
module.exports = palindromes;
