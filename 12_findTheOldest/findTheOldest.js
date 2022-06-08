const findTheOldest = function(people) {
    let aux;
    let peopleLength = people.length;
    let maxi;
    let age;
    let maxAge;
    let ans = [];
    for (i = 0; peopleLength>i; i++){
        aux = people[i];
        age = aux["yearOfDeath"] - aux["yearOfBirth"];
        if (aux.hasOwnProperty('yearOfDeath') == false){
            age = 2022 - aux["yearOfBirth"];
        }
        if (i == 0){
            maxAge = age;
            maxi = i;
        } else {
            if (age > maxAge){
                maxAge = age;
                maxi = i;
            }
        }
    }
    ans = people[maxi];
    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
