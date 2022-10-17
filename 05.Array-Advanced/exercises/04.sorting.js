function sorting(input) {

    let sortedArr = input.sort((a,b) => a-b);
    let result = []
    
    while(sortedArr.length > 0) {
        let lastElement = sortedArr.pop();
        let firstElement = sortedArr.shift();
        result.push(lastElement);
        result.push(firstElement);
    }
    console.log(result.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])