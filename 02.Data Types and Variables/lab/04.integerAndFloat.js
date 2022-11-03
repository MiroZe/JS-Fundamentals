function integerAndFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum
    let roundedSum = Math.trunc(sum);
    let isEqual = (sum === roundedSum ? 'Integer' : 'Float');
    
        console.log(`${sum} - ${isEqual}`);
 
}
integerAndFloat(9, 100, 100)