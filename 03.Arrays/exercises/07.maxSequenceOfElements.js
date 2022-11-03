function maxSequenceOfEqualElements(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++ ) {
        let tempArr = [];
        let currentNumber = arr[i];
        tempArr.push(currentNumber)
        for ( let m = i + 1; m < arr.length; m++) {
            if ( currentNumber !== arr[m]) {
                break;
            } else {tempArr.push(currentNumber)}
        }
        if(tempArr.length > newArr.length) {
            newArr = tempArr
        }


    }
    console.log(newArr.join(' '))
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])