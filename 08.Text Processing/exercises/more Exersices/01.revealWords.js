function revealWords (targetWords,templates) {
    let templatesArr = templates.split(' ');
    
let targetArr = targetWords.split(', ');

for ( word of targetArr) {
    let searchedWord = '*'.repeat(word.length);

    while(templatesArr.includes(searchedWord)) {
        let index = templatesArr.indexOf(searchedWord);
        templatesArr.splice(index,1,word);

    }

}

    console.log(templatesArr.join(' '))
}