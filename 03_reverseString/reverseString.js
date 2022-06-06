const reverseString = function(str) {
    let lstr = str.length;
    let ans = "";
    for (let i = lstr-1; i>=0; i--){
        ans = ans + str[i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
