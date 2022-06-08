const add = function(n1,n2) {
  let sum = n1 + n2;
  return sum;
};

const subtract = function(n1,n2) {
  let sub = n1 - n2;
  return sub;
};

const sum = function(arr) {
  let arrSum = 0;
  arr.forEach((n) => {
    arrSum += n;
  });
  return arrSum;
};

const multiply = function(arr) {
  let arrMult = arr[0];
  arr.splice(0,1);
  arr.forEach((n) => {
    arrMult = n*arrMult;
  });
  return arrMult;
};

const power = function(n1,n2) {
	let powerResult = n1;
  for (let i = 1; n2>i; i++){
    powerResult = powerResult*n1;
  }
  return powerResult;
};

const factorial = function(n1) {
	let fact = n1;
  for (i = 1; n1 > i; i++){
    fact = fact*(n1-i);
  }
  if (n1==0){
    return 1;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
