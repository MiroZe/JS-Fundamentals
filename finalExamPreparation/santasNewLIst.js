function santasNewList(input) {

    let line = input.shift();
    let kidsList = {};
    let presentsList = {};

    while (line !== 'END') {
        let [name, toy, amount] = line.split('->');
        amount = Number(amount)
        if (name === 'Remove') {
            let removeName = toy;
            delete kidsList[removeName];
            line = input.shift();
            continue;
        }

        if (!kidsList[name]) {
            kidsList[name] = amount;
        } else {
            kidsList[name] += amount;
        }

        if (!presentsList[toy]) {
            presentsList[toy] = amount;

        } else {
            presentsList[toy] += amount;

        }


        line = input.shift();
    }
    let kidsArr = Object.entries(kidsList);
    kidsArr.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    console.log('Children:');
    for (kid of kidsArr) {
        console.log(kid.join(' -> '));
    }
    console.log('Presents:');
    for (key in presentsList) {
        console.log(`${key} -> ${presentsList[key]}`);
    }

}
santasNewList([
    'Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END',
])