function storage(input) {

    let map = new Map();
    for (line of input) {
        let currentLine = line.split(' ');
        let [product, quantity] = currentLine;
        quantity = Number(quantity);

        if (!map.has(product)) {
            map.set(product, quantity)
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        }


    }
    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

}
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']

)