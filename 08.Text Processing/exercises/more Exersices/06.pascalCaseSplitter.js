function pascalCaseSplitter(textLine) {

    let output = textLine[0];

let modifiedTextLine = textLine.toLowerCase();
for ( let index =1; index < textLine.length; index++) {

    if(modifiedTextLine[index] !== textLine[index]) {
        output += ', '
    }
    output += textLine[index]
}

console.log(output);
}
pascalCaseSplitter('ThisIsSoAnnoyingToDo')