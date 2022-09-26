function oddAndEvenSum(number) {

    let evenSum = 0;
    let oddSum = 0;

    let convertedToStringNumber = String(number);
    for (element of convertedToStringNumber) {
        let currentElement = Number(element)
        if (element % 2 === 0) {
            evenSum += currentElement
        } else {
            oddSum += currentElement
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);



}
oddAndEvenSum(3495892137259234)