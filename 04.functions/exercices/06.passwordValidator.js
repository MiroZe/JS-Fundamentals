function passwordValidator(password) {

    let digitCounter = 0;
    let elements = [];
    let passwordLength = password.length
    let isPasswordValid = true;

    if (passwordLength < 6 || passwordLength > 10) {
        console.log('Password must be between 6 and 10 characters');
        isPasswordValid = false;
    }

    for (let i = 0; i < passwordLength; i++) {
        let currentCharacter = password[i]
        elements.push(currentCharacter)
    }
    for (let characters of elements) {

        let currentCharacter = Number(characters);
        let isNanElement = function (element) {
            return isNaN(currentCharacter)
        }
        if (!isNanElement(currentCharacter)) {
            digitCounter++;
        }
        let isSymbol = function (character) {
            return /^[A-Za-z0-9]*$/.test(character)

        }
        if (!isSymbol(characters)) {
            isPasswordValid = false;
            console.log('Password must consist only of letters and digits');
            break;

        }

    }
    if (digitCounter < 2) {
        console.log('Password must have at least 2 digits');
        isPasswordValid = false;
    }
    if (isPasswordValid) {
        console.log('Password is valid');
    }
}
//passwordValidator('logIn')
passwordValidator('11111')
//passwordValidator('Pa$s$s')