let myObj = {
    name : 'Miroslav',
    years : 46,
    hairColor : 'black',
    high : 174,
    weight : 82
}
myObj.nationality = 'bulgarian';
myObj.gender = 'male';

let gender = myObj.gender

let arr =[];
for(let entries of Object.entries(myObj)) {
    arr.push(entries)
    
}
arr.sort((a,b) => a[1].localeCompare(b[1]));
console.table(arr);
