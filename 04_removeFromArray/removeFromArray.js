const removeFromArray = function(myArray, ...myNums) {
    const result =  myArray.filter(element => !myNums.includes(element))
    return result
};

removeFromArray([1,2,3,4], 1)

// Do not edit below this line
module.exports = removeFromArray;
