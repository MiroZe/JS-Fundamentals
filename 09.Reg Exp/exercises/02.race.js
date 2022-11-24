function race(input) {

    let names = input.shift().split(', ');
    let racers = {};
    for (const name of names) {
        racers[name] = 0;
    
    }
    
    let patternName = /[A-Za-z]+/g;
    let patternDistance = /[0-9]/g;
    
    let line = input.shift();
    while (line !== 'end of race') {
    
        let currentName = line.match(patternName).join('')
        let currentDistance = line.match(patternDistance);
        let totalDistance = 0;
        if(racers.hasOwnProperty(currentName)) {
            for( distance of currentDistance) {
                totalDistance += Number(distance);
            }
            racers[currentName] += totalDistance;
        }
    
        line = input.shift();
    }
     let result = Object.entries(racers)
         .sort((a,b) => b[1] - a[1])
         .slice(0,3)
       let counter = 1;
    result.forEach(el => {
        if(counter === 1) {
            console.log(`${counter}st place: ${el[0]}`);
        } else if (counter === 2){
            console.log(`${counter}nd place: ${el[0]}`);
        } else {
            console.log(`${counter}rd place: ${el[0]}`);
        }
    
        counter++;
    })
    
    
    
    }
    race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
        'Mi*&^%$ch123o!#$%#nne787) ',
        '%$$B(*&&)i89ll)*&) ',
        'R**(on%^&ald992) ',
        'T(*^^%immy77) ',
        'Ma10**$#g0g0g0i0e',
        'end of race']
    
    )