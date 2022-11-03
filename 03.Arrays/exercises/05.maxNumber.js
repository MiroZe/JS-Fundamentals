function maxNumber(arrOfNumbers) {
    let result = [];

    for (let i = 0; i < arrOfNumbers.length; i++) {
        let currentNumber = arrOfNumbers[i];
        let isMaxNumber = true;

        for (let m = i + 1; m < arrOfNumbers.length; m++) {
            if (currentNumber <= arrOfNumbers[m]) {
                isMaxNumber = false;
            }
        }
        if (isMaxNumber) {
            result.push(currentNumber);
        }
    }
    console.log(result.join(" "));
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);
