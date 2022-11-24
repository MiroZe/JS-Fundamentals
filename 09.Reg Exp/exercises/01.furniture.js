function furniture(input) {


    let pattern = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>\d+[.\d]+)!(?<quantity>\d+)\b/g;

    let matches = input.toString().matchAll(pattern);
    let sum = 0;
    console.log('Bought furniture:')
    for (const match of matches) {
        let price = Number(match.groups.price);
        let quantity = Number(match.groups.quantity);
        sum += quantity * price;
        console.log(`${match.groups.furniture}`)
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`)


}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])

