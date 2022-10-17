function sortingByTwoCryteria(arr) {
    
    let sorted = arr.sort((a,b) => {
       return a.length - b.length || a.localeCompare(b)
    })

    
    sorted.forEach(element => {
        console.log(element);
    });

    
}
sortingByTwoCryteria(['alpha', 'beta', 'gamma'])