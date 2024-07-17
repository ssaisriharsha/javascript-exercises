const reverseString = function(string) {
    let newstr = "";
    for (let i = -1; i >= -(string.length); i--) {
        newstr += string.at(i);
    }
    return newstr;
};

// Do not edit below this line
module.exports = reverseString;
