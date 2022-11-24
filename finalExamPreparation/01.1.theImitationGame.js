function imitationGame(input) {

    let message = input.shift();

    let line = input.shift();
    while (line !== 'Decode') {

        let [command, value1, value2] = line.split('|');
        switch (command) {
            case 'Move':
                let numberOfLetters = Number(value1);

                for (let i = 0; i < numberOfLetters; i++) {

                    let arr = message.split('');
                    let currentChar = arr.shift();
                    arr.push(currentChar);
                    message = arr.join('');

                }

                break;
            case 'Insert':
                let index = Number(value1);
                let firstPart = message.substring(0, index);
                let secondPart = message.substring(index);
                message = firstPart + value2 + secondPart;
                break;


            case 'ChangeAll':
                let substring = value1;
                let replacement = value2;
                while (message.includes(substring)) {
                    message = message.replace(substring, replacement);
                }
                break;
        }

        line = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']

)