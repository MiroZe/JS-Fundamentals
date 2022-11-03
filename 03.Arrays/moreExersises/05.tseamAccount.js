function tseamAccount(arr) {
  let installed = arr[0].split(" ");

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i].split(" ");
    let command = current[0];
    let currentGame = current[1];
    let isAlreadyExist = installed.includes(currentGame);
    let indexExist = installed.indexOf(currentGame);

    switch (command) {
      case "Install":
        if (isAlreadyExist === false) {
          installed.push(currentGame);
        }
        break;
      case "Uninstall":
        if (indexExist !== -1) {
          installed.splice(indexExist, 1);
        }
        break;
      case "Update":
        if (isAlreadyExist) {
          installed.splice(indexExist, 1);
          installed.push(currentGame);
        } 
        break;
      case "Expansion":
        let expanded = current[1].split("-");
        let expandedGame = expanded[0];
        let expansionName = expanded[1];
        if (installed.includes(expandedGame)) {
          let indexOfExpansion = installed.indexOf(expandedGame);
          let newName = expanded.join(":");

          installed.splice(indexOfExpansion +1, 0, newName);
        }
        break;
      case "Play!":
        break;
    }
  }

  console.log(installed.join(" "));
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
);
