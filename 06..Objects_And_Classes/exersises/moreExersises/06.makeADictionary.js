function makeADictionary(input) {
    
        let book = {}
        for(let i = 0; i < input.length; i++) {
            input[i] = JSON.parse(input[i])
            let key = Object.keys(input[i]);
            let value = Object.values(input[i]);
            book[key] = value[0]
        }
        let keys = Object.keys(book)
        let sortedKeys = keys.sort((a,b) => a.localeCompare(b))
        for(let key of sortedKeys) {
            console.log(`Term: ${key} => Definition: ${book[key]}`);
        }
    
    }
makeADictionary([
  '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
  '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
  '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
  '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
  '{"Cup":"A small bowl-shaped"}',
  '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
]);