const fibonacci = function(seqSize) {
    seqSize = Number(seqSize);
    let aux0 = 0;
    let aux1 = 1;
    let fiboN = 1;
    if (0>seqSize){
        return "OOPS";
    }
    for (let i = 1; seqSize>i; i++){
        fiboN = aux0 + aux1;
        aux0 = aux1;
        aux1 = fiboN;
    }
    return fiboN;
};

// Do not edit below this line
module.exports = fibonacci;
