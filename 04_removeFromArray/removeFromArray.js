const removeFromArray = function(array, arg1, ...args) {
    let arrayLength = array.length;
    for (let i = 0; arrayLength>i; i++){
        let argsLength = args.push(arg1) //joga arg1 como ultimo item de args e retorna o tamanho
        for (let a = 0; args.length>a; a++){
            if (array[i] == args[a]){
                array.splice(i,1);
            }
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
