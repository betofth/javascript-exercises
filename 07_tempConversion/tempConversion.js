const ftoc = function(fnum) {
    let x = Number(fnum);
    let y = (x-32)*(5/9);
    y = Number(y.toFixed(1));
    return y;
};

const ctof = function(cnum) {
    let x = Number(cnum);
    let y = cnum*(9/5) + 32;
    y = Number(y.toFixed(1));
    return y;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
