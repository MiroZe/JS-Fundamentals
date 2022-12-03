function mirrorWords(input) {

let text = input.shift();
let pattern =/([@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g
let result= [];
let counter = 0;
let matches = text.matchAll(pattern);
for ( let match of matches) {
    counter++;
   let currentFirst = match.groups.wordOne;
   let second = match.groups.wordTwo.split('').reverse().join('')
   if ( currentFirst === second) {
    result.push(`${currentFirst} <=> ${match.groups.wordTwo}`)
   
   }
}

if ( counter === 0) {
    console.log('No word pairs found!');
} else {
    console.log(`${counter} word pairs found!`);
}
if (result.length === 0 ) {
    console.log('No mirror words!');
} else {
    console.log(`The mirror words are:\n${result.join(', ')}`);
}

}
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])