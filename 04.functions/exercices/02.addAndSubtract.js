function addAndSubtract(numberOne, numberTwo, numberThree) {
    
  let sumOfFirstTwoNum = function (first, second) {
    return first + second;
  };

  let finalResult = function (fisrtSum, thirdNum) {
    return fisrtSum - thirdNum;
  };
  let sum = sumOfFirstTwoNum(numberOne, numberTwo);
  console.log(finalResult(sum, numberThree));
}
addAndSubtract(1, 17, 30);
