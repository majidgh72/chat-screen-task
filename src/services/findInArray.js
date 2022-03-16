function findInArray(arrayData, attribute, value) {

    for (var i = 0; i < arrayData.length; i++) {
        if (arrayData[i][attribute] === value) {
            return i;
        }
    }

    return false;
}

export default findInArray;