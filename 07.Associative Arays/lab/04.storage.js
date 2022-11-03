function storage(input) {

    let myStorage = {} ;

    for( line of input) {
        let [product,quantity] = line.split(' ');
        quantity = Number(quantity);
        if(!myStorage[product]) {
            myStorage[product] = quantity;
        } else {
            myStorage[product] += quantity;
        }
    }
    for ( const keys in myStorage) {
        console.log(`${keys} -> ${myStorage[keys]} `);
    }

}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
)