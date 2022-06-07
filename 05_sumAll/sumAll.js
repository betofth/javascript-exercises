const sumAll = function(n1,n2) {
    let x = 0;
    if(typeof n1 != "number" || typeof n2 != "number"){
        return "ERROR";
    }
    if (n1<0 || n2<0){
        return "ERROR";
    }
    if(n2>n1){
        for (let i = n1; n2>=i; i++){
        x = x + i;
        }   
        return x;
    }
    else if(n1>n2){
        for(let i = n2; n1>=i; i++){
            x = x + i;
        }
        return x;
    }
};

// Do not edit below this line
module.exports = sumAll;
