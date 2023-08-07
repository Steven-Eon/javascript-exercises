const fibonacci = function(iterations) {
    const numOfIterations = Number.parseInt(iterations);
    if (numOfIterations < 0)
    {
        return "OOPS";
    }
    
    let array = [1, 1]
    for (let i = 2; i < numOfIterations; ++i)
    {
        array.push(array[i - 1] + array[i - 2]);
    }

    return array[numOfIterations - 1];
};

// Do not edit below this line
module.exports = fibonacci;
