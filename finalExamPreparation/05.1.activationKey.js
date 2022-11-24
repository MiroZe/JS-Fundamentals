function activationKey(input) {

    let key = input.shift();
    let line = input.shift();

    while(line !== 'Generate') {
        let currentLine = line.split('>>>')
        const command = currentLine[0];
        switch(command) {
            case 'Contains' :
                let substring = currentLine[1];
                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`)
                } else {
                    console.log('Substring not found!')
                }
                break;
            case 'Flip' :
                let direction = currentLine[1];
                let startIndex = Number(currentLine[2]);
                let endIndex = Number(currentLine[3]);
                let flipedkey = key.substring(startIndex,endIndex);
                let firstFlip = key.substring(0,startIndex);
                let secondFlip = key.substring(endIndex)
                if ( direction === 'Upper') {
                    flipedkey = flipedkey.toUpperCase();
                } else {
                    flipedkey = flipedkey.toLowerCase();
                }
                key = firstFlip + flipedkey + secondFlip;
                console.log(key);
                break;
            case 'Slice' :
                let startSliceIndex = Number(currentLine[1]);
                let endSliceIndex = Number(currentLine[2]);
                let sliceResult = key.substring(0,startSliceIndex);
                let sliceResult2 = key.substring(endSliceIndex);
                key = sliceResult + sliceResult2;
                console.log(key)
        }

        line = input.shift()
    }
    console.log(`Your activation key is: ${key}`)

}
activationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Contains>>>MNO",
    "Generate"])
