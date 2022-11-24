function softUniRecpetion(array) {

    let firstEmplCapacity = Number(array[0]);
    let secondEmplCapacity = Number(array[1]);
    let thirdEmplCapacity = Number(array[2]);
    let hourCounter = 0;
    let totalCapacity = firstEmplCapacity + secondEmplCapacity + thirdEmplCapacity;

    let studentsWithQuestions = Number(array[3])
    while( studentsWithQuestions > 0) {
        hourCounter++
        if ( hourCounter % 4 === 0) {
            continue;
        }
        studentsWithQuestions -= totalCapacity;
    }

    console.log(`Time needed: ${hourCounter}h.`);
}
softUniRecpetion(['3','2','5','40'])