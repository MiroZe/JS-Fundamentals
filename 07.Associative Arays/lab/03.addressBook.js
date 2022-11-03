function addressBook(input) {

    let addressBook = {};
    for (let line of input) {

        let [name, address] =  line.split(':');
        addressBook[name] = address
    }

    let sortedArr = Object.entries(addressBook);
    sortedArr.sort((a,b) => a[0].localeCompare (b[0]));
    
    sortedArr.forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    })

}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)