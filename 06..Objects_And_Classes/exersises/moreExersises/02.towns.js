function towns (townDataArray) {
    let towns = [];
    
    function createTown (townName,latitude,longitude) {
        myObj.town = townName;
        myObj.latitude = latitude;
        myObj.longitude = longitude;
        return myObj;
    }
        
    
for ( let data of townDataArray) {
    myObj = {}
    let currentData = data.split(' | ');
    let townName = currentData[0];
    let latitude = Number(currentData[1]);
    let longitude = Number(currentData[2]);
    let latitudeToString = latitude.toFixed(2);
    let longitudeToString = longitude.toFixed(2);

    let myTown = createTown(townName,latitudeToString,longitudeToString)
    towns.push(myTown)
}

for( let el of towns) {
    console.log(el);
}

}
towns(['Plovdiv | 136.45 | 812.575']

)