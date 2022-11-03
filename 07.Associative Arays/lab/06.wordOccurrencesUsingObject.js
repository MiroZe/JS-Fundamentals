function words (input) {

    let wordsObject = {};
    let counter = 1;
    for (const words of input) {

        if(!wordsObject[words]) {
            wordsObject[words] = counter;
        } else {
            let oldCounter = wordsObject[words]
            oldCounter++;
            wordsObject[words] = oldCounter
        }

    }
    let sortedArr = Object.entries(wordsObject).sort((a,b) =>b[1] - a[1]);
    for(elements of sortedArr) {
        console.log(`${elements[0]} -> ${elements[1]} times`)

    }
}
words(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])