function shootForTheWin(input) {

    let targets = input.shift().split(' ').map(Number);
    let targetDown = 0;

    let command = input.shift();

    while (command !== 'End') {
        let index = Number(command);
        let currentTarget = targets[index];
        if (index >= 0 && index < targets.length) {
            targetDown++;
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] === -1) {
                    continue;
                }
                if (targets[i] > currentTarget) {
                    targets[i] -= currentTarget;
                } else if (targets[i] <= currentTarget) {
                    targets[i] += currentTarget;
                }

            }
            targets[index] = -1;
        }

        command = input.shift();
    }
    console.log(`Shot targets: ${targetDown} -> ${targets.join(' ')}`);
}
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
