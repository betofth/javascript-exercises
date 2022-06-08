const palindromes = function (word) {
    let wordReverse = "";
    word = word.replace(/[^\w\s\']|_/g, "");
    word = word.toLowerCase();
    word = word.replace(/\s+/g, '');
    let wordLength = word.length;
    let wordArray = Array.from(word);
    for (let i = wordLength-1; i>=0; i--){
        wordReverse += wordArray[i];
    }
    if (wordReverse == word){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
