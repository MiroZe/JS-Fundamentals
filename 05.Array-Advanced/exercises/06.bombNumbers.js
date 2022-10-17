function bombNumbers(input, bombs) {

  let bombNumber = bombs[0];
  let bombPower = bombs[1];
  let target = input.indexOf(bombNumber);

  input.splice(target + 1, bombPower);
  input.splice(target - bombPower, bombPower + 1);

  for (let i = 0; i < input.length; i++) {
    if (input.includes(bombNumber)) {
      input.splice(target + 1, bombPower);
      input.splice(target - bombPower, bombPower + 1);
    } else {
      break;
    }
  }

  let sum = 0;
  for (let element of input) {
    sum += element;
  }
  console.log(sum);
}
bombNumbers([1, 7, 7, 1, 2, 3], [7, 3])
