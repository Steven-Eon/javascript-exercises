const reverseString = function(stringToReverse) {
    let finalString = "";
    for (let i = 0; i < stringToReverse.length; ++i)
    {
        finalString += stringToReverse[stringToReverse.length - 1 - i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
