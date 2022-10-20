function softUniReception(input) {

    let totalStudent = Number(input.pop())
    let totalCapacity = +input[0] + +input[1] + +input[2];
    let timeNeeded = 0;

    for(let i = totalStudent ; totalStudent > 0; i = totalStudent) {
        timeNeeded++;
        if(timeNeeded % 4 === 0) {
            continue;
        }
        totalStudent -= totalCapacity;

    }
    console.log(`Time needed: ${timeNeeded}h.`);

}
softUniReception(
    ['5','6','4','20']
)