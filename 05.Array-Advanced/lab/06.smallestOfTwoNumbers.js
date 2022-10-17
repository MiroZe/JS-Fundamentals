function smallestOfTwo(arr) {

let result = arr.sort((a,b) => a-b).splice(2) 

console.log(arr.join(' '));


}
smallestOfTwo([30, 15, 50, 5])