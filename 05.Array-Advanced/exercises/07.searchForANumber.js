function searchForANumber(arrOne, arrTwo) {

    let elementsToTake = arrTwo[0];
    let elementsToDelete = arrTwo[1];
    let elementToSearch = arrTwo[2];
    let matchCounter = 0;


    let result = arrOne.splice(0,elementsToTake);
    result.splice(0,elementsToDelete);

   for (let i = 0; i < result.length;i++) {
       if( elementToSearch === result[i]) {
           matchCounter++;
       }
   }
    console.log(`Number ${elementToSearch} occurs ${matchCounter} times.`)

}

    searchForANumber([7, 1, 5, 8, 2, 7],
        [3, 1, 5]
    
    )