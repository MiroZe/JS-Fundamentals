function destinationMapper(text) {

    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let travelPoinst = 0;
    let result = [];

    let matches = text.matchAll(pattern);

    for( let match of matches) {
        let currentDestination = match.groups.destination;
        let currentLength = currentDestination.length;
        travelPoinst += currentLength;
        result.push(currentDestination);
    }

    console.log(`Destinations: ${result.join(', ')}`);
    console.log(`Travel Points: ${travelPoinst}`);

}
destinationMapper("=Hawai==Invalid/invalid==i5valid=/I5valid/=i=")