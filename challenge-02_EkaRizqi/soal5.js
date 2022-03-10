function getSplitName(personName){
    if (typeof(personName) == 
    "string"){
        const namaSplit = personName.split(' ');
        let nama ={
            firstName: null,
            middleName: null,
            lastName: null,
        }
        if(namaSplit.length <= 3){
            if(namaSplit.length == 3){
                nama.firstName = namaSplit[0];
                nama.middleName = namaSplit [1];
                nama.lastName = namaSplit [2];
                return nama;
            }
            else if(namaSplit.length == 2){
                nama.firstName = namaSplit[0];
                nama.middleName = namaSplit [1];
                return nama;
            
            }
            else {
                nama.firstName = namaSplit[0];
                return nama;
            }
        }
        else{
            return "Error: This function is only for 3 characters name";
        }
    }
    else{
        return "Error: Data type not a string";
    }
}
   
    
    

    


console.log(getSplitName('Aldi Daniela Pramata'));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0)); 