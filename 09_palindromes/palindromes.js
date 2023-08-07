const palindromes = function (string) {
    const filteredString = Array.from(string).filter((letter) => {
        const numToCheck = parseInt(letter.charCodeAt(0));
        if ((numToCheck >= 48 && numToCheck <= 57) || (numToCheck >= 65 && numToCheck <= 90) || (numToCheck >= 97 && numToCheck <= 122))
        {
            return true;
        }
    })
    
    for (let i = 0; i < filteredString.length / 2; ++i)
    {
        if (filteredString.at(i).toLowerCase() != filteredString.at(filteredString.length - 1 - i).toLowerCase())
        {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
