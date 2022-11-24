function emojiDetector(input) {

    let pattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let digitPattern = /[0-9]/g;

    let text = input.toString();
    let digitFromText = text.match(digitPattern).map(el => Number(el));
    let multiplyOfDigits = 1;
    digitFromText.forEach(el => multiplyOfDigits *= el);
    console.log(`Cool threshold: ${multiplyOfDigits}`);
    let counter = 0;
    let emojiObject = {};

    let emojies = text.matchAll(pattern);
    for (match of emojies) {
        let currentEmoji = match.groups.emoji;
         counter++;
        let currentEmojiSum = 0
        for (letter of currentEmoji) {
            let currentCharValue = letter.charCodeAt();
            currentEmojiSum += currentCharValue;
        }
        if (currentEmojiSum > multiplyOfDigits) {
            emojiObject[match[0]] = currentEmojiSum;
        }
    }


    console.log(`${counter} emojis found in the text. The cool ones are:`);
    for (key in emojiObject) {
        console.log(`${key}`);
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])