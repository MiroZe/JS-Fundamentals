function integerAndFloat(num1, num2, num3) {
  let result = num1 + num2 + num3;
  let resultToString = String(result);
  let isFloat = false;

  for (let i = 0; i < resultToString.length; i++) {
    if (resultToString[i] === ".") {
      isFloat = true;
    }
  }

  console.log(`${result} - ${isFloat ? "Float" : "Integer"}`);
}
integerAndFloat(9, 100, 1.1);

//result % 1 === 0 ? (result += " - Integer") : (result += " - Float");
//console.log(result);
