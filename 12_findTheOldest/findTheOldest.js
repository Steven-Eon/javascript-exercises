const findTheOldest = function(arrayToSearch) {
    const oldest = arrayToSearch.reduce((currOldest, currElement) =>
    {
        const date = new Date()
        if (currElement.yearOfDeath === undefined || currOldest.yearOfDeath === undefined)
        {
            currOldest = date.getFullYear() - currElement.yearOfBirth > date.getFullYear() - currOldest.yearOfBirth ? currElement : currOldest;
        }
        else if (currElement.yearOfDeath === undefined)
        {
            currOldest = date.getFullYear() - currElement.yearOfBirth > currOldest.yearOfDeath - currOldest.yearOfBirth ? currElement : currOldest;
        }
        else if (currOldest.yearOfDeath === undefined)
        {
            currOldest = currElement.yearOfDeath - currElement.yearOfBirth > date.getFullYear() - currOldest.yearOfBirth ? currElement : currOldest;
        }
        else
        {
            currOldest = currElement.yearOfDeath - currElement.yearOfBirth > currOldest.yearOfDeath - currOldest.yearOfBirth ? currElement : currOldest;
        }

        return currOldest
    }, arrayToSearch[0]);


    console.log(oldest.name);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
