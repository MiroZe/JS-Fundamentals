function numbers(numbers) {

    let numbersArray = numbers.split(' ').map(Number);

    let sum = 0

    let numbersLength = numbersArray.length;

    for(let i = 0; i < numbersLength; i++) {
        sum += numbersArray[i];
    }
    let averageSum = sum / numbersLength
    let result = numbersArray.filter(el => el > averageSum)
        .sort((a,b) => b -a)
        .slice(0,5)
    if(result.length > 0 ) {
        console.log(result.join(' '));
    } else {
        console.log('No')
    }

}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')