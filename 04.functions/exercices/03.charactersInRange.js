function charactersInRange(firstChar, secondChar) {

    let startCharacter = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endCharacter = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let arr = [];


    for (let i = startCharacter + 1; i < endCharacter; i++) {
        let currentCharacter = String.fromCharCode(i)
        arr.push(currentCharacter)
    }

    console.log(arr.join(' '));


}
charactersInRange('C',
    '#'
)