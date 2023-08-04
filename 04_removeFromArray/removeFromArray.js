const removeFromArray = function(arrayToRemove, ...numbersToRemove) {
    let numsToRemove = numbersToRemove;
    let finalArray = arrayToRemove;

    for (let i = 0; i < finalArray.length; ++i)
    {
        for (let j = 0; j < numsToRemove.length; ++j)
        {
            if (finalArray[i] === numsToRemove[j])
            {
                finalArray.splice(i, 1);
                --i;
            }
        }
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
