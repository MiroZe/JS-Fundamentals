function plantDiscovery(input) {

let plantCount =  Number(input.shift());
let plants = {};

for(let i = 0; i < plantCount;i++) {
    let [plant,rarity] = input.shift().split('<->');
    let rating = [];
   
    plants[plant] = {rarity,rating};
}

let line = input.shift()
while (line !== 'Exhibition') {
    let commandLine = line.split(': ')
    let command = commandLine[0];
    let [currentPlant,value] = commandLine[1].split(' - ')
    
    if ( !plants[currentPlant]) {
        console.log('error');
    } else {

    switch(command) {
        case 'Rate' :
            let currentRating = Number(value);
           plants[currentPlant].rating.push(currentRating);
          break;
        case 'Update' :
            let newRarity = Number(value);
            plants[currentPlant].rarity = newRarity;
            break;
        case 'Reset' :
            plants[currentPlant].rating = [];
            break;
    }
    }
    line = input.shift()
}
console.log('Plants for the exhibition:');
for ( let key in plants) {
   let sum = 0
   let currentRatings = plants[key].rating
   let length = currentRatings.length;
   let average = 0;
   if( length > 0) {
    currentRatings = currentRatings.map(el => sum += el)
    average = sum / length;
   }
    
   console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${average.toFixed(2)}`);

}

}
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]
)	