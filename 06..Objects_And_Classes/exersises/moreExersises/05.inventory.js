function inventory(input) {

let heroesArray = [];

input.forEach(element => {
    let currentLine = element.split(' / ')
    let [heroName,level,items] = currentLine;
    let currentObj = {};
    currentObj.name = heroName;
    currentObj.level = Number(level);
    currentObj.items = items
    heroesArray.push(currentObj)
    
});

heroesArraysorted = heroesArray.sort((a,b) => a.level - b.level);
for (const hero of heroesArraysorted) { 
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
    
}

}
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    
    )