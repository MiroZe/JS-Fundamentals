function bonusScoringSystem(arr) {

    let newArr = arr.map(Number);
    let result = [];
    let maxBonusPoints = 0;
    let maxAttendance = 0;
    
    let students = newArr.shift();
    let lectures = newArr.shift();
    let bonus = newArr.shift();
    for ( let i = 0; i < students; i++) {
        let currentSudentAttendance = newArr[i];
        
        let currenttotalBonus = currentSudentAttendance / lectures * (5 + bonus);
        if(currenttotalBonus > maxBonusPoints) {
            maxBonusPoints = currenttotalBonus;
            maxAttendance = currentSudentAttendance;
        }

    }
    console.log(`Max Bonus: ${Math.ceil(maxBonusPoints)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
  )