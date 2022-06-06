const repeatString = function(str,num) {
    let ans = "";
    for (let i = 1; num>=i; i++){
        ans = ans + str;
    }
    if(0>num)
        ans = "ERROR";
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
