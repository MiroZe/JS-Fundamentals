function reverseAnArrayOfNumbers(counter, arr) {
    let newNumberArr = [];
    let printLine = '';
    for(let i = 0; i < counter; i++) {
        newNumberArr[i] = arr[counter - i - 1];
        if (newNumberArr.length === counter) {
        printLine += `${newNumberArr[i]}`;
        } else {
        printLine += `${newNumberArr[i]} `;
        }
    }
    console.log(printLine);
}