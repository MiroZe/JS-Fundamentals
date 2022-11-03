function words (input) {

    let wordsMap = new Map();
    let counter = 1;
    for (const words of input) {

        if(!wordsMap.has(words)) {
            wordsMap.set(words,counter)
        } else {
            let oldCounter = wordsMap.get(words)
            oldCounter++;
            wordsMap.set(words, oldCounter);
        }

    }
    let sortedArr = Array.from(wordsMap.entries()).sort((a,b) =>b[1] - a[1]);
    for(elements of sortedArr) {
        console.log(`${elements[0]} -> ${elements[1]} times`)

    }
}
words(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])