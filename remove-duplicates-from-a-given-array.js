function removeDuplicates(array) {
    var indexValue = {};
    array.forEach(function(i) {
        if (!indexValue[i]) {
            indexValue[i] = true;
        }
    });
    return Object.keys(indexValue);
}
var array = [1, 1, 3, 5, 3, 5, 4];
console.info((array));
console.info(removeDuplicates(array));
