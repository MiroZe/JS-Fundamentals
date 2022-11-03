function sumDigits(number) {
    let arr = []
    let sum =0;
    
    arr = String(number).split('');
    for(element of arr) {
        let currentDigit = Number(element);
        sum += currentDigit
    }
    
console.log(sum);
    
}
sumDigits(97561)