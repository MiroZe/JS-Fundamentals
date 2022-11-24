function matchFullName(text) {

let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g
let validNames = [];
let validName = pattern.exec(text)

while( validName!== null) {
    validNames.push(validName[0])
    validName = pattern.exec(text)
}

console.log(validNames.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")