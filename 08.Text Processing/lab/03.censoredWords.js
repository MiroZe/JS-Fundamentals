function censoredWords(sentence, targetWord) {

  let censored = sentence.replace(targetWord,repeat(targetWord))
 
 while(censored.includes(targetWord)) {
    censored = censored.replace(targetWord,repeat(targetWord));
 }

 function repeat(word) {
    return '*'.repeat(word.length);
 }

 console.log(censored);
}
censoredWords('Find the hidden word', 'hidden');
