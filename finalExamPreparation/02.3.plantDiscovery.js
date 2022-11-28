function plantDiscovery(input) {

    let plantNumbers = Number(input.shift());
    let plantObj = {};
    for ( let i = 0; i < plantNumbers; i++) {
        let currentLine = input.shift()
        let [plant, rarity] =  currentLine.split('<->');
        let rating = 0
        rarity = Number(rarity);
        plantObj[plant] = {rarity,rating};
                
    }
    let line = input.shift();
    while(line !== 'Exhibition') {
        let currentLine = line. split(': ');
        let command = currentLine.shift()
        let [plant,value] = currentLine.shift().split(' - ');
        if( !plantObj[plant]) {
            console.log('error');
        } else {
        
        switch(command) {
            case 'Rate' :
                let currentRating = Number(value);
                if(plantObj[plant].rating === 0) {
                plantObj[plant].rating = currentRating;

                } else {
                    plantObj[plant].rating = (plantObj[plant].rating + currentRating ) / 2;
                    
                }
                
                break;
            case 'Update' :
                let updateValue =  Number(value);
                plantObj[plant].rarity = updateValue;
                break;
            case 'Reset' :
                plantObj[plant].rating = 0 ;
                break;

        }
    }
    
        line = input.shift();
    }
    console.log('Plants for the exhibition:');
    for ( key in plantObj) {
        console.log(`- ${key}; Rarity: ${plantObj[key].rarity}; Rating: ${plantObj[key].rating.toFixed(2)}`)
    }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])


