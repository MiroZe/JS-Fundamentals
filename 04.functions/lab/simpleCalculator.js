function simpleCalculator(operandOne, operandTwo, operator) {
    let result = 0
    switch(operator){
        case 'multiply' : result = multiply(operandOne,operandTwo); break;
        case 'divide' : result = divide(operandOne,operandTwo); break;
        case 'add' : result = add(operandOne,operandTwo); break;
        case 'subtract' : result = subtract(operandOne,operandTwo); break;
    }
    function multiply (a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
    function add (a,b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    console.log(result);
}
simpleCalculator(40,8,'divide')
