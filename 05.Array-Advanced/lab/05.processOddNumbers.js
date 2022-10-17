function processOddNumbers(arrOfNumbers) {

    let result = arrOfNumbers.filter((x,index) => index % 2 !== 0).
    map((x) => x * 2)
    .reverse()
    .join(' ')


console.log(result);

}
processOddNumbers([3, 0, 10, 4, 7, 3])