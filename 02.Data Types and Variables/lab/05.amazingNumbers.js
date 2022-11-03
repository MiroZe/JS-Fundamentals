function amazingNumbers(number) {
    let numToString = String(number);
    let sum = 0
    
    for(let i = 0; i < numToString.length; i++) {
        let currentNumber = Number(numToString[i])
        sum += currentNumber
    }
    let stringOfSum = String(sum);
    let isAmazing = (stringOfSum.includes('9')) ? 'True' : 'False'
    console.log(`${number} Amazing? ${isAmazing}`);
}
amazingNumbers(999)
