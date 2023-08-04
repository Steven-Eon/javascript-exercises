const repeatString = function(stringtoRepeat, numTimes) {
    let finalString = "";
    if (numTimes < 0)
    {
        return "ERROR";
    }
    for (let i = 0; i < numTimes; ++i)
    {
        finalString = finalString.concat(stringtoRepeat);
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
