function thePianist(input) {
    let musicSheets = Number(input.shift());
    let collection = {};

    for (let i = 0; i < musicSheets; i++) {
        let currentline = input.shift();
        let [name, composer, musicKey] = currentline.split('|');
        collection[name] = { composer, musicKey };

    }

    let line = input.shift();
    while (line !== 'Stop') {
        let currentLine = line.split('|');
        let command = currentLine[0];
        let currentPiece = currentLine[1]

        switch (command) {
            case 'Add':
                let currentComposer = currentLine[2];
                let currentKey = currentLine[3];
                if (!collection[currentPiece]) {
                    composer = currentComposer
                    musicKey = currentKey;
                    collection[currentPiece] = { composer, musicKey }

                    console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`);
                } else {
                    console.log(`${currentPiece} is already in the collection!`);
                }
                break;
            case 'Remove':
                if (collection[currentPiece]) {
                    delete collection[currentPiece];
                    console.log(`Successfully removed ${currentPiece}!`);
                } else {
                    console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                let newKey = currentLine[2];
                if (collection[currentPiece]) {
                    collection[currentPiece].musicKey = newKey;
                    console.log(`Changed the key of ${currentPiece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
                }

        }

        line = input.shift();
    }

    for (key in collection) {
        console.log(`${key} -> Composer: ${collection[key].composer}, Key: ${collection[key].musicKey}`);
    }

}
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)