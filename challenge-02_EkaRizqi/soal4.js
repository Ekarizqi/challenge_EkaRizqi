function isValidPassword(givenPassword){
    //  let ValidPassword = /[A-Za-z0-9]{8}/
    var upperCase = /[A-Z]/g;
    var lowerCase = /[a-z]/g;
    var num = /[0-9]/g;
    if((String(givenPassword).length >= 8) && (String(givenPassword).match(upperCase)) && (String(givenPassword).match(lowerCase)) && (String(givenPassword).match(num))){
        return true;
    }
    else if(givenPassword == null){
        return "Error:Params can't be null"
    }
    else{
        return false;
    }
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
// console.log(isValidPassword(@));
// erro invalid or unexpected token
console.log(isValidPassword()); 
// error karena tidak memiliki parameter