function login(input) {
  let index = 0;
  let userName = input[index];
  index++;
  let password = "";
  let counter = 0;
  for (let i = userName.length - 1; i >= 0; i--) {
    password += userName[i];
  }
  let command = input[index];
  index++;
  while (command !== password) {
    counter++;
    if (counter === 4) {
      console.log(`User ${userName} blocked!`);
      return;
    }
    console.log("Incorrect password. Try again.");
    command = input[index];
    index++;
  }
  console.log(`User ${userName} logged in.`);
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
