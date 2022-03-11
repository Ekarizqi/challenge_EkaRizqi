function checkEmail(email){
    var emailPattern1 = /[a-zA-Z0-9_-]+@[a-zA-Z_-]+\.[a-zA-Z.]{2,4}/ ;
    var emailPattern2 = /[a-zA-Z0-9_-]+@[a-zA-Z_-]+\.[a-zA-Z.]+\.[a-zA-Z]{2}/ ;

    if (String(email).match(emailPattern1) || String(email).match(emailPattern2)){
        return "VALID"
    }
    else if (String(email).match(/[a-zA-Z0-9_-]+@[a-zA-Z_-]/)){
        return "INVALID"
    }
    else if(typeof(email) == "number"){
        return "Error: Data type not a string"
    }
    else if(email == null){
        return "Error: Params can't be null"
    }
    else{
        return "Error: Email is Invalid"
    }
}

console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkEmail(3322));
console.log(checkEmail());
// console.log(checkEmail('19081010022@student.upnjatim.ac.id'))
// console.log(checkEmail('Ayam_geprek@mail.com'))