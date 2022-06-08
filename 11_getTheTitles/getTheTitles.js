const getTheTitles = function(books) {
    let arrLength = books.length;
    let res = [];
    let aux;
    for (let i = 0; arrLength > i; i++){
        aux = books[i];
        res[i] = aux["title"];
    }
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
