function replaceRepeating(textLine) {

let output = textLine[0];
for (let index = 1; index < textLine.length; index++) {
    const element = textLine[index];
    const previousElement = textLine[index-1];
    if ( element !== previousElement) {
        output += element;
    }
}
console.log(output);
}
replaceRepeating('aaaaabbbbbcdddeeeedssaa');