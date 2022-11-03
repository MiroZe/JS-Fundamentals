function city(obj) {

    let keys = Object.keys(obj);
    

    for(let key of keys) {
        console.log(`${key} -> ${obj[key]}`);
    }

}
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)