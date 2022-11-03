function convertToJSON(name,lastName,hairColor) {

let myObj = {
    name,
    lastName,
    hairColor
}
let convertedToJson = JSON.stringify(myObj);
console.log(convertedToJson);
}
convertToJSON('George', 'Jones', 'Brown')