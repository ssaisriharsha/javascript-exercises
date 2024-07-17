const removeFromArray = function(array, ...nums) {
    let len = array.length
    for (let num of nums) {
        for(let i = 0; i < len; i++) {
            if (array.at(i) === num) {
                array.splice(i, 1);
                i--;
                len--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
