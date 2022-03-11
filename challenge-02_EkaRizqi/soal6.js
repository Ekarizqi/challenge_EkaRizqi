const getAngkaTerbesarKedua = (dataNumbers) => {
    if(dataNumbers != undefined){
        if(typeof(dataNumbers) == "object"){
            if(typeof(dataNumbers[0]) == "number"){
                let max = -Infinity, result = -Infinity;
    
                for (const value of dataNumbers) {
                    const numb = value
    
                    if (numb > max) {
                        [result, max] = [max, numb] // save previous max
                    } else if (numb < max && numb > result) {
                        result = numb; // new second biggest
                    }
                }
    
                return result;
            }else{
                return "ERROR : Params must be a number!!!";// Parameter harus berupa angka
            }
        }else{
            return "ERROR : Params must be an array!!!";// Parameter harus berupa array 
        }
    }else{
        return "ERROR : Params can't be null!!!";// Parameter harus diisi
    }
}

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
