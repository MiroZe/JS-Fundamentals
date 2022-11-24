function minerTask(input) {

    let miningObject = {}
    for( let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i+1]);
        
        if(!miningObject[resource]) {
            miningObject[resource] = quantity;
        } else {
            miningObject[resource] += quantity
        }
    }
for(line in miningObject) {
    console.log(`${line} -> ${miningObject[line]}`);
}
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    )
