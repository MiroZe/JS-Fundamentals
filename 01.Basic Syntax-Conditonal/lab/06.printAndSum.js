function printAndSum(startNum, endNum) {

    let output = '';
    let sum = 0

    for (let i = startNum; i <= endNum; i++) {
        if (i === endNum) {
            output += `${i}`
        } else {
            output += `${i} `
        }
        sum += i
    }

    console.log(output);
    console.log(`Sum: ${sum}`);

}
printAndSum(50, 60)