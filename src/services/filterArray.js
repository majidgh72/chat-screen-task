function filterArray(arrayData, attribute, value) {

    const results = [];

    for (var i = 0; i < arrayData.length; i++) {
        let lowerCased = arrayData[i][attribute].toLowerCase();
        if (lowerCased.includes(value)) {
            results.push(arrayData[i]);
        }
    }

    return results;
}

export default filterArray;