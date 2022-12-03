function santHelper (input) {
    let kids = [];

let numberForDecoding = Number(input.shift());
let line = input.shift();
let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]+!(?<behavior>[GN])!/g

while(line !== 'end') {
    let currentUncoded = '';
    for( let char of line) {
        let currentNum = char.charCodeAt() - numberForDecoding;
        let currentChar =  String.fromCharCode(currentNum);
        currentUncoded += currentChar;
    }
    let matches = currentUncoded.matchAll(pattern);
    
    for(let match of matches) {
        let name = match.groups.name;
        let behavior = match.groups.behavior;
        if (behavior === 'G') {
            kids.push(name)
        }
    }

    line = input.shift()
}
kids.forEach(el =>console.log(el));
}
santHelper(['3',
    'N}eideidmk$\'(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'])