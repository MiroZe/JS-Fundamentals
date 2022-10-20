function arrayModifier(array) {

    let arrayToModify = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length - 1; i++) {

        let [command, index1, index2] = array[i].split(' ');
        let element1 = arrayToModify[index1];
        let element2 = arrayToModify[index2]

        switch (command) {
            case 'swap':

                arrayToModify.splice(index1, 1, element2);
                arrayToModify.splice(index2, 1, element1)
                break;
            case 'multiply':

                let multipliedElement = element1 * element2;
                arrayToModify.splice(index1, 1, multipliedElement);
                break;

            case 'decrease':
                let decreased = arrayToModify.map(el => el - 1);
                arrayToModify = decreased;
                break;
        }

    }
    console.log(arrayToModify.join(', '));

}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'

])
