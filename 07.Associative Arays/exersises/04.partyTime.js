function partyTime (input){

    let vipList = [];
    let regularList = [];

 let line = input.shift();
while( line !== 'PARTY') {

    let isNumber = isNaN(line[0]);
    if (!isNumber) {
        vipList.push(line);

    } else {
        regularList.push(line)
    }
    line = input.shift();
}
    let unitedList = vipList.concat(regularList);
    for (guestNumber of input) {
        if ( unitedList.includes(guestNumber)) {
            let index = unitedList.indexOf(guestNumber);
            unitedList.splice(index,1)
        }
    }
    console.log(unitedList.length)
    console.log(unitedList.join('\n'))
}

partyTime(['m8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'xys2FYzn',
        'MDzcM9ZK',
        'PARTY',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'm8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ'
    ]

)