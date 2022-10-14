function reverseInPlace(arr) {
    let printLine = '';

    for(let i = arr.length -1; i >=0; i--) {
        
        if((i === 0) === arr.length) {
            printLine += `${arr[i]}`
        } else {
            printLine += `${arr[i]} `
        }
    }

console.log(printLine);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])