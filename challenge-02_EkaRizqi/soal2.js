let checkTypeNumber = (givenNumber) => {
    
    if (givenNumber == null){
        return "Bro where is the parameter?"
    }
    else if (typeof givenNumber != "number"){
        return "Error: invalid data type"
    }
    else if (givenNumber % 2 == 1){
        return "GANJIL"
    }
    else if (givenNumber % 2 == 0){
        return "GENAP"
    }
    else {
            return "Error: Invalid data type"
        }
    
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
// console.log(checkTypeNumber(5));
