function division(number) {

    let operand1 = 10;
    let operand2 = 7;
    let operand3 = 6;
    let operand4 = 3;
    let operand5 = 2;

    if (number % operand1 === 0) {
        console.log(`The number is divisible by ${operand1}`);
    } else if (number % operand2 === 0) {
        console.log(`The number is divisible by ${operand2}`);
    } else if (number % operand3 === 0) {
        console.log(`The number is divisible by ${operand3}`);
    } else if (number % operand4 === 0) {
        console.log(`The number is divisible by ${operand4}`);
    } else if (number % operand5 === 0) {
        console.log(`The number is divisible by ${operand5}`);
    } else {
        console.log('Not divisible');
    }
}
division(12);