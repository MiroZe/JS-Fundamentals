function convertToObject(input) {

let jsnStringToObj = JSON.parse(input);
let keys = Object.keys(jsnStringToObj);

for(let key of keys) {
    console.log(`${key}: ${jsnStringToObj[key]}`);
}


}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')