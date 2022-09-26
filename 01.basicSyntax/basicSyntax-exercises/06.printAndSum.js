function printAndSum(num1, num2){
let sum = 0;
let printLine = '';
for( let i = num1; i <= num2; i++){
    printLine += `${i} `;
    sum += i;

}

console.log(printLine)
console.log(`Sum: ${sum}`);

}
printAndSum(50, 60)
