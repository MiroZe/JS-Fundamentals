function factorialDivision(numberOne, numberTwo) {
    let firstNumberFactorial = numberOne;
    let secondNumberFactorial = numberTwo;

    for(let i  = numberOne -1 ; i >=1 ; i--){
        firstNumberFactorial *=  i
       
    }
    for (let m = numberTwo -1; m >=1; m--) {
        secondNumberFactorial *= m
    }
    
let devide = function(firstFact, secondFact) {
    return firstFact / secondFact;
}
    console.log(devide(firstNumberFactorial, secondNumberFactorial).toFixed(2));
}
factorialDivision(6,2)