function repeatString(str, repeatCounter) {

    let result = "" ;

    for(let i = 0; i<repeatCounter; i++){
       result += str;
    }
    return result;
}
console.log(repeatString("String", 2))
   
