function login(input) {
  let index = 0;
  let userName = input[index];
  index++;
  let password = "";
  let tryCounter = 0;

  for (let i = userName.length - 1; i >= 0; i--) {
    password += userName[i];
  }
  let command = input[index];
  if(command === password){
    console.log(`User ${userName} logged in.`);
  }

  while (command !== password) {
    tryCounter++;
    command = input[index];
    index++;

    if (password === command) {
      console.log(`User ${userName} logged in.`);
      break;
    }
    if (tryCounter >= 4) {
      console.log(`User ${userName} blocked!`);
      break;
    }
    console.log("Incorrect password. Try again.");
  }
}
login(['Acer','login','go','let me in','recA']);
