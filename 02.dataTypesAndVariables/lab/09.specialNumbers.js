function specialNumbers(num){
    let sum = 0;
    let result = false
    
for(let i = 1 ; i <= num; i++){
    let currentNumber = i;
    while( currentNumber !== 0){
        sum += currentNumber % 10;
        currentNumber = parseInt(currentNumber / 10)
        
    }
    if(sum === 5 || sum === 7 || sum === 11){
        result = true;
    } else{
        result = false;
    }
    sum = 0;
    console.log(`${i} -> ${result ? 'True' : 'False'}`);
    }
    

}

specialNumbers(20)
