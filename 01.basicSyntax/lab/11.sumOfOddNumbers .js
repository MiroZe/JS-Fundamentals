function sumOfOddNumbers(num){
    let oddNumber = 1;
    let sum = 0;
    
    for(let i = 1 ; i <= num; i++){
        sum += oddNumber
       console.log(oddNumber);
       oddNumber += 2
       
        
    }
console.log(`Sum: ${sum}`);
    
}
sumOfOddNumbers(3)