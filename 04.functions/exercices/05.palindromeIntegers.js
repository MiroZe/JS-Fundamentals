function palindromeIntegers(arr) {

for(let element of arr){
let currentNumberToString = String(element)
let currentReversed = String(currentNumberToString).split("").reverse().join("")
let isPalindrome = (currentNumberToString === currentReversed)
console.log(isPalindrome ? 'true' :'false');

}

}
palindromeIntegers([325523])